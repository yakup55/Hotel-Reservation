using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class RoomDtoValidation:AbstractValidator<RoomDto>
    {
        public RoomDtoValidation()
        {
            RuleFor(x => x.RoomName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(10).WithMessage("Min 10 Karakter Olmalı").MaximumLength(100).WithMessage("Max 100 Karakter Olmalı");
            RuleFor(x => x.RoomImage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
            RuleFor(x => x.RoomPrice).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required");
        }
    }
}
