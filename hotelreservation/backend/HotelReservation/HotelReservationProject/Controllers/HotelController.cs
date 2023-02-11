using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HotelController : BaseController
    {
        private readonly IHotelService service;

        public HotelController(IHotelService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetHotelList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet]
        public async Task<IActionResult> LastHotel()
        {
            return ActionResultInstance(await service.LastHotel());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByHotel(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddHotel(HotelDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateHotel(HotelDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.HotelId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
