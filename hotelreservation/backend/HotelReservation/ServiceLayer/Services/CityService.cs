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
    public class CityService : GenericService<City, CityDto>, ICityService
    {
        private readonly ICityRepository cityRepository;
        public CityService(IUnitOfWork unitOfWork, IGenericRepository<City> repository, ICityRepository cityRepository) : base(unitOfWork, repository)
        {
            this.cityRepository = cityRepository;
        }

        public async Task<ResponseDto<List<City>>> PopularCity()
        {
            return ResponseDto<List<City>>.Success(await cityRepository.PopularCity(), 200);
        }
    }
}
