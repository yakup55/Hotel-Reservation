using CoreLayer.DTOs;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Validations
{
    public class HotelDtoValidation : AbstractValidator<HotelDto>
    {
        public HotelDtoValidation()
        {
            RuleFor(x => x.HotelName).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required").MinimumLength(10).MaximumLength(100);
            RuleFor(x => x.HotelImage).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.HotelPrice).InclusiveBetween(500,10000).WithMessage("{PropertyName} must be grater 500 10000");        

        }
    }
}
