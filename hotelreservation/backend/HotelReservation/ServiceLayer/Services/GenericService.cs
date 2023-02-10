using AutoMapper;
using CoreLayer.DTOs;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.Repositories;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class GenericService<TEntity, TDto> : IGenericService<TEntity, TDto> where TEntity : class where TDto : class
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IGenericRepository<TEntity> repository;
        private readonly IMapper mapper;

        public GenericService(IUnitOfWork unitOfWork, IGenericRepository<TEntity> repository, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<ResponseDto<TDto>> AddAsync(TDto entity)
        {
            var newEntity = mapper.Map<TEntity>(entity);
            await repository.AddAsync(newEntity);
            await unitOfWork.CommintAsync();
            var newDto = mapper.Map<TDto>(entity);
            return ResponseDto<TDto>.Success(newDto, 200);
        }

        public async Task<ResponseDto<NoDataDto>> DeleteAsync(int id)
        {
            var isExistEntity=await repository.GetByIdAsync(id);
            if (isExistEntity != null)
            {
                return ResponseDto<NoDataDto>.Fail("id not found",404);
            }
            repository.DeleteAsync(isExistEntity); 
            await unitOfWork.CommintAsync();
            return ResponseDto<NoDataDto>.Success(204);
        }

        public async Task<ResponseDto<IEnumerable<TDto>>> GetAllAsync()
        {
          var hotels=mapper.Map<List<TDto>>(await repository.GetAllAsync());
            return ResponseDto<IEnumerable<TDto>>.Success(hotels,200);
        }

        public async Task<ResponseDto<TDto>> GetByIdAsync(int id)
        {
           var one=await repository.GetByIdAsync(id);
            if (one is null)
            {
                return ResponseDto<TDto>.Fail("id not found", 404);
            }
            return ResponseDto<TDto>.Success(mapper.Map<TDto>(one),200);
        }

        public async Task<ResponseDto<NoDataDto>> UpdateAsync(TDto entity,int id)
        {
            var one=await repository.GetByIdAsync(id);
            if (one is null)
            {
                return ResponseDto<NoDataDto>.Fail("id not found", 404);
            }
            var updateEntity = mapper.Map<TEntity>(one);
            repository.UpdateAsync(updateEntity);
            await unitOfWork.CommintAsync();
            return ResponseDto<NoDataDto>.Success(204);
        }

        public async Task<ResponseDto<IEnumerable<TDto>>> Where(Expression<Func<TEntity, bool>> predicate)
        {
         var list=repository.Where(predicate);
            return ResponseDto<IEnumerable<TDto>>.Success(mapper.Map<IEnumerable<TDto>>(await list.ToListAsync()),200);
        }
    }
}
