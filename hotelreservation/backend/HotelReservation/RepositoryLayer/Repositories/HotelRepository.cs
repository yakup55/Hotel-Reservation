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

        public async Task<List<Hotel>> HotelCategoryList(int id)
        {
            return await context.Hotels.Where(x => x.CategoryId == id).OrderByDescending(x=>x.HotelId).ToListAsync() ;
        }
         
        public async Task<Hotel> HotelOneDetail(int id)
        {
            return await context.Hotels.Include(x => x.HotelDetails).Include(x=>x.Category).Include(x=>x.Degre).Include(x=>x.Rooms).Where(x=>x.HotelId==id).SingleOrDefaultAsync();
        }

        

        public async Task<List<Hotel>> LastHotel()
        {
            return await context.Hotels.Take(9).OrderByDescending(x=>x.HotelId).ToListAsync();
        }
    }
}
