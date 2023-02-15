using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class HotelDetailConfiguration : IEntityTypeConfiguration<HotelDetail>
    {
        public void Configure(EntityTypeBuilder<HotelDetail> builder)
        {
            builder.HasKey(x => x.HotelDetailId);
            builder.Property(x=>x.Image1).IsRequired();
            builder.Property(x=>x.Image2).IsRequired();
            builder.Property(x=>x.Image3).IsRequired();
            builder.Property(x=>x.Image4).IsRequired();
            builder.Property(x=>x.Image5).IsRequired();
            builder.Property(x=>x.Image6).IsRequired();
            builder.Property(x=>x.Image7).IsRequired();
            builder.Property(x=>x.Image8).IsRequired();
            builder.Property(x=>x.Image9).IsRequired();
            builder.Property(x=>x.HotelMap).IsRequired();
            builder.Property(x=>x.HotelId).IsRequired();

            builder.HasOne(x => x.Hotel).WithMany(x => x.HotelDetails).HasForeignKey(x => x.HotelId); 
        }
    }
}
