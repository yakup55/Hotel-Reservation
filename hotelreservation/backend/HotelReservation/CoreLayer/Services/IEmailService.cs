using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Services
{
    public interface IEmailService
    {
        Task SendResetPasswordEmail(string resetEmailLink, string to);
        Task SendEmailConfirm(string emailComfirmLink, string to);
    }
}
