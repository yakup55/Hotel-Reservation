﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.DTOs
{
    public class UserRoleDto
    {
        public string UserId { get; set; }
        public string RoleName { get; set; }
    }
}
