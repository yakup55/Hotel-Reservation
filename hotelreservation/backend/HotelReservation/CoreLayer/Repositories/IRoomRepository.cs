using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface IRoomRepository : IGenericRepository<Room>
    {
        Task<Room> RoomOneDetail(int id);
        Task<List<Room>> RoomHotel(int id);
    }
}
