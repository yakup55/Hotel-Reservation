using CoreLayer.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelReservationProject.CustomValidatior
{
    public class PasswordValidatior : IPasswordValidator<AppUser>
    {
        public Task<IdentityResult> ValidateAsync(UserManager<AppUser> manager, AppUser user, string? password)
        {
            var errors=new List<IdentityError>();
            if (password!.ToLower().Contains(user.UserName.ToLower()))
            {
                errors.Add(new IdentityError()
                {
                    Code = "PasswordContainUserName",
                    Description = "Şifrede Adınız olmamalı"
                });
            }
            if (password!.ToLower().StartsWith("1234"))
            {
                errors.Add(new IdentityError()
                {
                    Code = "PasswordContain1234",
                    Description = "Şifreniz Ardışık sayı istememli"
                });
            }
            if(errors.Any())
            {
                return Task.FromResult(IdentityResult.Failed(errors.ToArray()));
            }
            return Task.FromResult(IdentityResult.Success);
        }
    }
}
