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

            builder.HasData(
                new Quentions
                {
                    QuentionsId = 1,
                    HotelId= 1,
                    QuentionsName= "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage= "Tesiste konaklayabileceğiniz toplam 19 oda bulunuyor."
                },
                new Quentions
                {
                    QuentionsId = 2,
                    HotelId= 1,
                    QuentionsName= "Tesis için giriş ve çıkış saatleri nelerdir?",
                    QuentionsMessage= "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz."
                }
                );
        }
    }
}
