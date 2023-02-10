using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class CategoryService : GenericService<Category, CategoryDto>, ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;
        public CategoryService(IUnitOfWork unitOfWork, IGenericRepository<Category> repository, ICategoryRepository categoryRepository) : base(unitOfWork, repository)
        {
            this.categoryRepository = categoryRepository;
        }

        public async Task<ResponseDto<List<Category>>> LastCategory()
        {
            return ResponseDto<List<Category>>.Success(await categoryRepository.LastCategory(), 200);
        }
    }
}
