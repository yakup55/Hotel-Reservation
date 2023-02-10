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
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(x => x.CategoryId);
            builder.Property(x => x.CategoryName).IsRequired();
            builder.Property(x => x.CategoryImage).IsRequired();


            builder.HasData(
                new Category
                {
                    CategoryId = 1,
                    CategoryName = "Bungalov",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/bungalov.svg"
                },
                new Category
                {
                    CategoryId = 2,
                    CategoryName = "Termal",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/termal.svg"
                },
                new Category
                {
                    CategoryId = 3,
                    CategoryName = "Tatil Köyleri",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/tatil-koyu.svg"
                }, new Category
                {
                    CategoryId = 4,
                    CategoryName = "Pansiyonlar",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/pansiyon.svg"
                }, new Category
                {
                    CategoryId = 5,
                    CategoryName = "Butik",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/butik.svg"
                }, new Category
                {
                    CategoryId = 6,
                    CategoryName = "Muhafazakar",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/islami.svg"
                }, new Category
                {
                    CategoryId = 7,
                    CategoryName = "Balayı",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/balayi-ciftlerine-uygun.svg"
                }, new Category
                {
                    CategoryId = 8,
                    CategoryName = "Engelli Dostu",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/engelli-dostu.svg"
                }, new Category
                {
                    CategoryId = 9,
                    CategoryName = "Aquaparklı",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/aquapark.svg"
                }, new Category
                {
                    CategoryId = 10,
                    CategoryName = "Doğa",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/doga.svg"
                }, new Category
                {
                    CategoryId = 11,
                    CategoryName = "Dağ ",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/dag.svg"
                }, new Category
                {
                    CategoryId = 12,
                    CategoryName = "Spa",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/spa.svg"
                }, new Category
                {
                    CategoryId = 13,
                    CategoryName = "Denize Sıfır",
                    CategoryImage = "https://cdn.enuygun.com/otel/v-083f8/static/images/theme-icons/denize-sifir.svg"
                }
                );


        }
    }
}
