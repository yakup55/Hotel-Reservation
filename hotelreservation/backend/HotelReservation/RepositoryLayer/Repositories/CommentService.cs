using CoreLayer.Models;
using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class CommentService : GenericRepository<Comment>, ICommentRepository
    {
        public CommentService(AppDbContext context) : base(context)
        {
        }

        public Task<List<Comment>> CommentHotelList(int id)
        {
            return context.Comments.Include(x=>x.Hotel).Where(x=>x.HotelId== id).ToListAsync();
        }

        public Task<List<Comment>> PopularComment(int id)
        {
            return context.Comments.Where(x=>x.CommentRating>=9 && x.HotelId== id).Take(3).ToListAsync();
        }
    }
}
