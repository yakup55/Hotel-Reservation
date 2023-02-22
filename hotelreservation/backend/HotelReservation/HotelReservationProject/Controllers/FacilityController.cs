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
    public class FacilityController : BaseController
    {
        private readonly IFacilityService service;

        public FacilityController(IFacilityService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetFacilityList()
        {
            return  ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        [ServiceFilter(typeof(NotFoundFilters<Facility, FaciltyDto>))]

        public async Task<IActionResult> GetByFacility(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        } [HttpGet("{id}")]
        public async Task<IActionResult> FacilityHotel(int id)
        {
            return ActionResultInstance(await service.FacilityHotel(id));
        }
        [HttpPost]
        [ServiceFilter(typeof(NotFoundFilters<Facility, FaciltyDto>))]

        public async Task<IActionResult> AddFacility(FaciltyDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        [ServiceFilter(typeof(NotFoundFilters<Facility, FaciltyDto>))]

        public async Task<IActionResult> UpdateFacility(FaciltyDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.FacilityId));
        }
        [HttpDelete("{id}")]
        [ServiceFilter(typeof(NotFoundFilters<Facility, FaciltyDto>))]

        public async Task<IActionResult> DeleteFacility(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
