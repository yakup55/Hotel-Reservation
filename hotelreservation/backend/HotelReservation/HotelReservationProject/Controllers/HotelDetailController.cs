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
    [ServiceFilter(typeof(NotFoundFilters<HotelDetail, HotelDetailDto>))]
    public class HotelDetailController : BaseController
    {
        private readonly IGenericService<HotelDetail, HotelDetailDto> service;

        public HotelDetailController(IGenericService<HotelDetail, HotelDetailDto> service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetDetailList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByDetail(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddHotelDetail(HotelDetailDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateDetail(HotelDetailDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.HotelDetailId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotelDetail(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }

    }
}
