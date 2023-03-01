using CoreLayer.Services;
using Microsoft.Extensions.Options;
using SharedLibray.OptionModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            this.emailSettings = emailSettings.Value;
        }

        public async Task SendEmailConfirm(string emailComfirmLink, string to)
        {
            var smtpClient = new SmtpClient();
            smtpClient.Host = emailSettings.Host;
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Port = 587;
            smtpClient.Credentials = new NetworkCredential(emailSettings.Email, emailSettings.Password);
            smtpClient.EnableSsl = true;
            var mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(emailSettings.Email);
            mailMessage.To.Add(to);
            mailMessage.Subject = "Email Doğrulama Linki";
            mailMessage.Body = @$"<h4>Emailinizi Doğrulamak İçin Aşağıdaki Linke Tıklayınız</h4><p><a href=`{emailComfirmLink}`>Tıkla<a/></p>";
            mailMessage.IsBodyHtml = true;
            await smtpClient.SendMailAsync(mailMessage);
        }

        public async Task SendResetPasswordEmail(string resetEmailLink, string to)
        {
            var smtpClient = new SmtpClient();
            smtpClient.Host = emailSettings.Host;
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Port = 587;
            smtpClient.Credentials = new NetworkCredential(emailSettings.Email, emailSettings.Password);
            smtpClient.EnableSsl = true;
            var mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(emailSettings.Email);
            mailMessage.To.Add(to);
            mailMessage.Subject = "Şifre yenileme linki";
            mailMessage.Body = @$"<h4>Şifre yenilemek için linke tıkla</h4> <p><a href=`{resetEmailLink}`>Şifre yenileme linki</a></p>";
            mailMessage.IsBodyHtml = true;
            await smtpClient.SendMailAsync(mailMessage);
        }
    }
}
