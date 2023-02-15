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
    public class QuentionService : GenericService<Quentions, QuentionsDto>, IQuentionService
    {
        private readonly IQuentionRepository quentionRepository;
        public QuentionService(IUnitOfWork unitOfWork, IGenericRepository<Quentions> repository, IQuentionRepository quentionRepository) : base(unitOfWork, repository)
        {
            this.quentionRepository = quentionRepository;
        }

        public async Task<ResponseDto<List<Quentions>>> HotelQuentions(int id)
        {
            return ResponseDto<List<Quentions>>.Success(await quentionRepository.HotelQuentions(id),200);
        }
    }
}
