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
    public class CategoryController : BaseController
    {
        private readonly ICategoryService service;

        public CategoryController(ICategoryService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategoryList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByCategory(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet]
        public async Task<IActionResult> LastCategory()
        {
            return ActionResultInstance(await service.LastCategory());
        }
        [HttpPost]
        public async Task<IActionResult> AddCategory(CategoryDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateCategory(CategoryDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.CategoryId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }

    }
}
