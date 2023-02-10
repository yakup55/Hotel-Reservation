using CoreLayer.Models;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface ICategoryRepository:IGenericRepository<Category>
    {
        Task<List<Category>> LastCategory();
    }
}
