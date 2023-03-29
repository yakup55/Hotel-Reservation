using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface ITravelWritignsRepository:IGenericRepository<TravelWritings>
    {
        Task<List<TravelWritings>> TravelWritingsUserList(string userId);
        Task<List<TravelWritings>> TravelPopularList();
        Task<List<TravelWritings>> TravelPopularList(int id, int id2, int id3, int id4, int id5);
    }
}
