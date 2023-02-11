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
    public class RoomConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.HasKey(x => x.RoomId);
            builder.Property(x=>x.RoomImage).IsRequired();
            builder.Property(x=>x.RoomPrice).IsRequired().HasColumnType("decimal(18,3)");
            builder.Property(x=>x.HotelId).IsRequired();


            builder.HasOne(X=>X.Hotel).WithMany(x => x.Rooms).HasForeignKey(x=>x.HotelId);
        }
    }
}
