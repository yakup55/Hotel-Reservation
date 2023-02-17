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
    public class CityRepository : GenericRepository<City>, ICityRepository
    {
        public CityRepository(AppDbContext context) : base(context)
        {
        }

       

        public Task<List<City>> PopularCity()
        {
            return context.Cities.Where(x => x.CityId == 1||x.CityId==2 || x.CityId == 3 || x.CityId == 4 || x.CityId == 5 || x.CityId == 6 || x.CityId == 7 || x.CityId == 8).ToListAsync();
        }
    }
}
