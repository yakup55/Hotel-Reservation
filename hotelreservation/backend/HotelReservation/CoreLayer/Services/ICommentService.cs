using CoreLayer.DTOs;
using CoreLayer.Models;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface ICommentService:IGenericService<Comment,CommentDto>
    {
        Task<ResponseDto<List<Comment>>> CommentHotelList(int id);
        Task<ResponseDto<List<Comment>>> PopularComment(int id);
    }
}
