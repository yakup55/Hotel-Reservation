using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class FacilityDtoValidation:AbstractValidator<FaciltyDto>
    {
        public FacilityDtoValidation()
        {
            RuleFor(x => x.FacilityName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(5).WithMessage("Minumun 5 Karakter Olmalı").MaximumLength(15).WithMessage("Maximum 15 Karakter Olmalı");    
        }
    }
}
