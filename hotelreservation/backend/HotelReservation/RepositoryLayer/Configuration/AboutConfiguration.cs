using CoreLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.Configuration
{
    public class AboutConfiguration : IEntityTypeConfiguration<About>
    {
        public void Configure(EntityTypeBuilder<About> builder)
        {
            builder.HasKey(x => x.AboutId);
            builder.Property(x => x.AboutName).IsRequired();
            builder.Property(x => x.AboutDescription).IsRequired();
            builder.Property(x=>x.AboutImage).IsRequired();

            builder.HasData(
                new About
                {
                    AboutId = 1,
                    AboutName = "Sayısız Seçenek",
                    AboutDescription = "10 larca oteli tercihlerinize göre filtreleyerek saniyeler içinde size en uygun otelleri bulabilirsiniz",
                    AboutImage= "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg",
                    AboutDate = DateTime.Now,
                },new About
                {
                    AboutId = 2,
                    AboutName = "Uygun Oteller",
                    AboutDescription = "Kafanızı karıştıran fiyat ve hizmet seçenekleri arasında kaybolmayın, tercihlerinizi belirleyip size en uygun otelde odanızı hemen ayırtın.",
                    AboutImage= "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg",
                    AboutDate = DateTime.Now,
                },new About
                {
                    AboutId = 3,
                    AboutName = "Hızlı Ve Kolay",
                    AboutDescription = "Enuygun sayesinde aradığınız oteli bulmak için sadece birkaç saniyeye ihtiyacınız var.",
                    AboutImage= "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg",
                    AboutDate = DateTime.Now,
                },new About
                {
                    AboutId = 4,
                    AboutName = "Güvenle Alın",
                    AboutDescription = "Tüm ödeme işleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.",
                    AboutImage= "https://cdn.enuygun.com/otel/v-083f8/static/images/icons/option.svg",
                    AboutDate = DateTime.Now,
                }
                );

        }
    }
}
