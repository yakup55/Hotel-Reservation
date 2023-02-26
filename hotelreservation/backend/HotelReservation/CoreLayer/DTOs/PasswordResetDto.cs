using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class PasswordResetDto
    {
        public string Password { get; set; } 
        public string PasswordConfirm { get; set; } 
    }
}
