using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class FaciltyDto
    {
        public int FacilityId { get; set; }
        public string FacilityName { get; set; }

        public int HotelId { get; set; }

        public int DegreId { get; set; }
    }
}
