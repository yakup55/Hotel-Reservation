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
    public class FacilityRepository : GenericRepository<Facility>,IFacilityRepository
    {
        public FacilityRepository(AppDbContext context) : base(context)
        {
        }

        public Task<List<Facility>> FacilityHotel(int id)
        {
           return context.Facilities.Include(x=> x.Hotel).Include(x=>x.Degre).Where(x=>x.HotelId==id).ToListAsync();
        }
    }
}
