using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class HotelDetailDtoValidation:AbstractValidator<HotelDetailDto>
    {
        public HotelDetailDtoValidation()
        {
            RuleFor(x=>x.Image1).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image2).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image3).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image4).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image5).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image6).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image7).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image8).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.Image9).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x=>x.HotelMap).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
        }
    }
}
