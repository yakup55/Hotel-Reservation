using CoreLayer.DTOs;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IGenericService<TEntity,TDto> where TEntity : class where TDto: class
    {
        Task<ResponseDto<TDto>> GetByIdAsync(int id);
        Task<ResponseDto<IEnumerable<TDto>>> GetAllAsync();
        Task<ResponseDto<TDto>> AddAsync(TDto entity);
        Task<ResponseDto<NoDataDto>> UpdateAsync(TDto entity,int id);
        Task<ResponseDto<NoDataDto>> DeleteAsync(int id);
        Task<ResponseDto<IEnumerable<TDto>>> Where(Expression<Func<TEntity, bool>> predicate);
    }
}
