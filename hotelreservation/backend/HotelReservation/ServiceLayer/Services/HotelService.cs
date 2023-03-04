using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class HotelService : GenericService<Hotel, HotelDto>, IHotelService
    {
        private readonly IHotelRepository hotelRepository;
        public HotelService(IUnitOfWork unitOfWork, IGenericRepository<Hotel> repository, IHotelRepository hotelRepository) : base(unitOfWork, repository)
        {
            this.hotelRepository = hotelRepository;
        }

        public async Task<ResponseDto<List<Hotel>>> HotelCategoryList(int id)
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.HotelCategoryList(id), 200);
        }

        public async Task<ResponseDto<List<Hotel>>> HotelCityList(int id)
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.HotelCityList(id), 200);
        }

        public async Task<ResponseDto<List<Hotel>>> HotelDegreList(int id)
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.HotelDegreList(id),200);
        }

        public async Task<ResponseDto<Hotel>> HotelOneDetail(int id)
        {
           return  ResponseDto<Hotel>.Success(await hotelRepository.HotelOneDetail(id), 200);
        }

        public async Task<ResponseDto<List<Hotel>>> HotelPriceList(int price,int price2)
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.HotelPriceList(price,price2),200);
        }

        public async Task<ResponseDto<List<Hotel>>> LastHotel()
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.LastHotel(), 200);
        }

        public async Task<ResponseDto<List<Hotel>>> SearchHotel(SearchDto search)
        {
            if (string.IsNullOrEmpty(search.Name))
            {
                return ResponseDto<List<Hotel>>.Fail("Aradığınız Şey Bulunamadı", 404);
            }
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.SearchHotel(search), 200);
        }
    }
}
