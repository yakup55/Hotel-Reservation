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
    [ServiceFilter(typeof(NotFoundFilters<Hotel, HotelDto>))]
    public class HotelController : BaseController
    {
        private readonly IHotelService service;

        public HotelController(IHotelService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetHotelList()
        {
            return ActionResultInstance(await service.GetAllAsync());
        }
        [HttpGet]
        public async Task<IActionResult> LastHotel()
        {
            return ActionResultInstance(await service.LastHotel());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByHotel(int id)
        {
            return ActionResultInstance(await service.GetByIdAsync(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> HotelCategoryList(int id)
        {
            return ActionResultInstance(await service.HotelCategoryList(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> HotelCityList(int id)
        {
            return ActionResultInstance(await service.HotelCityList(id));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> HotelDegreList(int id)
        {
            return ActionResultInstance(await service.HotelDegreList(id));
        }
        [HttpGet]
        public async Task<IActionResult> HotelPriceList(int price,int price2)
        {
            return ActionResultInstance(await service.HotelPriceList(price,price2));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> HotelOneDetail(int id)
        {
            return ActionResultInstance(await service.HotelOneDetail(id));
        }
        [HttpPost]
        public async Task<IActionResult> AddHotel(HotelDto dto)
        {
            return ActionResultInstance(await service.AddAsync(dto));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(HotelDto dto,int id)
        {
            return ActionResultInstance(await service.UpdateAsync(dto,id));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            return ActionResultInstance(await service.DeleteAsync(id));
        }
    }
}
