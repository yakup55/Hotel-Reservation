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
            builder.Property(x => x.RoomImage).IsRequired();
            builder.Property(x => x.RoomName).IsRequired();
            builder.Property(x => x.RoomPrice).IsRequired().HasColumnType("decimal(18,3)");
            builder.Property(x => x.HotelId).IsRequired();


            builder.HasOne(X => X.Hotel).WithMany(x => x.Rooms).HasForeignKey(x => x.HotelId);

            builder.HasData(
                new Room
                {
                    RoomId = 1,
                    HotelId = 1,
                    RoomImage = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594389133892.jpg",
                    RoomName = "Standart Kara Manzaralı Oda",
                    RoomPrice = 20619
                }, new Room
                {
                    RoomId = 2,
                    HotelId = 1,
                    RoomImage = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063178641427.jpg",
                    RoomName = "1 Yatak Odalı Comfort Aile Odası Kara Manzara",
                    RoomPrice = 21994
                }, new Room
                {
                    RoomId = 3,
                    HotelId = 1,
                    RoomImage = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594977813034.jpg",
                    RoomName = "Standart Deniz Manzaralı Oda",
                    RoomPrice = 21994
                }, new Room
                {
                    RoomId = 4,
                    HotelId = 1,
                    RoomImage = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464711998501.jpg",
                    RoomName = "1 Yatak Odalı Comfort Aile Odası Deniz Manzara",
                    RoomPrice = 23369
                }
                );
        }
    }
}
