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
    [ServiceFilter(typeof(NotFoundFilters<About,AboutDto>))]
    public class AboutController : BaseController
    {
        private readonly IGenericService<About, AboutDto> service;

        public AboutController(IGenericService<About, AboutDto> service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetAboutList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByAbout(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddAbout(AboutDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult>UpdateAbout(AboutDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.AboutId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbout(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id)); 
        }
    }
}
