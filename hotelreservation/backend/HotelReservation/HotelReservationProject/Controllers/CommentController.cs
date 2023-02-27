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
    public class CommentController : BaseController
    {
        private readonly ICommentService service;

        public CommentController(ICommentService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetCommentList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByComment(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> CommentHotelList(int id)
        {
            return ActionResultInstance(await service.CommentHotelList(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> CommentUserList(string id)
        {
            return ActionResultInstance(await service.CommentUserList(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> PopularCommentHotel(int id)
        {
            return ActionResultInstance(await service.PopularComment(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> CommentActive(int id)
        {

            var one = await service.GetByIdAsync(id);
            one.Data.CommentStatus = true;
            return ActionResultInstance(await service.UpdateAsync(one.Data, one.Data.CommentId));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> CommentPassive(int id)
        {

            var one = await service.GetByIdAsync(id);
            one.Data.CommentStatus = false;
            return ActionResultInstance(await service.UpdateAsync(one.Data, one.Data.CommentId));  
                
                }
        [HttpPost]
        public async Task<IActionResult> AddComment(CommentDto dto)
        {
            dto.CommentDate = DateTime.Now;
            dto.CommentStatus = false;
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateComment(CommentDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto, dto.CommentId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
