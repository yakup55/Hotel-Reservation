using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class UserCreateDto
    {
        public string UserName { get; set; }
        public string UserMail { get; set; }
        public string UserNumber { get; set; }
        public string UserPasword { get; set; }
    }
}
