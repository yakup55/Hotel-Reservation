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

        public async Task<Room> RoomOneDetail(int id)
        {
           return await context.Rooms.Include(X=>X.RoomDetails).Include(X=>X.Hotel).Where(x=>x.HotelId== id).SingleOrDefaultAsync();
        }
    }
}
