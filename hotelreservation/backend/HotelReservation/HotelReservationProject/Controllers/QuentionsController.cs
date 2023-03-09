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
    public class QuentionsController : BaseController
    {
        private readonly IQuentionService service;

        public QuentionsController(IQuentionService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetQuentionsList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByQuentions(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> HotelQuentions(int id)
        {
            return ActionResultInstance(await service.HotelQuentions(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddQuentions(QuentionsDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateQuentions(QuentionsDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.QuentionsId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuentions(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
