using CoreLayer.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SharedLibray.DTOs;

namespace HotelReservationProject.Filters
{
    public class NotFoundFilters<TEntity,TDto> : IAsyncActionFilter where TEntity : class where TDto :class
    {
        private readonly IGenericService<TEntity,TDto> genericService;

        public NotFoundFilters(IGenericService<TEntity, TDto> genericService)
        {
            this.genericService = genericService;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var idValues = context.ActionArguments.Values.FirstOrDefault();
      
            if (idValues == null)
            {
                await next.Invoke();
                return;
            }
            var id = (int)idValues;
            context.Result = new NotFoundObjectResult(ResponseDto<NoDataDto>.Fail($"{id} not found",404));
        }
    }
}
