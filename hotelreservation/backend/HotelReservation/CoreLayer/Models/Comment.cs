using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Models
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public DateTime CommentDate { get; set; }
        public string CommentSubject { get; set; }
        public string CommentMessage { get; set; }
        public bool CommentStatus { get; set; }
        public int CommentRating { get; set; }

        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }
        public string UserId { get; set; }
    }
}
