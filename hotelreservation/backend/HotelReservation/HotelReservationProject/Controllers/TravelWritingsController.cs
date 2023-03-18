using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TravelWritingsController : BaseController
    {
        private readonly ITravelWritignsService service;

        public TravelWritingsController(ITravelWritignsService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetTravelWritingsList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByTravelWritings(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{userId}")]
        public async Task<IActionResult> TravelWritingsUserList(string userId)
        {
            return ActionResultInstance(await service.TravelWritingsUserList(userId));
        }
        [HttpPost]
        public async Task<IActionResult> AddTravelWritings(TravelWritingDto dto)
        {
           var date= dto.TravelDateTime= DateTime.Now;
            dto.TravelStatus = false;
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateTravelWritings(TravelWritingDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.TravelWritingId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTravelWritings(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
