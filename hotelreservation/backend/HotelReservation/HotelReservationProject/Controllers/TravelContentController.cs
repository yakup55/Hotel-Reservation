using CoreLayer.DTOs;
using CoreLayer.Services;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TravelContentController : BaseController
    {
        private readonly ITravelContentService service;

        public TravelContentController(ITravelContentService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetTravelContentList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByTravelContent(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> TravelWritingsContent(int id)
        {
            return ActionResultInstance(await service.TravelWritingsContentList(id));
        }
        [HttpGet("{userId}/{id}")]
        public async Task<IActionResult> TravelWritingsUserContentList(string userId, int id)
        {
            return ActionResultInstance(await service.TravelWritingsContentUserList(userId, id));
        }
        [HttpGet]
        public async Task<IActionResult> TravelContentLastList()
        {
            return ActionResultInstance(await service.TravelContentLastList());
        }
        [HttpPost]
        public async Task<IActionResult> AddTravelContent(TravelContentDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateTravelContent(TravelContentDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.TravelContentId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTravelContent(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
