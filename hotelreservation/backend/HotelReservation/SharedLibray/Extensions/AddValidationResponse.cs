using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedLibray.Extensions
{
    public static class AddValidationResponse
    {
        public static void UserCustomValidationResponse(this IServiceCollection services)
        {
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var errors = context.ModelState.Values.Where(x => x.Errors.Count > 0)
                    .SelectMany(x => x.Errors).Select(x => x.ErrorMessage);

                    ErrorDto dto = new ErrorDto(errors.ToList());
                    var response = ResponseDto<NoContentResult>.Fail(dto, 400);
                    return new BadRequestObjectResult(response);

                };
            });
        }
    }
}
