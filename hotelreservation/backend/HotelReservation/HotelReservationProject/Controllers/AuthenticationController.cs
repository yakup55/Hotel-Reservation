using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthenticationController : BaseController
    {
        private readonly IAuthenticationService service;

        public AuthenticationController(IAuthenticationService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> LogOut()
        {
            return ActionResultInstance(await service.LogOut());
        }
        [HttpPost]
        public async Task<IActionResult> CreateToken(UserLoginDto loginDto)
        {
            return ActionResultInstance(await service.CreateTokenAsync(loginDto));
        }
        [HttpPost]
        public IActionResult CreateTokenByClient(ClientLoginDto loginDto)
        {
            return ActionResultInstance(service.CreateTokenByClient(loginDto));
        }
        [HttpPost]
        public async Task<IActionResult> RevokeRefreshToken(RefreshTokenDto refreshTokenDto)
        {
            return ActionResultInstance(await service.RevokeRefreshToken(refreshTokenDto.Token));
        }
        [HttpPost]
        public async Task<IActionResult> CreateTokenByRefreshToken(RefreshTokenDto refreshTokenDto)
        {
            return ActionResultInstance(await service.CreateTokenByRefreshToken(refreshTokenDto.Token));
        }
    }
}
