using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class TravelWritingDto
    {
        public int TravelWritingId { get; set; }
        public string UserId { get; set; }
        public DateTime TravelDateTime { get; set; }
        public string TravelName { get; set; }
        public string TravelMessage { get; set; }
        public string TravelImage { get; set; }
        public bool TravelStatus { get; set; }
    }
}
