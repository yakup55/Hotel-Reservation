using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SharedLibray.Configuration;
using SharedLibray.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedLibray.Extensions
{
    public static class CustomTokenAuth
    {
        public static void AddCustomTokenAuth(this IServiceCollection services,CustomTokenOption tokenOption,IConfiguration configuration)
        {
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, opts =>
            {
                var tokenOptions = configuration.GetSection("TokenOption").Get<CustomTokenOption>();

                //opts.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
                //{
                //    ValidIssuer = tokenOptions.Issuer,
                //    ValidAudience = tokenOptions.Audinces[0],
                //    IssuerSigningKey = SignService.GetSymmetricSecurityKey(tokenOptions.SecurityKey),
                //    ValidateIssuerSigningKey = true,
                //    ValidateAudience = true,
                //    ValidateIssuer = true,
                //    ValidateLifetime = true,
                //    ClockSkew = TimeSpan.Zero
                //};
            });
        }
    }
}
