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
    public class TravelWitingsService : GenericService<TravelWritings, TravelWritingDto>, ITravelWritignsService
    {
        private readonly ITravelWritignsRepository travelWritignsRepository;
        public TravelWitingsService(IUnitOfWork unitOfWork, IGenericRepository<TravelWritings> repository, ITravelWritignsRepository travelWritignsRepository) : base(unitOfWork, repository)
        {
            this.travelWritignsRepository = travelWritignsRepository;
        }

        public async Task<ResponseDto<List<TravelWritings>>> TravelPopularList()
        {
            return ResponseDto<List<TravelWritings>>.Success(await travelWritignsRepository.TravelPopularList(), 200);
        }

        public async Task<ResponseDto<List<TravelWritings>>> TravelWritingsUserList(string userId)
        {
            return ResponseDto<List<TravelWritings>>.Success(await travelWritignsRepository.TravelWritingsUserList(userId),200);
        }
    }
}
