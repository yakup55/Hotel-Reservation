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

            builder.HasData(
                new HotelDetail
                {
                    HotelDetailId=1,
                    Image1= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582375.webp",
                    Image2= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582376.webp",
                    Image3= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582377.webp",
                    Image4= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582378.webp",
                    Image5= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582379.webp",
                    Image6= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582381.webp",
                    Image7= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582384.webp",
                    Image8= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582385.webp",
                    Image9= "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582393.webp",
                    HotelId=1,
                    HotelMap= "https://goo.gl/maps/NVdHZDFRRH54qoMw8"
                }
                );
        }
    }
}
