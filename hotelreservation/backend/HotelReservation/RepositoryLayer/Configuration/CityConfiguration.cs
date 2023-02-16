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
    public class CityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.HasKey(x => x.CityId);
            builder.Property(x => x.CityName).IsRequired();
            builder.Property(x => x.CityImage).IsRequired();

            builder.HasData(

                new City
                {
                    CityId=1,
                    CityName="Antalya",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/antalya.jpg"
                },
                new City
                {
                    CityId=2,
                    CityName="İstanbul",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/istanbul.jpg",
                }, 
                new City
                {
                    CityId=3,
                    CityName="Ankara",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/ankara.jpg",
                }, new City
                {
                    CityId=4,
                    CityName="Bodrum",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/bodrum.jpg",
                } ,
                new City
                {
                    CityId=5,
                    CityName="Amsterdam",
                    CityImage= "https://cdn2.enuygun.com/media/lib/310x206/uploads/image/amsterdam-32361.jpeg",
                },
                new City
                {
                    CityId=6,
                    CityName="Londra",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/londra.jpg",
                },
                new City
                {
                    CityId=7,
                    CityName="Paris",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/paris.jpg",
                } ,
                new City
                {
                    CityId=8,
                    CityName="Roma",
                    CityImage= "https://cdn.enuygun.com/otel/v-07c5a/static/images/good-place/roma.jpg",
                } ,
                new City
                {
                    CityId=9,
                    CityName="Kıbrıs",
                    CityImage= "data:image/jpeg;base64,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",
                }
                );
        }
    }
}
