using Azure;
using CoreLayer.Configuration;
using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly List<Client> clients;
        private readonly UserManager<AppUser > userManager;
        private readonly ITokenService tokenService;
        private IUnitOfWork unitOfWork;
        private readonly IGenericRepository<UserRefreshToken> genericService;

        public AuthenticationService(IOptions<List<Client>> clients, UserManager<AppUser> userManager, ITokenService tokenService, IUnitOfWork unitOfWork, IGenericRepository<UserRefreshToken> genericService)
        {
            this.clients = clients.Value;
            this.userManager = userManager;
            this.tokenService = tokenService;
            this.unitOfWork = unitOfWork;
            this.genericService = genericService;
        }

        public async Task<ResponseDto<TokenDto>> CreateTokenAsync(UserLoginDto login)
        {
            if (login ==null)
            {
                throw new ArgumentNullException(nameof(login));
            }
            var user = await userManager.FindByEmailAsync(login.UserMail);
            if (user == null)
            {
                return ResponseDto<TokenDto>.Fail("Email or password is wrong", 400);
            }
            if (!await userManager.CheckPasswordAsync(user,login.UserPassword))
            {
                return ResponseDto<TokenDto>.Fail("Email or password is wrong", 400);
            }
            var token = tokenService.CreateToken(user);
            var userRefreshToken=genericService.Where(x=>x.userId==user.Id).SingleOrDefault();
            if (userRefreshToken == null)
            {
                await genericService.AddAsync(new UserRefreshToken()
                {
                    userId = user.Id,
                    Code = token.RefreshToken,
                    Expiration = token.RefreshTokenExpiration
                });
            }
            else
            {
                userRefreshToken.Code = token.RefreshToken;
                userRefreshToken.Expiration = token.RefreshTokenExpiration;
            }
            await unitOfWork.CommintAsync();
            return ResponseDto<TokenDto>.Success(token, 200);
        }

        public ResponseDto<ClientTokenDto> CreateTokenByClient(ClientLoginDto clientLoginDto)
        {
            var client = clients.SingleOrDefault(x => x.Id==clientLoginDto.ClientId && x.Secret==clientLoginDto.ClientSecret);
            if (client==null)
            {
                ResponseDto<ClientTokenDto>.Fail("ClientId Or ClientSecret not found", 404);
            }
            var token=tokenService.CreateTokenByClient(client);
            return ResponseDto<ClientTokenDto>.Success(token, 200);
        }

        public async Task<ResponseDto<TokenDto>> CreateTokenByRefreshToken(string refreshToken)
        {
            var existRefresToken = await genericService.Where(x => x.Code == refreshToken).SingleOrDefaultAsync();
            if (existRefresToken is null)
            {
                return ResponseDto<TokenDto>.Fail("RefreshToken Not Found", 404);
            }
            var user = await userManager.FindByIdAsync(existRefresToken.userId);
            if (user==null)
            {
                return ResponseDto<TokenDto>.Fail("UserId Not Found", 404);
            }
            var tokenDto=tokenService.CreateToken(user);
            existRefresToken.Code = tokenDto.RefreshToken;
            existRefresToken.Expiration = tokenDto.RefreshTokenExpiration;
            await unitOfWork.CommintAsync();
            return ResponseDto<TokenDto>.Success(tokenDto, 200);

        }

        public async Task<ResponseDto<NoDataDto>> RevokeRefreshToken(string refreshToken)
        {
            var existRefresToken = await genericService.Where(x => x.Code == refreshToken).SingleOrDefaultAsync();
            if (existRefresToken is null)
            {
                return ResponseDto<NoDataDto>.Fail("RefreshToken Not Found", 404);
            }
             genericService.DeleteAsync(existRefresToken);
            return ResponseDto<NoDataDto>.Success(200);
        }
    }
}
