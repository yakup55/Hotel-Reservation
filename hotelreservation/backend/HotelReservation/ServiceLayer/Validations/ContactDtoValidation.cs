using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class ContactDtoValidation : AbstractValidator<ContactDto>
    {
        public ContactDtoValidation()
        {
            RuleFor(x => x.ContactMessage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(10).WithMessage("Minumum 10 Karakter Olmalı").MaximumLength(50).WithMessage("Maximum 50 Karakter Olmalı");
            RuleFor(x => x.ContactSubject).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(5).WithMessage("Minumum 5 Karakter Olmalı").MaximumLength(10).WithMessage("Maximum 10 Karakter Olmalı");
            RuleFor(x => x.ContactEmail).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").EmailAddress();
        }
    }
}
