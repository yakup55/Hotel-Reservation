using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace RepositoryLayer.Configuration
{
    public class QuentionsConfiguration : IEntityTypeConfiguration<Quentions>
    {
        public void Configure(EntityTypeBuilder<Quentions> builder)
        {
            builder.HasKey(x => x.QuentionsId);
            builder.Property(x => x.QuentionsName).IsRequired();
            builder.Property(x => x.QuentionsMessage).IsRequired();
            builder.Property(x => x.HotelId).IsRequired();

            builder.HasOne(x => x.Hotel).WithMany(x => x.Quentions).HasForeignKey(x => x.HotelId);

            builder.HasData(
                new Quentions
                {
                    QuentionsId = 1,
                    HotelId = 1,
                    QuentionsName = "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage = "Tesiste konaklayabileceğiniz toplam 19 oda bulunuyor."
                },
                new Quentions
                {
                    QuentionsId = 6,
                    QuentionsName = "Luna Blanca Resort Spa otelin havalimanı ve şehir merkezine olan uzaklığı",
                    QuentionsMessage = "Antalya (60 km) Gazipasa (110 km)",
                    HotelId = 4
                }, new Quentions
                {
                    QuentionsId = 7,
                    QuentionsName = "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage = "Tesiste konaklayabileceğiniz toplam 31 oda bulunuyor.",
                    HotelId = 4
                }, new Quentions
                {
                    QuentionsId = 8,
                    QuentionsName = "Tesis için giriş ve çıkış saatleri nelerdir?",
                    QuentionsMessage = "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz.",
                    HotelId = 4
                }, new Quentions
                {
                    QuentionsId = 9,
                    QuentionsName = "Tesis havalimanı ve şehir merkezine ne kadar uzaklıkta?",
                    QuentionsMessage = "Ataturk (31 km) Sabiha Gokcen (49 km)",
                    HotelId = 5
                }, new Quentions
                {
                    QuentionsId = 10,
                    QuentionsName = "Tesisin ücretli ve ücretsiz sunduğu olanaklar hangileridir?",
                    QuentionsMessage = "Buhar odası Sauna",
                    HotelId = 5
                }, new Quentions
                {
                    QuentionsId = 11,
                    QuentionsName = "Tesiste hangi tip odalar bulunuyor?",
                    QuentionsMessage = "Bir Yatak Odası Bir Banyo Apart Daire Bunk Yatak Yatakhanede Yatak Standart 1 Çift Kişilik Yatak Standart 1 Çift Kişilik Veya 2 Tek Kişilik Yatak Standart Çift Kişilik Tek Kişi Kullanım",
                    HotelId = 5
                }, new Quentions
                {
                    QuentionsId = 12,
                    QuentionsName = "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage = "Tesiste konaklayabileceğiniz toplam 29 oda bulunuyor.",
                    HotelId = 5
                }, new Quentions
                {
                    QuentionsId = 13,
                    QuentionsName = "Tesis için giriş ve çıkış saatleri nelerdir?",
                    QuentionsMessage = "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz.",
                    HotelId = 5
                }, new Quentions
                {
                    QuentionsId = 14,
                    QuentionsName = "Tesis havalimanı ve şehir merkezine ne kadar uzaklıkta?",
                    QuentionsMessage = "Milas (37 km) Ippokratis (49 km)",
                    HotelId = 9
                },
                new Quentions
                {
                    QuentionsId = 15,
                    QuentionsName = "Tesisin ücretli ve ücretsiz sunduğu olanaklar hangileridir?",
                    QuentionsMessage = "Ücretsiz olanaklar  Açık havuz Sauna Hamam Tv Salonu Ücretli olanaklar  Masaj(ücretli) Spa Merkezi(ücretli)",
                    HotelId = 9
                }, new Quentions
                {
                    QuentionsId = 16,
                    QuentionsName = "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage = "Tesiste konaklayabileceğiniz toplam 27 oda bulunuyor.",
                    HotelId = 9
                }, new Quentions
                {
                    QuentionsId = 17,
                    QuentionsName = "Tesis için giriş ve çıkış saatleri nelerdir?",
                    QuentionsMessage = "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz.",
                    HotelId = 9
                }, new Quentions
                {
                    QuentionsId = 18,
                    QuentionsName = "Tesiste hangi tip odalar bulunuyor?",
                    QuentionsMessage = "Peyzaj Manzaralı 1 Çift Kişilik Yatak Peyzaj Manzaralı 1 Çift Kişilik Veya 2 Tek Kişilik Yatak Standart Çift Kişilik Tek Kişi Kullanım Ekonomi Oda Peyzaj Manzaralı Tek Kişilik Oda",
                    HotelId = 9
                }, new Quentions
                {
                    QuentionsId = 19,
                    QuentionsName = "Tesis çevresinde gezilecek yerler nerelerdir?",
                    QuentionsMessage = "Arabahmet Mahallesi’ni görün (0.0 km) Tarihi mekanları gezin (0.0 km) Suriçi’nin sokaklarında yürüyün (0.0 km) Tarihi çarşıda alışveriş yapın (0.0 km) Müze turu yapın (0.0 km)",
                    HotelId = 10
                }, new Quentions
                {
                    QuentionsId = 20,
                    QuentionsName = "Tesis havalimanı ve şehir merkezine ne kadar uzaklıkta?",
                    QuentionsMessage = "Grand Pasha Lefkoşa Hotel Casino Spa otelin havalimanı ve şehir merkezine olan uzaklığı;  Ercan (23 km) Gecitkale (45 km)",
                    HotelId = 10
                }, new Quentions
                {
                    QuentionsId = 21,
                    QuentionsName = "Tesisin ücretli ve ücretsiz sunduğu olanaklar hangileridir?",
                    QuentionsMessage = "Tesisin sunduğu olanaklar;  Ücretsiz olanaklar  Kapalı havuz Açık havuz Kuaför salonu Jakuzi Sauna   Ücretli olanaklar  Masaj(ücretli)",
                    HotelId = 10
                }, new Quentions
                {
                    QuentionsId = 22,
                    QuentionsName = "Tesiste hangi tip odalar bulunuyor?",
                    QuentionsMessage = "Corner Suit Standart Oda Corner Suit",
                    HotelId = 10
                }, new Quentions
                {
                    QuentionsId = 23,
                    QuentionsName = "Tesiste kaç adet oda bulunuyor?",
                    QuentionsMessage = "Tesiste konaklayabileceğiniz toplam 10 oda bulunuyor.",
                    HotelId = 10
                }, new Quentions
                {
                    QuentionsId = 24,
                    QuentionsName = "Tesis için giriş ve çıkış saatleri nelerdir?",
                    QuentionsMessage = "Otel için check-in saati 14:00'dan sonra başlar. Checkout işlemlerini ise 12:00 kadar yapabilirsiniz.",
                    HotelId = 10
                }
                );
        }
    }
}
