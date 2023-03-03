using CoreLayer.Models;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface IReservationRepository:IGenericRepository<Reservation>
    {
        Task<List<Reservation>> UserReservationList(string id); 
    }
}
