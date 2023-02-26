using CoreLayer.Configuration;
using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SharedLibray.Configuration;
using SharedLibray.Service;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class TokenService : ITokenService
    {
        private readonly UserManager<AppUser> userManager;
        private readonly CustomTokenOption tokenOption;

        public TokenService(UserManager<AppUser> userManager, IOptions<CustomTokenOption> tokenOption)
        {
            this.userManager = userManager;
            this.tokenOption = tokenOption.Value;
        }
        private string CreateRefreshToken()
        {
            var numberByte = new byte[32];
            using var rnd = RandomNumberGenerator.Create();
            rnd.GetBytes(numberByte);
            return Convert.ToBase64String(numberByte);
        }
        private async Task<IEnumerable<Claim>> GetClaims(AppUser appUser, List<string> audinces)
        {
            var userRoles = await userManager.GetRolesAsync(appUser);
            var userList = new List<Claim>
            {
            new Claim(ClaimTypes.NameIdentifier,appUser.Id),
            new Claim(ClaimTypes.Name, appUser.UserName),
            new Claim(JwtRegisteredClaimNames.Email, appUser.Email),
            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
            //new Claim("city",appUser.City),
            //new Claim("birthdate",appUser.BirthDate.ToString())
            };
            userList.AddRange(audinces.Select(x => new Claim(JwtRegisteredClaimNames.Aud, x)));
            userList.AddRange(userRoles.Select(x => new Claim(ClaimTypes.Role, x)));
            return userList;
        }
        private  IEnumerable<Claim> GetClaimByClient(Client client)
            {
            var claims=new List<Claim>();
            claims.AddRange(client.Audiences.Select(x => new Claim(JwtRegisteredClaimNames.Aud, x)));
            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString());
            new Claim(JwtRegisteredClaimNames.Sub,client.Id.ToString());
            return claims;
            }

        public TokenDto CreateToken(AppUser user)
        {
           var accessTokenExpiration=DateTime.Now.AddMinutes(tokenOption.AccessTokenExpiration);
            var  refreshTokenExpiration = DateTime.Now.AddMinutes(tokenOption.RefreshTokenExpiration);
            var securityKey =SignService.GetSymmetricSecurityKey(tokenOption.SecurityKey);
            SigningCredentials credentials = new SigningCredentials(securityKey,SecurityAlgorithms.HmacSha256Signature);
            JwtSecurityToken jwtSecurityToken = new JwtSecurityToken(
                issuer: tokenOption.Issuer,
                expires: accessTokenExpiration,
                notBefore: DateTime.Now,
             claims: GetClaims(user, tokenOption.Audience).Result,
             signingCredentials: credentials);

            var handler=new JwtSecurityTokenHandler();
            var token=handler.WriteToken(jwtSecurityToken);
            var tokenDto = new TokenDto
            {
                AccessToken = token,
                RefreshToken = CreateRefreshToken(),
                AccessTokenExpiration = accessTokenExpiration,
                RefreshTokenExpiration = refreshTokenExpiration,
            };
            return tokenDto;
        }

        public ClientTokenDto CreateTokenByClient(Client client)
        {
            var accessTokenExpiration = DateTime.Now.AddMinutes(tokenOption.AccessTokenExpiration);
            var refreshTokenExpiration = DateTime.Now.AddMinutes(tokenOption.RefreshTokenExpiration);
            var securityKey = SignService.GetSymmetricSecurityKey(tokenOption.SecurityKey);
            SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
            JwtSecurityToken jwtSecurityToken = new JwtSecurityToken(
                issuer: tokenOption.Issuer,
                expires: accessTokenExpiration,
                notBefore: DateTime.Now,
             claims: GetClaimByClient(client),
             signingCredentials: credentials);


            var handler = new JwtSecurityTokenHandler();
            var token = handler.WriteToken(jwtSecurityToken);
            var tokenDto = new ClientTokenDto
            {
                AccessToken = token,
                AccessTokenExpiration = accessTokenExpiration,
            };
            return tokenDto;
        }
    }
}
