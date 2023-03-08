using CoreLayer.DTOs;
using CoreLayer.Models;
using Microsoft.AspNetCore.Identity;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IUserService:IGenericService<AppUser, AppUser>
    {
        Task<ResponseDto<AppUser>> CreateUserAsync(UserCreateDto createDto);
        Task<ResponseDto<AppUser>>GetByEmailAsync(string userMail);
        Task<ResponseDto<AppUser>>GetByUserAsync(string userId);
        Task<ResponseDto<NoDataDto>> DeleteUser(string id);
        Task<ResponseDto<UserUpdateDto>> UpdateUser(UserUpdateDto user, string id);
        Task<ResponseDto<NoDataDto>> ResetPasswordEmailSend(EmailDto email);
        Task<ResponseDto<NoDataDto>> ConfirmEmailSend(EmailDto email);
        Task<ResponseDto<NoDataDto>> ResetPassword(PasswordResetDto resetDto);
        Task<ResponseDto<NoDataDto>> UserPasswordUpdate(UserPasswordUpdateDto userPassword);
    }
}
