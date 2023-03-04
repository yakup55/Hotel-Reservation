using CoreLayer.DTOs;
using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface IHotelRepository:IGenericRepository<Hotel>
    {
        Task<List<Hotel>> LastHotel();

        Task<List<Hotel>> HotelCategoryList(int id);   
        Task<Hotel> HotelOneDetail(int id);
        Task<List<Hotel>> HotelCityList(int id);
        Task<List<Hotel>> HotelDegreList(int id);
        Task<List<Hotel>> HotelPriceList(int price,int price2);
        Task<List<Hotel>> SearchHotel(SearchDto search);
    }
}
