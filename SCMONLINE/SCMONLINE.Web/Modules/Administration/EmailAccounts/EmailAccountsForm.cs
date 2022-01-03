
namespace SCMONLINE.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.EmailAccounts")]
    [BasedOnRow(typeof(Entities.EmailAccountsRow), CheckNames = true)]
    public class EmailAccountsForm
    {
        public String Email { get; set; }
        public String DisplayName { get; set; }
        public String Host { get; set; }
        public Int32 Port { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public Boolean EnableSsl { get; set; }
        public Boolean UseDefaultCredentials { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int16 IsActive { get; set; }
    }
}