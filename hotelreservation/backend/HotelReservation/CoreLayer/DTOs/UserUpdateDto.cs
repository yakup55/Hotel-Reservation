using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class UserUpdateDto
    {
        public string UserId { get; set; }
        public string UserImage { get; set; }
        public int CityId { get; set; }
        public DateTime BirthDate { get; set; }
    }
    
}
