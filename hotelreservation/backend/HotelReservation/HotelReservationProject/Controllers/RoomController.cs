using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoomController : BaseController
    {
        private readonly IRoomService service;

        public RoomController(IRoomService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetRoomList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByRoom(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> RoomOneDetail(int id)
        {
            return ActionResultInstance(await service.RoomOneDetail(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddRoom(RoomDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateRoom(RoomDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.RoomId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
