using CoreLayer.DTOs;
using FluentValidation;

namespace ServiceLayer.Validations
{
    public class CommentDtoValidation : AbstractValidator<CommentDto>
    {
        public CommentDtoValidation()
        {
            RuleFor(x => x.CommentMessage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(10).WithMessage("Minumum 10 Karakter Olmalı").MaximumLength(200).WithMessage("Maximum 200 Karekter Olmalı");
            RuleFor(x => x.CommentSubject).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{PropertyName} is required").MinimumLength(5).WithMessage("Minumum 5 Karakter Olmalı").MaximumLength(15).WithMessage("Maximum 15 Karekter Olmalı");
        }
    }
}
