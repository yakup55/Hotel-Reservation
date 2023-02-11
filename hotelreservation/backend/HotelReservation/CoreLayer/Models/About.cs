using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class About
    {
        [Key]
        public int AboutId { get; set; }
        public string AboutName { get; set; }
        public string AboutDescription { get; set; }
        public string AboutImage { get; set; }
        public DateTime AboutDate { get; set; }
    }
}
