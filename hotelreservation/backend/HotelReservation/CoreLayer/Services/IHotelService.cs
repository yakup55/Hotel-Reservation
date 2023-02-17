using CoreLayer.DTOs;
using CoreLayer.Models;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IHotelService:IGenericService<Hotel,HotelDto>
    {
        Task<ResponseDto<List<Hotel>>> LastHotel();
        Task<ResponseDto<List<Hotel>>> HotelCategoryList(int id);
        Task<ResponseDto<List<Hotel>>> HotelCityList(int id);
        Task<ResponseDto<List<Hotel>>> HotelDegreList(int id);
        Task<ResponseDto<List<Hotel>>> HotelPriceList(int price, int price2);
        Task<ResponseDto<Hotel>> HotelOneDetail(int id);
        
    }
}
