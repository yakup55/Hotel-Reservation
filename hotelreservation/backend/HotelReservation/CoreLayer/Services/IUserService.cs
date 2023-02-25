using CoreLayer.DTOs;
using CoreLayer.Models;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IUserService:IGenericService<AppUser,AppUserDto>
    {
        Task<ResponseDto<AppUserDto>> CreateUserAsync(UserCreateDto createDto);
        Task<ResponseDto<AppUserDto>>GetByEmailAsync(string userMail);
        Task<ResponseDto<NoDataDto>> CreateRoleAync(string roleName);
        //Task<ResponseDto<NoDataDto>> UpdateUserRoles(string roleName,string id);
        Task<ResponseDto<NoDataDto>> DeleteUserRoles(string id);
        Task<ResponseDto<NoDataDto>> DeleteUser(string id);

    }
}
