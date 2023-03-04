using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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

        public async Task<List<Hotel>> HotelCityList(int id)
        {
            return await context.Hotels.Include(x=>x.City).Where(x=>x.CityId==id).ToListAsync() ;
        }

        public async Task<List<Hotel>> HotelDegreList(int id)
        {
          return await context.Hotels.Include(x=>x.Degre).Where(x=>x.DegreId==id).ToListAsync() ;   
        }

        public async Task<Hotel> HotelOneDetail(int id)
        {
            return await context.Hotels.Include(x => x.HotelDetails).Include(x=>x.Category).Include(x=>x.Degre).Include(x=>x.Rooms).Where(x=>x.HotelId==id).SingleOrDefaultAsync();
        }

        public async Task<List<Hotel>> HotelPriceList(int price, int price2)
        {
            return await context.Hotels.Where(x=>x.HotelPrice<price&&price2<x.HotelPrice).ToListAsync() ;
        }

        public async Task<List<Hotel>> LastHotel()
        {
            return await context.Hotels.Where(x=>x.HotelPrice<4000).ToListAsync();
        }

        public async Task<List<Hotel>> SearchHotel(string search)
        {
           
            return await context.Hotels.Include(x=>x.Category).Where(x=>x.HotelName.Contains(search) ||x.Category.CategoryName.Contains(search)||x.City.CityName.Contains(search)).ToListAsync();
        }
    }
}
