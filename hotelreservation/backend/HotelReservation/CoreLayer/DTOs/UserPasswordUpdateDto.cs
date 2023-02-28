using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace CoreLayer.DTOs
{
    public class UserPasswordUpdateDto
    {
        public string Email { get; set; }
        public string PasswordOld { get; set; }
        public string PasswordNew { get; set; }
        public string PasswordNewConfirm { get; set; }
    }
}
