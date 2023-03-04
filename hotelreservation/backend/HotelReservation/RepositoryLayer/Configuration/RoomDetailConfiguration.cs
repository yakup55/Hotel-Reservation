using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class RoomDetailConfiguration : IEntityTypeConfiguration<RoomDetail>
    {
        public void Configure(EntityTypeBuilder<RoomDetail> builder)
        {
           builder.HasKey(x => x.RoomDetailId);
            builder.Property(x=>x.Image1).IsRequired();
            builder.Property(x=>x.Image2).IsRequired();
            builder.Property(x=>x.Image3).IsRequired();
            builder.Property(x=>x.RoomId).IsRequired();

            builder.HasOne(x=>x.Room).WithMany(x=>x.RoomDetails).HasForeignKey(x=>x.RoomId);
        }
    }
}
