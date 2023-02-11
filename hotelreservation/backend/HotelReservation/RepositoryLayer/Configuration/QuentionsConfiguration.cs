using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class QuentionsConfiguration : IEntityTypeConfiguration<Quentions>
    {
        public void Configure(EntityTypeBuilder<Quentions> builder)
        {
            builder.HasKey(x=>x.QuentionsId);
            builder.Property(x=>x.QuentionsName).IsRequired();
            builder.Property(x=>x.QuentionsMessage).IsRequired();
            builder.Property(x=>x.HotelId).IsRequired();

            builder.HasOne(x=>x.Hotel).WithMany(x=>x.Quentions).HasForeignKey(x => x.HotelId);
        }
    }
}
