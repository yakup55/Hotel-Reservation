﻿using CoreLayer.DTOs;
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

        public async Task<ResponseDto<Hotel>> HotelOneDetail(int id)
        {
           return  ResponseDto<Hotel>.Success(await hotelRepository.HotelOneDetail(id), 200);
        }

       

        public async Task<ResponseDto<List<Hotel>>> LastHotel()
        {
            return ResponseDto<List<Hotel>>.Success(await hotelRepository.LastHotel(), 200);
        }
    }
}
