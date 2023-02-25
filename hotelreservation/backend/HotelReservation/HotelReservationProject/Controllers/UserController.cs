using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUserService service;

        public UserController(IUserService service)
        {
            this.service = service;
        }
        //[HttpPost]
        //public async Task <IActionResult> CreateUser(UserCreateDto createDto)
        //{
        //    return ActionResultInstance(await service.CreateUserAsync(createDto));
        //}
        //[HttpPost("{roleName}")]
        //public async Task<IActionResult> CreateRole(string roleName)
        //{
        //    return ActionResultInstance(await service.CreateUserRoles(roleName));
        //}
        //[HttpGet("{userMail}")]
        //public async Task<IActionResult> GetUser(string userMail)
        //{
        //    return ActionResultInstance(await service.GetByEmailAsync(userMail));
        //}
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> RoleDelete(string id)
        //{
        //    return ActionResultInstance(await service.DeleteUserRoles(id));
        //}
        [HttpGet]
        public async Task<IActionResult> GetUserList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByUserEmail(string id)
        { 
            return ActionResultInstance(await service.GetByEmailAsync(id)); 
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser(UserCreateDto user)
        {
            return ActionResultInstance(await service.CreateUserAsync(user));
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole(string roleName)
        {
            return ActionResultInstance(await service.CreateRoleAync(roleName));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteRole(string id)
        {
            return ActionResultInstance(await service.DeleteUserRoles(id));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            return ActionResultInstance(await service.DeleteUser(id));
        }
      
    }
}
