using CoreLayer.DTOs;
using FluentValidation;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Validations
{
    public class TravelContentsDtoValidation : AbstractValidator<TravelContentDto>
    {
        public TravelContentsDtoValidation()
        {
            RuleFor(x => x.ContentName).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{ PropertyName} is required").MaximumLength(200).WithMessage("Maximum length 200");
            RuleFor(x => x.ContentDescription).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{ PropertyName} is required").MaximumLength(1210).WithMessage("Maximum length 1210");
            RuleFor(x => x.TravelWritingId).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{ PropertyName} is required");
            RuleFor(x => x.ContentImage).NotNull().WithMessage("{PropertyName} is required").NotEmpty().WithMessage("{ PropertyName} is required");
        }
    }
}
