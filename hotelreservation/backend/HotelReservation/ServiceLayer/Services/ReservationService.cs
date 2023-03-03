using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class ReservationService : GenericService<Reservation, ReservartionDto>, IReservationService
    {
        private readonly IReservationRepository reservationRepository;
        public ReservationService(IUnitOfWork unitOfWork, IGenericRepository<Reservation> repository, IReservationRepository reservationRepository) : base(unitOfWork, repository)
        {
            this.reservationRepository = reservationRepository;
        }

        public async Task<ResponseDto<List<Reservation>>> UserReservationList(string id)
        {
            return ResponseDto<List<Reservation>>.Success(await reservationRepository.UserReservationList(id),200);
        }
    }
}
