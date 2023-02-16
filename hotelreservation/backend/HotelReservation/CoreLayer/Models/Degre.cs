using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Degre
    {
        [Key]
        public int DegreId { get; set; }
        public string DegreName { get; set; }
        public int DegreValue { get; set; }

        public ICollection<Hotel> Hotels { get; set; }
        public ICollection<Facility> Facilities { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
