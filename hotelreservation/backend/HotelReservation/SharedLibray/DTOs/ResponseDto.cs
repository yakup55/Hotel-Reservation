using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedLibray.DTOs
{
    public class ResponseDto<T> where T : class
    {
        public T Data { get; private set; }
        public int StatusCode { get; private set; }
        public ErrorDto ErrorDto { get;private set; }


        public static ResponseDto<T> Success(T data, int statusCode)
        {
            return new ResponseDto<T> { Data = data, StatusCode = statusCode };
        }
        public static ResponseDto<T>Success(int statusCode)
        {
            return new ResponseDto<T> {Data=default, StatusCode = statusCode };
        }
        public static ResponseDto<T> Fail(ErrorDto error, int statusCode)
        {
            return new ResponseDto<T> { ErrorDto = error, StatusCode = statusCode };
        }
        public static ResponseDto<T>Fail(string message, int statusCode)
        {
            var dto = new ErrorDto(message);
            return new ResponseDto<T> { ErrorDto = dto, StatusCode = statusCode };
        }
    }
}
