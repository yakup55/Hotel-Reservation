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
    public class ReservationRepository : GenericRepository<Reservation>, IReservationRepository
    {

        public ReservationRepository(AppDbContext context) : base(context)
        {

        }

        public Task<List<Reservation>> UserReservationList(string id)
        {
          return context.Reservations.Include(x=>x.RoomDetail).Include(x=>x.RoomDetail.Room).Include(x => x.RoomDetail.Room.Hotel).Where(x=>x.UserId == id).ToListAsync();
        }
    }
}
