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
    public class HotelConfiguration : IEntityTypeConfiguration<Hotel>
    {
        public void Configure(EntityTypeBuilder<Hotel> builder)
        {
            builder.HasKey(x => x.HotelId);
            builder.Property(x => x.HotelName).IsRequired();
            builder.Property(x=>x.HotelImage).IsRequired();
            builder.Property(x => x.HotelPrice).IsRequired().HasColumnType("decimal(18,3)");
            builder.Property(x=>x.CategoryId).IsRequired();

            builder.HasOne(x=>x.Category).WithMany(x=>x.Hotels).HasForeignKey(x=>x.CategoryId);
        }
    }
}
