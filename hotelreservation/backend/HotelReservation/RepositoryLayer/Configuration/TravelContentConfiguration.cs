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
    public class TravelContentConfiguration : IEntityTypeConfiguration<TravelContent>
    {
        public void Configure(EntityTypeBuilder<TravelContent> builder)
        {
            builder.HasKey(x => x.TravelContentId);
            builder.Property(x => x.ContentName).IsRequired();
            builder.Property(x => x.ContentDescription).IsRequired();
            builder.Property(x => x.ContentImage).IsRequired();
            builder.Property(x=>x.TravelWritingId).IsRequired();

            builder.HasOne(x=>x.TravelWritings).WithMany(x=>x.TravelContents).HasForeignKey(x=>x.TravelWritingId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
