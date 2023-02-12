using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class HotelDto
    {
        public int HotelId { get; set; }
        public string HotelName { get; set; }
        public decimal HotelPrice { get; set; }
        public string HotelImage { get; set; }
        public string HotelLocation { get; set; }

        public int CategoryId { get; set; }
        public int DegreId { get; set; }
    }
}
