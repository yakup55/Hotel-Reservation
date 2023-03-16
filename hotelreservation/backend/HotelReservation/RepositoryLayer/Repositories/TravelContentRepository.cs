using CoreLayer.Models;
using CoreLayer.Repositories;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class TravelContentRepository : GenericRepository<TravelContent>, ITravelContentRepository
    {
        public TravelContentRepository(AppDbContext context) : base(context)
        {
        }
    }
}
