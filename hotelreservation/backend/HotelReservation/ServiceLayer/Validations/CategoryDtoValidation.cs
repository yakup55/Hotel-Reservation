using CoreLayer.DTOs;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Validations
{
    public class CategoryDtoValidation : AbstractValidator<CategoryDto>
    {
        public CategoryDtoValidation()
        {
            RuleFor(x => x.CategoryName).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{propertyName} is required").MinimumLength(10).MaximumLength(50);
            RuleFor(x => x.CategoryImage).NotEmpty().WithMessage("{PropertyName} is required").NotNull().WithMessage("{propertyName} is required");
        }
    }
}
