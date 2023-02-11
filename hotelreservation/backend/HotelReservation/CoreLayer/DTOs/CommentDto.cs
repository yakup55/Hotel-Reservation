using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public string CommentMessage { get; set; }
        public int HotelId { get; set; }
        public string UserId { get; set; }
    }
}
