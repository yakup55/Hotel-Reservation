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
            builder.Property(x => x.HotelImage).IsRequired();
            builder.Property(x => x.HotelPrice).IsRequired().HasColumnType("decimal(18,3)");
            builder.Property(x => x.CategoryId).IsRequired();
            builder.Property(x => x.DegreId).IsRequired();
            builder.Property(x => x.HotelLocation).IsRequired();

            builder.HasOne(x => x.Category).WithMany(x => x.Hotels).HasForeignKey(x => x.CategoryId);
            builder.HasOne(x => x.Degre).WithMany(x => x.Hotels).HasForeignKey(x => x.DegreId);

            builder.HasData(

                new Hotel
                {
                    HotelId = 1,
                    HotelName = "Green Garden Resort Hotel",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/green-garden-resort-hotel-antalya-genel-38176775.jpg",
                    CategoryId = 9,
                    HotelPrice = 21318,
                    HotelLocation = "Obagöl Mevkii. Obaçay Cad., 2. Sk., 07460 Alanya/Antalya",
                    DegreId = 1
                },

                new Hotel
                {
                    HotelId = 2,
                    HotelName = "Susesi Luxury Resort   ",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/susesi-luxury-resort-antalya-genel-39097853.jpg",
                    CategoryId = 9,
                    HotelPrice = 40475,
                    HotelLocation = "İskele Mevkii, 07450 Belek/Serik/Antalya",
                    DegreId = 1
                },
                new Hotel
                {
                    HotelId = 3,
                    HotelName = "Büyük Anadolu Girne Hotel",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.jpg",
                    CategoryId = 9,
                    HotelPrice = 8356,
                    HotelLocation = "Girne/Kuzey Kıbrıs Türk Cumhuriyeti",
                    DegreId = 4
                }
                );


        }
    }
}
