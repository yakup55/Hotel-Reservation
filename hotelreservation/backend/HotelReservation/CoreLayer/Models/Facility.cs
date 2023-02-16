using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Facility
    {
        [Key]
        public int FacilityId { get; set; }
        public string FacilityName { get; set; }

        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }

        public int DegreId { get; set; }
        public Degre Degre { get; set; }
    }
}
