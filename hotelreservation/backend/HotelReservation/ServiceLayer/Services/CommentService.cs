using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class CommentService:GenericService<Comment,CommentDto> ,ICommentService
    {
        private readonly ICommentRepository commentRepository;

        public CommentService(IUnitOfWork unitOfWork, IGenericRepository<Comment> repository, ICommentRepository commentRepository) : base(unitOfWork, repository)
        {
            this.commentRepository = commentRepository;
        }

        public async Task<ResponseDto<List<Comment>>> CommentHotelList(int id)
        {
            return ResponseDto<List<Comment>>.Success(await commentRepository.CommentHotelList(id), 200);
        }

        public async Task<ResponseDto<List<Comment>>> CommentUserList(string id)
        {
            return ResponseDto<List<Comment>>.Success(await commentRepository.CommentUserList(id), 200);
        }

        public async Task<ResponseDto<List<Comment>>> PopularComment(int id)
        {
           return ResponseDto<List<Comment>>.Success(await commentRepository.PopularComment(id), 200);
        }
    }
}
