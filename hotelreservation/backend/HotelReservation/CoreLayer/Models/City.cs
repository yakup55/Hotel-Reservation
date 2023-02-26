using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class City
    {
        [Key]
        public int CityId { get; set; }
        public string CityName { get; set; }
        public string CityImage { get; set; }

        public ICollection<Hotel> Hotels { get; set; }
        public ICollection<AppUser> AppUsers { get; set; }
    }
}
