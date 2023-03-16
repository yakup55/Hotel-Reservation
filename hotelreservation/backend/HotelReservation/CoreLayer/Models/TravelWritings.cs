using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class TravelWritings
    {
        [Key]
        public int TravelWritingId { get; set; }
        public string UserId { get; set; }
        public DateTime TravelDateTime { get; set; }
        public string TravelName { get; set; }
        public string TravelMessage { get; set; }
        public string TravelImage { get; set; }
        public bool TravelStatus { get; set; }

        public ICollection<TravelContent> TravelContents { get; set; }
    }
}
