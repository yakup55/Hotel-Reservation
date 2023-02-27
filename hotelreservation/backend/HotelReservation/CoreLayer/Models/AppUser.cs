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
       
        public DateTime?  BirthDate { get; set; }
        public string? Image { get; set; }
        public bool Status { get; set; }

        public int? CityId { get; set; }
        public City? City { get; set; }
    }
}
