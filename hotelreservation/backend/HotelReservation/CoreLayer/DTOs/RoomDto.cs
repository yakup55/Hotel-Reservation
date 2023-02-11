using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class RoomDto
    {
        public int RoomId { get; set; }
        public string RoomImage { get; set; }
        public decimal RoomPrice { get; set; }

        public int HotelId { get; set; }
    }
}
