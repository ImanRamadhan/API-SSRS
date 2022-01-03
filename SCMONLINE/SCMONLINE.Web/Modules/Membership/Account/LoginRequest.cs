
namespace SCMONLINE.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Please Enter For Username...")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Please Enter For Password..."), Required(true)]
        public string Password { get; set; }
    }
}