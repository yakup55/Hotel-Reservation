using CoreLayer.Models;
using Microsoft.AspNetCore.Identity;

namespace HotelReservationProject.CustomValidatior
{
    public class UserValidatior : IUserValidator<AppUser>
    {
        public Task<IdentityResult> ValidateAsync(UserManager<AppUser> manager, AppUser user)
        {
            var errors=new List<IdentityError>();
            var isDigit = int.TryParse(user.UserName[0]!.ToString(), out _);
            if (isDigit)
            {
                errors.Add(new IdentityError()
                {
                    Code = "UserNameContainFirstLetterDigit",
                    Description = "Kullanıcı adının ilk karakteri sayısal karakter olmamalı"
                });
            }
            if (errors.Any())
            {
                return Task.FromResult(IdentityResult.Failed(errors.ToArray()));
            }
            return Task.FromResult(IdentityResult.Success);
        }
    }
}
