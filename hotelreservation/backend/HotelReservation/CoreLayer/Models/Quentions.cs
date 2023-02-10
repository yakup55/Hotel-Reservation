using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Quentions
    {
        [Key]
        public int QuentionsId { get; set; }
        public string QuentionsName { get; set; }
        public string QuentionsMessage { get; set; }

        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }
    }
}
