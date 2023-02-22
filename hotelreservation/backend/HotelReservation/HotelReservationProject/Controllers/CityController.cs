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
    public class CityController : BaseController
    {
        private readonly ICityService service;

        public CityController(ICityService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetCityList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByCity(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet]
        public async Task<IActionResult> PopularCity()
        {
            return ActionResultInstance(await service.PopularCity());
        }
        [HttpPost]
        public async Task<IActionResult> AddCity(CityDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateCity(CityDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.CityId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }

    }
}
