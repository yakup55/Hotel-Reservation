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
    public class UserService : GenericService<AppUser,AppUserDto>,IUserService
    {
        private readonly UserManager<AppUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IUserRepository userRepository;

        public UserService(IUnitOfWork unitOfWork, IGenericRepository<AppUser> repository, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager) : base(unitOfWork, repository)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task<ResponseDto<AppUserDto>> CreateUserAsync(UserCreateDto createDto)
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
                return ResponseDto<AppUserDto>.Fail(new ErrorDto(errors), 400);
            }
            return ResponseDto<AppUserDto>.Success(ObjectMapper.Mapper.Map<AppUserDto>(user), 200);
        }

        public async Task<ResponseDto<NoDataDto>> DeleteUser(string id)
        {
           var user=await userManager.FindByIdAsync(id);
            if (user==null)
            {
                ResponseDto<NoDataDto>.Fail("User Yok", 404);
            }
            await userManager.DeleteAsync(user);
            return ResponseDto<NoDataDto>.Success(200);
        }




        public async Task<ResponseDto<NoDataDto>> CreateRoleAync(string roleName)
        {
            var result = await roleManager.CreateAsync(new IdentityRole()
            {
                Name = roleName
            });
            if (!result.Succeeded)
            {
                return ResponseDto<NoDataDto>.Fail("Hatalı", 400);
            }
            return ResponseDto<NoDataDto>.Success(200);
        }

        public async Task<ResponseDto<NoDataDto>> DeleteUserRoles(string id)
        {
            var roleDelete = await roleManager.FindByIdAsync(id);
            if (roleDelete == null)
            {
                return ResponseDto<NoDataDto>.Fail("Role Yok", 404);
            }
            await roleManager.DeleteAsync(roleDelete);
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

        //        public async Task<ResponseDto<NoDataDto>> UpdateUserRoles(string roleName, string id)
        //        {
        //throw new NotImplementedException();
        //        }
    }
}
