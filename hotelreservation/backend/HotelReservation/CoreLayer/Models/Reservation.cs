using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Reservation
    {
        [Key]
        public int ReservationId { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public int NumberPeople { get; set; }

        public string UserId { get; set; }

        public int RoomDetailId { get; set; }
        public RoomDetail RoomDetail { get; set; }
    }
}
