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
    public class TravelContentService : GenericService<TravelContent, TravelContentDto>, ITravelContentService
    {
        private readonly ITravelContentRepository travelContentRepository;
        public TravelContentService(IUnitOfWork unitOfWork, IGenericRepository<TravelContent> repository, ITravelContentRepository travelContentRepository) : base(unitOfWork, repository)
        {
            this.travelContentRepository = travelContentRepository;
        }

        public async Task<ResponseDto<List<TravelContent>>> TravelContentLastList()
        {
            return ResponseDto<List<TravelContent>>.Success(await travelContentRepository.TravelContentLastList(), 200);
        }

        public async Task<ResponseDto<List<TravelContent>>> TravelWritingsContentList(int id)
        {
            return ResponseDto<List<TravelContent>>.Success(await travelContentRepository.TravelWritingsContentList(id), 200);
        }

        public async Task<ResponseDto<List<TravelContent>>> TravelWritingsContentUserList(string userId,int id)
        {
            return ResponseDto<List<TravelContent>>.Success(await travelContentRepository.TravelWritingsContentUserList(userId,id), 200);
        }
    }
}
