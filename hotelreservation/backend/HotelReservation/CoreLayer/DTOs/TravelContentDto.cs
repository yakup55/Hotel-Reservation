using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class TravelContentDto
    {
        public int TravelContentId { get; set; }
        public string ContentName { get; set; }
        public string ContentDescription { get; set; }
        public string ContentImage { get; set; }

        public int TravelWritingId { get; set; }
    }
}
