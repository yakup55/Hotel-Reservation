using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using Microsoft.AspNetCore.Identity;
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
        private readonly IUserRepository userRepository;

        public UserService(IUnitOfWork unitOfWork, IGenericRepository<AppUser> repository, UserManager<AppUser> userManager, IUserRepository userRepository) : base(unitOfWork, repository)
        {
            this.userManager = userManager;
            this.userRepository = userRepository;
        }

        public async Task<ResponseDto<AppUser>> CreateUserAsync(UserCreateDto createDto)
        {
            var user = new AppUser()
            {
                Email = createDto.UserMail,
                UserName = createDto.UserName,
                PhoneNumber = createDto.UserNumber
            };
            var result = await userManager.CreateAsync(user, createDto.UserPasword);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(x => x.Description).ToList();
                return ResponseDto<AppUser>.Fail(new ErrorDto(errors), 400);
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
        public async Task<ResponseDto<AppUserDto>> GetByEmailAsync(string userMail)
        {
            var user = await userManager.FindByEmailAsync(userMail);
            if (user == null)
            {
                return ResponseDto<AppUserDto>.Fail("User Yok", 404);
            }
            return ResponseDto<AppUserDto>.Success(ObjectMapper.Mapper.Map<AppUserDto>(user), 200);
        }

        public async Task<ResponseDto<AppUserDto>> UpdateUser(AppUserDto user, string id)
        {
            var currentUser = await userManager.FindByIdAsync(id);
            currentUser.Email = user.UserEmail;
            currentUser.UserName = user.UserName;
            currentUser.PhoneNumber = user.UserNumber;
            await userManager.UpdateAsync(currentUser);
            return ResponseDto<AppUserDto>.Success(200);


        }

    }
}
