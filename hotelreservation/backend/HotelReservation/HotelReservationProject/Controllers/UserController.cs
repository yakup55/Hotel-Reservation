﻿using CoreLayer.DTOs;
using CoreLayer.Models;
using CoreLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelReservationProject.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUserService service;

        public UserController(IUserService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet("{email}")]
        public async Task<IActionResult> GetByUserEmail(string email)
        { 
            return ActionResultInstance(await service.GetByEmailAsync(email)); 
        }
       
        [HttpPost]
        public async Task<IActionResult> CreateUser(UserCreateDto user)
        {
            return ActionResultInstance(await service.CreateUserAsync(user));
        }
        [HttpPost]
        public async Task<IActionResult> ResetPasswordEmailSend(EmailDto email)
        {
            return ActionResultInstance(await service.ResetPasswordEmailSend(email));
        }
        [HttpPost]
        public async Task<IActionResult> ResetPassword(PasswordResetDto resetDto)
        {
            return ActionResultInstance(await service.ResetPassword(resetDto));
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult>UserUpdate(AppUserDto user,string id)
        //{
        //    return ActionResultInstance(await service.UpdateUser(user,id));
        //}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            return ActionResultInstance(await service.DeleteUser(id));
        }
      
    }
}
