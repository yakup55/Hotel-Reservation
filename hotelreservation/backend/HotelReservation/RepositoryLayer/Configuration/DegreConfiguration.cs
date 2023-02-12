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
    public class DegreConfiguration : IEntityTypeConfiguration<Degre>
    {
        public void Configure(EntityTypeBuilder<Degre> builder)
        {
            builder.HasKey(x => x.DegreId);
            builder.Property(x => x.DegreName).IsRequired();
            builder.Property(x => x.DegreValue).IsRequired();

            builder.HasData(
                new Degre
                {
                    DegreId = 1,
                    DegreName = "Olağanüstü",
                    DegreValue = 10
                },
                 new Degre
                 {
                     DegreId = 2,
                     DegreName = "Mükemmel",
                     DegreValue = 9
                 },
                  new Degre
                  {
                      DegreId = 3,
                      DegreName = "Harika",
                      DegreValue = 8
                  } ,
                  new Degre
                  {
                      DegreId = 4,
                      DegreName = "Çok İyi",
                      DegreValue = 7
                  },
                  new Degre
                  {
                      DegreId = 5,
                      DegreName = " İyi",
                      DegreValue = 6
                  }
                );
        }
    }
}
