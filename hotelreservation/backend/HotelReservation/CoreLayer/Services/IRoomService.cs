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
    public interface IRoomService:IGenericService<Room,RoomDto>
    {
        Task<ResponseDto<Room>> RoomOneDetail(int id);
        Task<ResponseDto<List<Room>>> RoomHotel(int id);
    }
}
