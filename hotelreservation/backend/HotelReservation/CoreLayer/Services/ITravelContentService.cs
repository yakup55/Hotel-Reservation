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
    public interface ITravelContentService : IGenericService<TravelContent, TravelContentDto>
    {
        Task<ResponseDto<List<TravelContent>>> TravelWritingsContentList(int id);
    }
}
