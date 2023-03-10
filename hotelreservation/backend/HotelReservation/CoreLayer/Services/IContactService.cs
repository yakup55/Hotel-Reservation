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
    public interface IContactService:IGenericService<Contact,ContactDto>
    {
        Task<ResponseDto<List<Contact>>> ContactUserList(string id);
    }
}
