using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class UserRefreshToken
    {
        public string userId { get; set; }
        public string Code { get; set; }
        public DateTime Expiration { get; set; }
    }
}
