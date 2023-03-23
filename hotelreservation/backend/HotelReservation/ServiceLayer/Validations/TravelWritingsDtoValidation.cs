using CoreLayer.DTOs;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Validations
{
    public class TravelWritingsDtoValidation : AbstractValidator<TravelWritingDto>
    {
        public TravelWritingsDtoValidation()
        {
            RuleFor(x => x.TravelName).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required").MaximumLength(200).WithMessage("Maximum length 200");
            RuleFor(x => x.TravelMessage).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required").MaximumLength(860).WithMessage("Maximum length 860");
            RuleFor(x => x.TravelImage).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
            RuleFor(x => x.UserId).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{PropertyName} is required");
        }
    }
}
