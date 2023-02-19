using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class RoomDetailValidation : AbstractValidator<RoomDetailDto>
    {
        public RoomDetailValidation()
        {
            RuleFor(x => x.Image1).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.Image2).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.Image3).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.NumberPeople).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.NumberDate).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
        }
    }
}
