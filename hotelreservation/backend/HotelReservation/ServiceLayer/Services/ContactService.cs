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
    public class ContactService : GenericService<Contact, ContactDto>, IContactService
    {
        private readonly IContactRepository contactRepository;
        public ContactService(IUnitOfWork unitOfWork, IGenericRepository<Contact> repository, IContactRepository contactRepository) : base(unitOfWork, repository)
        {
            this.contactRepository = contactRepository;
        }

        public async Task<ResponseDto<List<Contact>>> ContactUserList(string id)
        {
            return ResponseDto<List<Contact>>.Success(await contactRepository.ContactUserList(id), 200);
        }
    }
}
