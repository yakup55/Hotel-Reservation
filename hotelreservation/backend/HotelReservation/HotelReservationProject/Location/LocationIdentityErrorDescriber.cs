using Microsoft.AspNetCore.Identity;

namespace HotelReservationProject.Location
{
    public class LocationIdentityErrorDescriber:IdentityErrorDescriber
    {
        public override IdentityError DuplicateUserName(string userName)
        {
            return new IdentityError
            {
                Code = "DuplicateUserName",
                Description = $"Bu ${userName} Daha önce Kullanılmış"
            };
        }
        public override IdentityError DuplicateEmail(string email)
        {
            return new IdentityError
            {
                Code = "DuplicateEmail",
                Description = $"Bu ${email} Daha önce Kullanılmış"
            };
        }
    }
}
