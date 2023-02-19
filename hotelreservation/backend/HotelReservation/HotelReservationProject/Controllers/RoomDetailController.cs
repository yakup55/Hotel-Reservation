using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using HotelReservationProject.Filters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [ServiceFilter(typeof(NotFoundFilters<RoomDetail, RoomDetailDto>))]
    public class RoomDetailController : BaseController
    {
        private readonly IGenericService<RoomDetail,RoomDetailDto> service;

        public RoomDetailController(IGenericService<RoomDetail, RoomDetailDto> service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetRoomDetailList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByDetail(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));    
        }
        [HttpPost]
        public async Task<IActionResult> AddDetail(RoomDetailDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateDetail(RoomDetailDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.RoomDetailId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetail(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
