﻿using CoreLayer.Models;
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
    public class TravelWritingsRepository : GenericRepository<TravelWritings>,ITravelWritignsRepository
    {
        public TravelWritingsRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<TravelWritings>> TravelWritingsUserList(string userId)
        {
            return await context.TravelWritings.Where(x => x.UserId == userId).ToListAsync();
        }
    }
}