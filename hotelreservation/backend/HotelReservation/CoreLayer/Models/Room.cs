using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Room
    {
        [Key]
        public int RoomId { get; set; }
        public string RoomImage { get; set; }
        public decimal RoomPrice { get; set;}

        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }

        public ICollection<RoomDetail> RoomDetails { get; set; }
    }
}
