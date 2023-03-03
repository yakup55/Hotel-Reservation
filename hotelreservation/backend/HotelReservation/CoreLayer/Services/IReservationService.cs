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
    public interface IReservationService:IGenericService<Reservation,ReservartionDto>
    {
        Task<ResponseDto<List<Reservation>>> UserReservationList(string id);
    }
}
