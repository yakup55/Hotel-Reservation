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
    public class CommentRepository : GenericRepository<Comment>, ICommentRepository
    {
        public CommentRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<Comment>> CommentHotelList(int id)
        {
            return context.Comments.Include(x=>x.Hotel).Include(x=>x.Degre).Where(x=>x.HotelId== id && x.CommentStatus == true).ToListAsync();
        }

        public Task<List<Comment>> CommentUserList(string id)
        {
         return context.Comments.Include(x=>x.Hotel).Include(x=>x.Degre).Where(x=>x.UserId==id).ToListAsync();
        }

        public Task<List<Comment>> PopularComment(int id)
        {
            return context.Comments.Include(x=>x.Degre).Where(x=>x.Degre.DegreValue>=9 && x.HotelId== id &&x.CommentStatus==true).Take(3).ToListAsync();
        }
    }
}
