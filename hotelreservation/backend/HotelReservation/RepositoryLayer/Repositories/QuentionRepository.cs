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
    public class QuentionRepository : GenericRepository<Quentions>, IQuentionRepository
    {
        public QuentionRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<Quentions>> HotelQuentions(int id)
        {
            return context.Quentions.Include(x=>x.Hotel).Where(x=>x.HotelId== id).ToListAsync();
        }
    }
}
