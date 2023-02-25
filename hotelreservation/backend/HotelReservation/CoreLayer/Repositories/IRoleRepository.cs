using CoreLayer.DTOs;
using Microsoft.AspNetCore.Identity;
using SharedLibray.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface IRoleRepository:IGenericRepository<IdentityRole>
    {
      
    }
}
