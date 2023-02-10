using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class RoomDetail
    {
        [Key]
        public int RoomDetailId { get; set; }
        public int NumberPeople { get; set; }
        public int NumberDate { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }

        public int RoomId { get; set; }
        public Room Room { get; set; }

    }
}
