using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class AboutDtoValidation : AbstractValidator<AboutDto>
    {
        public AboutDtoValidation()
        {
            RuleFor(x => x.AboutName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x => x.AboutImage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x => x.AboutDescription).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MaximumLength(500);
        }
    }
}
