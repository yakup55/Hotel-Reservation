using CoreLayer.Repositories;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        protected readonly AppDbContext context;
        private DbSet<TEntity> dbSet;

        public GenericRepository(AppDbContext context)
        {
            this.context = context;
           dbSet = context.Set<TEntity>();
        }

        public async Task AddAsync(TEntity entity)
        {
           await dbSet.AddAsync(entity);
        }

        public void DeleteAsync(TEntity entity)
        {
            dbSet.Remove(entity);
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await dbSet.ToListAsync();
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
           var entity=await dbSet.FindAsync(id);
            if (entity!=null)
            {
                context.Entry(entity).State = EntityState.Detached;
            }
            return entity;
        }

        public TEntity UpdateAsync(TEntity entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            return entity;
        }

        public IQueryable<TEntity> Where(Expression<Func<TEntity, bool>> predicate)
        {
          return dbSet.Where(predicate);
        }
    }
}
