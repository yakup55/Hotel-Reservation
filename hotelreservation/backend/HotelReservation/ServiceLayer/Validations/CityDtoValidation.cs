using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class CityDtoValidation : AbstractValidator<CityDto>
    {
        public CityDtoValidation()
        {
            RuleFor(x => x.CityImage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x => x.CityName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
        }
    }
}
