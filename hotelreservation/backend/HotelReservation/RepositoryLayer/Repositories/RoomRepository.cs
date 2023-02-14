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
    public class RoomRepository : GenericRepository<Room>, IRoomRepository
    {
        public RoomRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<Room>> RoomHotel(int id)
        {
            return await context.Rooms.Include(x => x.Hotel).Where(x => x.HotelId == id).ToListAsync();
        }

        public async Task<Room> RoomOneDetail(int id)
        {
           return await context.Rooms.Include(x=>x.RoomDetails).Include(x=>x.Hotel).Where(x=>x.RoomId==id).SingleOrDefaultAsync();
        }
    }
}
