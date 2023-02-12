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
    public class HotelRepository : GenericRepository<Hotel>, IHotelRepository
    {
        
        public HotelRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<Hotel>> LastHotel()
        {
            return await context.Hotels.Take(9).OrderByDescending(x=>x.HotelId).ToListAsync();
        }
    }
}
