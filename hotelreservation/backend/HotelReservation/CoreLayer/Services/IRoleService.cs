using CoreLayer.DTOs;
using Microsoft.AspNetCore.Identity;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IRoleService:IGenericService<IdentityRole, IdentityRole>
    {
        Task<ResponseDto<IdentityRole>> CreateRoleAync(AppRole roleName);
        Task<ResponseDto<NoDataDto>> DeleteRoles(string id);
        Task<ResponseDto<IdentityRole>> GetByRoleAsync(string id);
    }
}
