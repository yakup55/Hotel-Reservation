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
    public class DegreController : BaseController
    {
        private readonly IGenericService<Degre, DegreDto> service;

        public DegreController(IGenericService<Degre, DegreDto> service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetDegreList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByDegre(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddDegre(DegreDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateDegre(DegreDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.DegreId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDegre(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
