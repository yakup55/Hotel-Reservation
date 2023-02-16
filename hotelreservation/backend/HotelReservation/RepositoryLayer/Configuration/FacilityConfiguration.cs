using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class FacilityConfiguration : IEntityTypeConfiguration<Facility>
    {
        public void Configure(EntityTypeBuilder<Facility> builder)
        {
            builder.HasKey(x => x.FacilityId);
            builder.Property(x=>x.FacilityName).IsRequired();
            builder.Property(x=>x.DegreId).IsRequired();
            builder.Property(x=>x.HotelId).IsRequired();

            builder.HasOne(x=> x.Hotel).WithMany(x=>x.Facilities).HasForeignKey(x=>x.HotelId).OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(x=> x.Degre).WithMany(x=>x.Facilities).HasForeignKey(x=>x.DegreId).OnDelete(DeleteBehavior.NoAction);

            builder.HasData(
                new Facility
                {
                    FacilityId= 1,
                    HotelId= 1,
                    FacilityName="Yemek",
                    DegreId= 1,
                }, new Facility
                {
                    FacilityId= 2,
                    HotelId= 1,
                    FacilityName="Servis",
                    DegreId= 1,
                }, new Facility
                {
                    FacilityId= 3,
                    HotelId= 1,
                    FacilityName="Lokasyon",
                    DegreId= 1,
                }, new Facility
                {
                    FacilityId= 4,
                    HotelId= 1,
                    FacilityName="Puan",
                    DegreId= 1,
                }, new Facility
                {
                    FacilityId= 5,
                    HotelId= 1,
                    FacilityName="Temizlik",
                    DegreId= 1,
                }
                );
        }
    }
}
