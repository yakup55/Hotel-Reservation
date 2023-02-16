using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(x => x.CommentId);
            builder.Property(x => x.CommentMessage).IsRequired();
            builder.Property(x => x.HotelId).IsRequired();
            builder.Property(x => x.DegreId).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.CommentSubject).IsRequired();
            builder.Property(x => x.CommentStatus).IsRequired();

            builder.HasOne(x=>x.Hotel).WithMany(x=>x.Comments).HasForeignKey(x => x.HotelId);
            builder.HasOne(x=>x.Degre).WithMany(x=>x.Comments).HasForeignKey(x => x.DegreId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
