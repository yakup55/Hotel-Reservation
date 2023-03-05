using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ReservationController : BaseController
    {
        private readonly IReservationService service;

        public ReservationController(IReservationService service)
        {
            this.service = service;
        }
    
        [HttpGet]
        public async Task<IActionResult> GetReservationList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByReservation(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> UserReservationList(string id)
        {
            return ActionResultInstance(await service.UserReservationList(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddReservation(ReservartionDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult>UpdateReservation(ReservartionDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.ReservationId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
