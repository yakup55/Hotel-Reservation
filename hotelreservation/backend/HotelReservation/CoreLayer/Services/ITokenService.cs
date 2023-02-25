using CoreLayer.Configuration;
using CoreLayer.DTOs;
using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface ITokenService
    {
        TokenDto CreateToken(AppUser user);
        ClientTokenDto CreateTokenByClient(Client client);

    }
}
