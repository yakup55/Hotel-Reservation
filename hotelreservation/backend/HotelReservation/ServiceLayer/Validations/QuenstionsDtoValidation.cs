using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class QuenstionsDtoValidation : AbstractValidator<QuentionsDto>
    {
        public QuenstionsDtoValidation()
        {
            RuleFor(x => x.QuentionsName).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required").MinimumLength(10).WithMessage("Min 10 Karakter Olmalı").MaximumLength(50).WithMessage("Max 50 Karakter Olmalı");
            RuleFor(x => x.QuentionsMessage).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required").MinimumLength(10).WithMessage("Min 10 Karakter Olmalı").MaximumLength(200).WithMessage("Max 200 Karakter Olmalı");
        }
    }
}
