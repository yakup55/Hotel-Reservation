using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoleController : BaseController
    {
        private readonly IRoleService service;

        public RoleController(IRoleService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetRoleList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByRole(string id)
        {
            return ActionResultInstance(await service.GetByRoleAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole(string roleName)
        {
            return ActionResultInstance(await service.CreateRoleAync(roleName));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            return ActionResultInstance(await service.DeleteRoles(id));
        }
    }
}
