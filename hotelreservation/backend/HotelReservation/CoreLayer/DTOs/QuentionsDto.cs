﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class QuentionsDto
    {
        public int QuentionsId { get; set; }
        public string QuentionsName { get; set; }
        public string QuentionsMessage { get; set; }

        public int HotelId { get; set; }
    }
}
