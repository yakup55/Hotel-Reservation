using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceLayer.DtoMapper;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class RoleService : GenericService<IdentityRole, IdentityRole>, IRoleService
    {
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<AppUser> userManager;

        public RoleService(IUnitOfWork unitOfWork, IGenericRepository<IdentityRole> repository, RoleManager<IdentityRole> roleManager, UserManager<AppUser> userManager) : base(unitOfWork, repository)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
        }
        public async Task<ResponseDto<NoDataDto>> DeleteRoles(string id)
        {
            var role = await roleManager.FindByIdAsync(id);
            if (role == null)
            {
                return ResponseDto<NoDataDto>.Fail("Role Yok", 404);
            }
            await roleManager.DeleteAsync(role);
            return ResponseDto<NoDataDto>.Success(200);
        }
        public async Task<ResponseDto<IdentityRole>> CreateRoleAync(AppRole roleName)
        {
            var result = await roleManager.CreateAsync(new IdentityRole()
            {
                Name = roleName.RoleName
            });
            if (!result.Succeeded)
            {
                return ResponseDto<IdentityRole>.Fail("Hatalı", 400);
            }
            return ResponseDto<IdentityRole>.Success(200);
        }

        public async Task<ResponseDto<IdentityRole>> GetByRoleAsync(string id)
        {
            var role = await roleManager.FindByIdAsync(id);
            if (role == null)
            {
                return ResponseDto<IdentityRole>.Fail("Role Yok", 404);
            }
            return ResponseDto<IdentityRole>.Success(ObjectMapper.Mapper.Map<IdentityRole>(role), 200);
        }

        public async Task<ResponseDto<IdentityRole>> AddUserRole(UserRoleDto role)
        {
          var hasUser=await userManager.FindByIdAsync(role.UserId);
            var hasRole = await roleManager.FindByNameAsync(role.RoleName);
            if (hasUser == null)
            {
                return ResponseDto<IdentityRole>.Fail("Kullanıcı Yok", 404);
            }
             if (hasRole == null)
            {
                return ResponseDto<IdentityRole>.Fail("Role Yok", 404);
            }
            await userManager.AddToRoleAsync(hasUser, role.RoleName);
            return ResponseDto<IdentityRole>.Success(200);

        }
    }
}
