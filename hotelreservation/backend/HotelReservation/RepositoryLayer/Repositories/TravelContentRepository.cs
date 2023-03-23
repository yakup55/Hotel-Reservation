using CoreLayer.Models;
using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class TravelContentRepository : GenericRepository<TravelContent>, ITravelContentRepository
    {
        public TravelContentRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<TravelContent>> TravelContentLastList()
        {
            return await context.TravelContents.OrderByDescending(x=>x.TravelContentId).Take(10).ToListAsync();
        }

        public async Task<List<TravelContent>> TravelWritingsContentList(int id)
        {
            return await context.TravelContents.Where(x => x.TravelWritingId == id).ToListAsync();
        }

        public async Task<List<TravelContent>> TravelWritingsContentUserList(string userId, int id)
        {
            return await context.TravelContents.Include(x=>x.TravelWritings).Where(x=>x.TravelWritings.UserId == userId&&x.TravelWritingId==id).ToListAsync();
        }
    }
}
