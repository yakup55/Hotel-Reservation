using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Hotel
    {
        [Key]
        public int HotelId { get; set; }
        public string HotelName { get; set; }
        public decimal HotelPrice { get; set; }
        public string HotelImage { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public ICollection<Room> Rooms { get; set; }
        public ICollection<HotelDetail> HotelDetails { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Quentions> Quentions  { get; set; }

    }
}
