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
    public interface ITravelWritignsService:IGenericService<TravelWritings,TravelWritingDto>
    {
        Task<ResponseDto<List<TravelWritings>>> TravelWritingsUserList(string userId);
        Task<ResponseDto<List<TravelWritings>>> TravelPopularList();
        Task<ResponseDto<List<TravelWritings>>> TravelPopularList(int id, int id2, int id3, int id4, int id5);
    }
}
