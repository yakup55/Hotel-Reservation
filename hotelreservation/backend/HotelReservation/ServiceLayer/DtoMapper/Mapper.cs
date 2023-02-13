﻿using AutoMapper;
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
            CreateMap<HotelDto, Hotel>().ReverseMap();
            CreateMap<CategoryDto,Category>().ReverseMap();
            CreateMap<ReservartionDto, Reservation>().ReverseMap();
            CreateMap<HotelDetailDto, HotelDetail>().ReverseMap();
            CreateMap<RoomDto, Room>().ReverseMap();
            CreateMap<RoomDetailDto, RoomDetail>().ReverseMap();
            CreateMap<AboutDto, About>().ReverseMap();
            CreateMap<DegreDto, Degre>().ReverseMap();  
            CreateMap<CommentDto, Comment>().ReverseMap();
        }
    }
}
