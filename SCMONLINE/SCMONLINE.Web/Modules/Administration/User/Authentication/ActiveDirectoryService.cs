using SCMONLINE.Modules;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.DirectoryServices.AccountManagement;
using System.DirectoryServices.ActiveDirectory;

namespace SCMONLINE.Administration
{
    public class ActiveDirectoryService : IDirectoryService
    {
        public DirectoryEntry Validate(string username, string password)
        {
            var config = Config.Get<Settings>();

            try
            {
               
                //using (var context = new PrincipalContext(ContextType.Domain, config.Domain))
                using (var context = new PrincipalContext(ContextType.Domain, "pertamina.com", "DC=pertamina,DC=com", username, password))
                {
                    bool isValid;
                    try
                    {
                        isValid = context.ValidateCredentials(username, password, ContextOptions.Negotiate);
                    }
                    catch (Exception ex)
                    {
                        Log.Error("Error authenticating user", ex, this.GetType());
                        return null;
                    }

                    if (!isValid)
                        return null;

                    var identity = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName, username);
                   
                    var description = identity.Description;
                    string costCenter = null;
                    if (description != null && !description.Contains("PWT") && !description.Contains("Mitra"))
                    {
                        costCenter = identity.GetDepartment().Split('/')[0].TrimToNull();
                    }

                    return new DirectoryEntry
                    {
                        Username = identity.SamAccountName,
                        Email = identity.EmailAddress.TrimToNull(),
                        FirstName = identity.GivenName,
                        LastName = identity.Surname,
                        CostCenter = costCenter
                    };
                }
            }
            catch (ActiveDirectoryOperationException e)
            {
                throw;
            }
            catch (Exception e)
            {
                throw;
            }

        }

        [Hidden, SettingScope("Application"), SettingKey("ActiveDirectory")]
        private class Settings
        {
            public string Domain { get; set; }
        }
    }
}