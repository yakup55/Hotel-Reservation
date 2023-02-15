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
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.HasKey(x => x.ContactId);
            builder.Property(x => x.ContactSubject).IsRequired();
            builder.Property(x => x.ContactMessage).IsRequired();
            builder.Property(x => x.ContactEmail).IsRequired();
        }
    }
}
