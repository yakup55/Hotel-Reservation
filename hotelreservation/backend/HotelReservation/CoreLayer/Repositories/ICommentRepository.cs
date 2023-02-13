using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface ICommentRepository:IGenericRepository<Comment>
    {
        Task<List<Comment>> CommentHotelList(int id);
        Task<List<Comment>> PopularComment(int id);
    }
}
