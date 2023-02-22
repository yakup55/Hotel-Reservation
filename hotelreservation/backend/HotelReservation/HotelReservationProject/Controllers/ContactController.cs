using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using HotelReservationProject.Filters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : BaseController
    {
        private readonly IGenericService<Contact, ContactDto> service;

        public ContactController(IGenericService<Contact, ContactDto> service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetContactList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByContact(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddContact(ContactDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut]
        public async Task<IActionResult> UpdateContact(ContactDto dto)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,dto.ContactId));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
