using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class QuentionsController : BaseController
    {
        private readonly IGenericService<Quentions, QuentionsDto> service;

        public QuentionsController(IGenericService<Quentions, QuentionsDto> service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetQuentionsList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet]
        public async Task<IActionResult> GetQuentions(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddQuentions(QuentionsDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateQuentions(QuentionsDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.QuentionsId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuentions(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
