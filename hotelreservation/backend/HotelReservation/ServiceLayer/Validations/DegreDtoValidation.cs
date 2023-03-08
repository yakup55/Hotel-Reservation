using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class DegreDtoValidation:AbstractValidator<DegreDto>
    {
        public DegreDtoValidation()
        {
            RuleFor(x => x.DegreName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(4).WithMessage("Minum 4 Karakter Olmalı").MaximumLength(20).WithMessage("Maximum 20 Karakter Olmalı");
            RuleFor(x => x.DegreValue).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
        }
    }
}
