using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class ReservartionDto
    {
        public int ReservationId { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime ReturnDate { get; set; }

        public string UserId { get; set; }
    }
}
