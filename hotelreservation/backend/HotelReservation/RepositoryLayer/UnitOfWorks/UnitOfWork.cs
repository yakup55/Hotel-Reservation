using CoreLayer.UnitOfWork;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.UnitOfWorks
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly AppDbContext context;

        public UnitOfWork(AppDbContext context)
        {
            this.context = context;
        }

        public void Commint()
        {
           context.SaveChanges();
        }

        public async Task CommintAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
