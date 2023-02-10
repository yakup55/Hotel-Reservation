using Microsoft.AspNetCore.Diagnostics;
using SharedLibray.DTOs;
using SharedLibray.Exceptions;
using System.Text.Json;

namespace HotelReservationProject.Middlewares
{
    public static class UseCustomExceptionHandler
    {
        public static void UseCustomException(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(config =>
            {
                config.Run(async context =>
                {
                    context.Response.StatusCode = 500;
                    context.Response.ContentType= "application/json";
                    var exceptionFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (exceptionFeature!=null)
                    {
                        var ex = exceptionFeature.Error;
                        ErrorDto dto = null;
                        if (ex is CustomExceptions)
                        {
                            dto = new ErrorDto(ex.Message);
                        }
                        else
                        {
                            dto = new ErrorDto(ex.Message);
                        }
                        var response = ResponseDto<NoDataDto>.Fail(dto,200);
                        await context.Response.WriteAsync(JsonSerializer.Serialize(response));

                    }
                });
            });
        }
    }
}
