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
            builder.Property(x => x.CityId).IsRequired();
            builder.Property(x => x.HotelLocation).IsRequired();

            builder.HasOne(x => x.Category).WithMany(x => x.Hotels).HasForeignKey(x => x.CategoryId);
            builder.HasOne(x => x.Degre).WithMany(x => x.Hotels).HasForeignKey(x => x.DegreId);
            builder.HasOne(x => x.City).WithMany(x => x.Hotels).HasForeignKey(x => x.CityId);

            builder.HasData(

                new Hotel
                {
                    HotelId = 1,
                    HotelName = "Green Garden Resort Hotel",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/green-garden-resort-hotel-antalya-genel-38176775.jpg",
                    CategoryId = 9,
                    HotelPrice = 21318,
                    HotelLocation = "Obagöl Mevkii. Obaçay Cad., 2. Sk., 07460 Alanya/Antalya",
                    DegreId = 1,
                    CityId=1
                },

                new Hotel
                {
                    HotelId = 2,
                    HotelName = "Susesi Luxury Resort   ",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/susesi-luxury-resort-antalya-genel-39097853.jpg",
                    CategoryId = 9,
                    HotelPrice = 40475,
                    HotelLocation = "İskele Mevkii, 07450 Belek/Serik/Antalya",
                    DegreId = 1,
                    CityId=1

                },
                new Hotel
                {
                    HotelId = 3,
                    HotelName = "Büyük Anadolu Girne Hotel",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.jpg",
                    CategoryId = 9,
                    HotelPrice = 8356,
                    HotelLocation = "Girne/Kuzey Kıbrıs Türk Cumhuriyeti",
                    DegreId = 4,
                    CityId=9
                },
                new Hotel
                {
                    HotelId = 4,
                    HotelName = "Luna Blanca Resort Spa",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/luna-blanca-resort-spa-antalya-genel-36887047.webp",
                    CategoryId = 12,
                    HotelPrice =15220 ,
                    HotelLocation = "Kumköy Cd., 283. Sokak, 07600 Manavgat/Antalya",
                    DegreId = 2,
                    CityId = 1

                }, new Hotel
                {
                    HotelId = 5,
                    HotelName = "Somerset Maslak Istanbul",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/somerset-maslak-istanbul-istanbul-27564701.jpg",
                    CategoryId =9 ,
                    HotelPrice = 4904,
                    HotelLocation = "Maslak, Sarıyer, İstanbul",
                    DegreId = 2,
                    CityId =2 

                }, new Hotel
                {
                    HotelId =6 ,
                    HotelName = "Hilton Istanbul Bosphorus",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/hilton-istanbul-bosphorus-istanbul-37295703.jpg",
                    CategoryId = 12,
                    HotelPrice = 4458,
                    HotelLocation = "Harbiye, Şişli, İstanbul",
                    DegreId = 1,
                    CityId = 2

                }, new Hotel
                {
                    HotelId =7 ,
                    HotelName = "Tuzla, İstanbul",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/radisson-blu-spa-tuzla-istanbul-38198019.jpg",
                    CategoryId =9,
                    HotelPrice = 3007,
                    HotelLocation = "Radisson Blu Hotel Spa Tuzla",
                    DegreId =1 ,
                    CityId = 2

                }, new Hotel
                {
                    HotelId = 8,
                    HotelName = "Costa Maya Bodrum",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/costa-maya-bodrum-bodrum-36912949.jpg",
                    CategoryId =9 ,
                    HotelPrice = 504,
                    HotelLocation = "Çarşı, Bodrum Merkez, Muğla",
                    DegreId = 4,
                    CityId = 4

                }, new Hotel
                {
                    HotelId = 9,
                    HotelName = "\r\nBodrium Hotel And You Spa",
                    HotelImage = "https://cdn3.enuygun.com/media/lib/1x250/uploads/image/bodrium-and-you-spa-bodrum-36764953.jpg",
                    CategoryId = 12,
                    HotelPrice = 1635,
                    HotelLocation = "Eskiçeşme, Bodrum Merkez, Muğla",
                    DegreId = 2,
                    CityId =4

                }
                );


        }
    }
}
