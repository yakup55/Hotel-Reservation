using CoreLayer.Models;
using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class UserRepository : GenericRepository<AppUser>, IUserRepository
    {
        //private readonly IUserRepository userRepository;
        public UserRepository(AppDbContext context) : base(context)
        {
           
        }

        //public Task<List<AppUser>> GetByEmailAsync(string userMail)
        //{
        //    return context.Users.Include(x=>x.City).Where(x => x.Email == userMail).ToListAsync(); ;
        //}
    }
}
