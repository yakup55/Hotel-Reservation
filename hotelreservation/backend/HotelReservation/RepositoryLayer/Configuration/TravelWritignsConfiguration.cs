using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Configuration
{
    public class TravelWritignsConfiguration : IEntityTypeConfiguration<TravelWritings>
    {
        public void Configure(EntityTypeBuilder<TravelWritings> builder)
        {
            builder.HasKey(x => x.TravelWritingId);
            builder.Property(x => x.TravelImage).IsRequired();
            builder.Property(x => x.TravelName).IsRequired();
            builder.Property(x => x.TravelMessage).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.TravelStatus);
            builder.Property(x => x.TravelDateTime);
        }
    }
}
