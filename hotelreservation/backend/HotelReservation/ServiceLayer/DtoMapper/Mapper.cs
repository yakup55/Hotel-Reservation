using AutoMapper;
using CoreLayer.DTOs;
using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.DtoMapper
{
    public class Mapper:Profile
    {
        public Mapper()
        {
            CreateMap<HotelDto, Hotel>();
            CreateMap<CategoryDto,Category>();
            CreateMap<ReservartionDto,Reservation>();
        }
    }
}
