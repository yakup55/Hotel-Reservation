using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommentController : BaseController
    {
        private readonly IGenericService<Comment,CommentDto> service;

        public CommentController(IGenericService<Comment, CommentDto> service)
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
        [HttpPost]
        public async Task<IActionResult> AddCommnet(CommentDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateComment(CommentDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.CommentId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
