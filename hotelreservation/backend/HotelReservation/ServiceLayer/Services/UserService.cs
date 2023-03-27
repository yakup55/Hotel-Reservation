using Azure.Core;
using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json.Linq;
using ServiceLayer.DtoMapper;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ServiceLayer.Services
{
    public class UserService : GenericService<AppUser, AppUser>, IUserService
    {
        private readonly UserManager<AppUser> userManager;
        private readonly SignInManager<AppUser> signInManager;
        private readonly IUserRepository userRepository;
        private readonly IEmailService emailService;

        public UserService(IUnitOfWork unitOfWork, IGenericRepository<AppUser> repository, UserManager<AppUser> userManager, IEmailService emailService, IUserRepository userRepository, SignInManager<AppUser> signInManager) : base(unitOfWork, repository)
        {
            this.userManager = userManager;
            this.emailService = emailService;
            this.userRepository = userRepository;
            this.signInManager = signInManager;
        }

        public async Task<ResponseDto<NoDataDto>> ConfirmEmailSend(EmailDto email)
        {
            var hasUser = await userManager.FindByEmailAsync(email.Email);
            if (hasUser==null)
            {
                return ResponseDto<NoDataDto>.Fail("Böyle Mail Yok", 404);
            }
            string token = await userManager.GenerateEmailConfirmationTokenAsync(hasUser);
            var emailResult = await userManager.ConfirmEmailAsync(hasUser, token);
            if (emailResult.Succeeded)
            {
                return ResponseDto<NoDataDto>.Success(200);
            }
            else
            {
                return ResponseDto<NoDataDto>.Fail("Hatalı",400);
            }


        }

        public async Task<ResponseDto<AppUser>> CreateUserAsync(UserCreateDto createDto)
        {
            var user = new AppUser()
            {
                Email = createDto.UserMail,
                UserName = createDto.UserName,
                PhoneNumber = createDto.UserNumber,
            };
            if (userManager.Users.Any(x => x.PhoneNumber == user.PhoneNumber))
            {
                return ResponseDto<AppUser>.Fail("Bu Telefon Numarası Zaten Kayıtlıdır", 400);
            }
            var result = await userManager.CreateAsync(user, createDto.UserPasword);

            var hasUser = await userManager.FindByIdAsync(user.Id);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(x => x.Description).ToList();
                return ResponseDto<AppUser>.Fail(new ErrorDto(errors), 400);
            }

            if (userManager.IsEmailConfirmedAsync(hasUser).Result == false)
            {
                if (result.Succeeded)
                {

                    string link = "https://reacthotelreservation.azurewebsites.net/sendemailconfirm/" + hasUser.Email;
                    await emailService.SendEmailConfirm(link, hasUser.Email);
                }
            }
            return ResponseDto<AppUser>.Success(ObjectMapper.Mapper.Map<AppUser>(user), 200);
        }
        public async Task<ResponseDto<NoDataDto>> DeleteUser(string id)
        {
            var user = await userManager.FindByIdAsync(id);
            if (user == null)
            {
                ResponseDto<NoDataDto>.Fail("User Yok", 404);
            }
            await userManager.DeleteAsync(user);
            return ResponseDto<NoDataDto>.Success(200);
        }
        public async Task<ResponseDto<AppUser>> GetByEmailAsync(string userMail)
        {
            var user = await userManager.FindByEmailAsync(userMail);
            if (user == null)
            {
                return ResponseDto<AppUser>.Fail("User Yok", 404);
            }
            return ResponseDto<AppUser>.Success(ObjectMapper.Mapper.Map<AppUser>(user), 200);
        }

        public async Task<ResponseDto<AppUser>> GetByUserAsync(string userId)
        {
            var hasUser=await userManager.FindByIdAsync(userId);
            if (hasUser == null)
            {
                return ResponseDto<AppUser>.Fail("User Yok", 404);
            }
            return ResponseDto<AppUser>.Success(ObjectMapper.Mapper.Map<AppUser>(hasUser), 200);
        }

        public async Task<ResponseDto<NoDataDto>> ResetPassword(PasswordResetDto resetDto)
        {
            var hasUser = await userManager.FindByEmailAsync(resetDto.Email);
            if (hasUser == null)
            {
                return ResponseDto<NoDataDto>.Fail("Kullanıcı Yok", 404);
            }
            string passwordResetToken = await userManager.GeneratePasswordResetTokenAsync(hasUser);
            IdentityResult result = await userManager.ResetPasswordAsync(hasUser, passwordResetToken, resetDto.PasswordNew);
            if (result.Succeeded)
            {
                return ResponseDto<NoDataDto>.Success(200);
            }
            else
            {
                return ResponseDto<NoDataDto>.Fail("Hatalı", 400);
            }
        }

        public async Task<ResponseDto<NoDataDto>> ResetPasswordEmailSend(EmailDto email)
        {
            var hasUser = await userManager.FindByEmailAsync(email.Email);
            if (hasUser is null)
            {
                return ResponseDto<NoDataDto>.Fail("Bu Maile Ait Kullanıcı Yok", 404);
            }
            // string passwordResetToken = await userManager.GeneratePasswordResetTokenAsync(hasUser);
            var link = "https://reacthotelreservation.azurewebsites.net/resetpassword/" + hasUser.Email;
            var passwordResultLink = link;

            await emailService.SendResetPasswordEmail(passwordResultLink, hasUser.Email!);
            return ResponseDto<NoDataDto>.Success(200);
        }

        public async Task<ResponseDto<UserUpdateDto>> UpdateUser(UserUpdateDto user, string id)
        {
            var currentUser = await userManager.FindByIdAsync(id);
            if (currentUser==null)
            {
                return ResponseDto<UserUpdateDto>.Fail("Kullanıcı Yok",404);
            }
            currentUser.Image = user.UserImage;
            currentUser.CityId = user.CityId;
            currentUser.BirthDate = user.BirthDate;
            await userManager.UpdateAsync(currentUser);
            return ResponseDto<UserUpdateDto>.Success(200);
        }

        public async Task<ResponseDto<NoDataDto>> UserPasswordUpdate(UserPasswordUpdateDto userPassword)
        {
            var hasUser = await userManager.FindByEmailAsync(userPassword.Email);
            if (hasUser is null)
            {
                return ResponseDto<NoDataDto>.Fail("Bu Maile Ait Kullanıcı Yok", 404);
            }
            var checkOlPassword = await userManager.CheckPasswordAsync(hasUser, userPassword.PasswordOld);
            if (!checkOlPassword)
            {
                return ResponseDto<NoDataDto>.Fail("Eski Şifreniz Yanlış", 400);
            }
            var resultChangePassword = await userManager.ChangePasswordAsync(hasUser, userPassword.PasswordOld, userPassword.PasswordNew);
            if (!resultChangePassword.Succeeded)
            {
                return ResponseDto<NoDataDto>.Fail("Hatalı", 400);
            }
            await userManager.UpdateSecurityStampAsync(hasUser);
            await signInManager.SignOutAsync();
            await signInManager.PasswordSignInAsync(hasUser, userPassword.PasswordNew, true, false);

            return ResponseDto<NoDataDto>.Success(200);
        }
    }
}
