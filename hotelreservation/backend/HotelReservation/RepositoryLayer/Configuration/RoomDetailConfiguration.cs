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
            builder.Property(x => x.Image1).IsRequired();
            builder.Property(x => x.Image2).IsRequired();
            builder.Property(x => x.Image3).IsRequired();
            builder.Property(x => x.RoomId).IsRequired();

            builder.HasOne(x => x.Room).WithMany(x => x.RoomDetails).HasForeignKey(x => x.RoomId).OnDelete(DeleteBehavior.NoAction);

            builder.HasData(
                new RoomDetail
                {
                    RoomDetailId = 1,
                    Image1 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594405840440.jpg",
                    Image2 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594432289866.jpg",
                    Image3 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594470155558.jpg",
                    RoomId = 1
                }, new RoomDetail
                {
                    RoomDetailId = 2,
                    Image1 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063250216331.jpg",
                    Image2 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063694337191.jpg",
                    Image3 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063807519463.jpg",
                    RoomId = 2
                }, new RoomDetail
                {
                    RoomDetailId = 3,
                    Image1 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594977813034.jpg",
                    Image2 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753594992107538.jpg",
                    Image3 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637753595019444135.jpg",
                    RoomId = 3
                }, new RoomDetail
                {
                    RoomDetailId = 4,
                    Image1 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464711998501.jpg",
                    Image2 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637823464768857977.jpg",
                    Image3 = "https://cdn.tatilsepeti.com/Files/Images/TesisOda/02499/tsr02499637464063858799428.jpg",
                    RoomId = 4
                }
                );
        }
    }
}
