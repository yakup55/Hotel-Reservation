using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Repositories;
using CoreLayer.Services;
using CoreLayer.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class TravelWitingsService : GenericService<TravelWritings, TravelWritingDto>, ITravelWritignsService
    {
        public TravelWitingsService(IUnitOfWork unitOfWork, IGenericRepository<TravelWritings> repository) : base(unitOfWork, repository)
        {
        }
    }
}
