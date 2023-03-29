using CoreLayer.Models;
using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class TravelWritingsRepository : GenericRepository<TravelWritings>,ITravelWritignsRepository
    {
        public TravelWritingsRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<TravelWritings>> TravelPopularList()
        {
          return await context.TravelWritings.Where(x=>x.TravelWritingId==4||x.TravelWritingId==1||x.TravelWritingId==6||x.TravelWritingId==5||x.TravelWritingId==32||x.TravelWritingId==14).ToListAsync();
        }

        public async Task<List<TravelWritings>> TravelPopularList(int id, int id2, int id3, int id4, int id5)
        {
            return await context.TravelWritings.Where(x => x.TravelWritingId == id || x.TravelWritingId == id2 || x.TravelWritingId == id3 || x.TravelWritingId == id4 || x.TravelWritingId == id5).ToListAsync();
        }

        public async Task<List<TravelWritings>> TravelWritingsUserList(string userId)
        {
            return await context.TravelWritings.Where(x => x.UserId == userId).ToListAsync();
        }
    }
}
