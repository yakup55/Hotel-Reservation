using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class AppUser:IdentityUser
    {
        public string?  City { get; set; }
        public DateTime?  BirthDate { get; set; }
        public string? Image { get; set; }
    }
}
