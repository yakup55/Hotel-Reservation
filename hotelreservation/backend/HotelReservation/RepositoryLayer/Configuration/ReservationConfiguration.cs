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
    public class ReservationConfiguration : IEntityTypeConfiguration<Reservation>
    {
        public void Configure(EntityTypeBuilder<Reservation> builder)
        {
            builder.HasKey(x => x.ReservationId);
            builder.Property(x=>x.ArrivalDate).IsRequired();
            builder.Property(x=>x.ReturnDate).IsRequired();
            builder.Property(x=>x.NumberPeople).IsRequired();
            builder.Property(x=>x.UserId).IsRequired();
            builder.Property(x=>x.RoomDetailId).IsRequired();

            builder.HasOne(x=>x.RoomDetail).WithMany(x=>x.Reservations).HasForeignKey(x=>x.RoomDetailId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
