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
    public class RoomService : GenericService<Room, RoomDto>, IRoomService
    {
        private readonly IRoomRepository roomRepository;



        public RoomService(IUnitOfWork unitOfWork, IGenericRepository<Room> repository, IRoomRepository roomRepository) : base(unitOfWork, repository)
        {
            this.roomRepository = roomRepository;
        }

        public async Task<ResponseDto<Room>> RoomOneDetail(int id)
        {
            return ResponseDto<Room>.Success(await roomRepository.RoomOneDetail(id), 200);

        }
    }
}
