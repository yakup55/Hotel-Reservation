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
            builder.Property(x => x.Image1).IsRequired();
            builder.Property(x => x.Image2).IsRequired();
            builder.Property(x => x.Image3).IsRequired();
            builder.Property(x => x.Image4).IsRequired();
            builder.Property(x => x.Image5).IsRequired();
            builder.Property(x => x.Image6).IsRequired();
            builder.Property(x => x.Image7).IsRequired();
            builder.Property(x => x.Image8).IsRequired();
            builder.Property(x => x.Image9).IsRequired();
            builder.Property(x => x.HotelMap).IsRequired();
            builder.Property(x => x.HotelId).IsRequired();

            builder.HasOne(x => x.Hotel).WithMany(x => x.HotelDetails).HasForeignKey(x => x.HotelId);

            builder.HasData(
                new HotelDetail
                {
                    HotelDetailId = 1,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582375.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582376.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582377.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582378.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582379.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582381.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582384.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582385.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/green-garden-resort-hotel-antalya-genel-40582393.webp",
                    HotelId = 1,
                    HotelMap = "https://goo.gl/maps/NVdHZDFRRH54qoMw8"
                },
                new HotelDetail
                {
                    HotelDetailId = 2,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799743.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799744.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799745.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799746.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799750.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799753.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799754.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799755.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/susesi-luxury-resort-antalya-genel-40799756.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.431110509297!2d31.03679701524925!3d36.85609847993706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4074efde6cd79259%3A0xda0d0175715a1421!2sSusesi%20Luxury%20Resort!5e0!3m2!1str!2str!4v1676720181955!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 2
                },
                new HotelDetail
                {
                    HotelDetailId = 3,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-havuz-38526923.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-spa-saglik-38526924.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498110.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498111.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498112.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-genel-38526922.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-havuz-38526923.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-spa-saglik-38526924.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/buyuk-anadolu-girne-hotel-kibris-oda-39498111.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509.924997754389!2d33.31546567593716!3d35.331752721108735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1333e6e63e1f%3A0x63167cff0325308a!2sB%C3%BCy%C3%BCk%20Anadolu%20Girne%20Hotel!5e0!3m2!1str!2str!4v1676720655877!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 3
                },
                new HotelDetail
                {
                    HotelDetailId = 4,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/luna-blanca-resort-spa-antalya-genel-39563033.jpg",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-genel-39563035.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-havuz-39563040.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-deniz-39563038.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563039.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563050.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563053.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-yeme-icme-39563054.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/luna-blanca-resort-spa-antalya-spa-saglik-39563067.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.488570891468!2d31.35023831524779!3d36.8068107799472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c35ecb6607d369%3A0x2326c02a0dc26db8!2sLuna%20Blanca%20Resort%20%26%20Spa!5e0!3m2!1str!2str!4v1676721585554!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 4
                },



                new HotelDetail
                {
                    HotelDetailId = 5,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/somerset-maslak-istanbul-istanbul-genel-27564703.jpg",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-havuz-27564701.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-havuz-27564715.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-aktiviteler-27564685.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564697.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564696.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564706.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-lobi-27564704.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/somerset-maslak-istanbul-istanbul-manzara-peyzaj-27564705.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.655357462936!2d29.00669291537778!3d41.12021737928958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b9db1143b9%3A0xf65490841babf00!2sSomerset%20Maslak%20Istanbul!5e0!3m2!1str!2str!4v1676722412227!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 5
                }, new HotelDetail
                {
                    HotelDetailId = 6,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-37295684.jpg",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-39295600.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-genel-39295601.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295601.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295721.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-havuz-37295723.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-yeme-icme-37295649.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-aktiviteler-37295576.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/hilton-istanbul-bosphorus-istanbul-aktiviteler-37295573.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1214238095263!2d28.987021115375384!3d41.044473679297134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab03b5a0b0c4d%3A0xe964200b7b8e87ea!2sHilton%20%C4%B0stanbul%20Bosphorus!5e0!3m2!1str!2str!4v1676722613474!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 6
                }, new HotelDetail
                {
                    HotelDetailId = 7,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-yeme-icme-38293256.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-bar-38293258.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-lobi-38293253.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38198021.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38198022.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-oda-38293250.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-spor-38104576.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-havuz-38104578.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/radisson-blu-spa-tuzla-istanbul-spa-saglik-38388736.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8064728156337!2d29.31402321537002!3d40.8761210793143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc7e87513309%3A0xdc86803a3afcb1f2!2sRadisson%20Blu%20Hotel%20%26%20Spa%2C%20Istanbul%20Tuzla!5e0!3m2!1str!2str!4v1676722922169!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 7
                }, new HotelDetail
                {
                    HotelDetailId = 8,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-genel-39501781.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-genel-39568244.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-yeme-icme-39501791.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-yeme-icme-39568250.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-manzara-peyzaj-39501788.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39501793.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-manzara-peyzaj-39501789.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39568249.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/costa-maya-bodrum-bodrum-oda-39568248.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.8371747189913!2d27.426674815254508!3d37.03752847990045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6c3f7fd6dfed%3A0x88f6c5f46699d5d1!2sCosta%20Maya%20Hotel!5e0!3m2!1str!2str!4v1676723103065!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 8
                }, new HotelDetail
                {
                    HotelDetailId = 9,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x400/uploads/image/bodrium-and-you-spa-bodrum-genel-39518871.jpg",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-yeme-icme-39518873.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-yeme-icme-39518885.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-bar-39518900.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-bar-39518902.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-lobi-39518879.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-lobi-39518881.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-is-konferans-39518905.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/bodrium-and-you-spa-bodrum-oda-39518888.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.857282602926!2d27.40969921525455!3d37.03704907990057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6c6e0eaad519%3A0x75df94bcf046bda0!2sBodrium%20Otel%20%26%20SPA!5e0!3m2!1str!2str!4v1676723345737!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 9
                },
                new HotelDetail
                {
                    HotelDetailId = 10,
                    Image1 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-genel-38526226.webp",
                    Image2 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-genel-40785109.webp",
                    Image3 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-genel-40785110.webp",
                    Image4 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-genel-40785111.webp",
                    Image5 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-havuz-38526235.webp",
                    Image6 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-havuz-38526236.webp",
                    Image7 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-yeme-icme-40785113.webp",
                    Image8 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-is-konferans-38526244.webp",
                    Image9 = "https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/grand-pasha-lefkosa-casino-spa-kibris-oda-40785105.webp",
                    HotelMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.517189141367!2d33.345311115202406!3d35.19358438031096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10ccdd5e1671%3A0x8747bee76e32a62c!2sGrand%20Pasha%20Nicosia%20Hotel%20%26%20Casino%20%26%20Spa!5e0!3m2!1str!2str!4v1678218328815!5m2!1str!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
                    HotelId = 10
                }

                );
        }
    }
}
