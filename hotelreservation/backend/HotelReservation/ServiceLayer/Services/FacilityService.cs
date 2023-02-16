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
    public class FacilityService : GenericService<Facility, FaciltyDto>, IFacilityService
    {
        private readonly IFacilityRepository facilityRepository;
        public FacilityService(IUnitOfWork unitOfWork, IGenericRepository<Facility> repository, IFacilityRepository facilityRepository) : base(unitOfWork, repository)
        {
            this.facilityRepository = facilityRepository;
        }

        public async Task<ResponseDto<List<Facility>>> FacilityHotel(int id)
        {
            return ResponseDto<List<Facility>>.Success(await facilityRepository.FacilityHotel(id), 200);
        }
    }
}
