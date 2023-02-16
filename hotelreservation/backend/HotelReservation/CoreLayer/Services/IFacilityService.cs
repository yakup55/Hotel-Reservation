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
    public interface IFacilityService:IGenericService<Facility,FaciltyDto>
    {
        Task<ResponseDto<List<Facility>>> FacilityHotel(int id);
    }
}
