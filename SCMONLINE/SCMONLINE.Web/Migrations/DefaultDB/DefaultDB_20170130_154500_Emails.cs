using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FluentMigrator;


namespace SCMONLINE.Migrations.DefaultDB
{
    [Migration(20170130154500)]
    public class DefaultDB_20170130_154500_Emails : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("EmailAccounts", "Id", s => s
                .WithColumn("Email").AsString(255).NotNullable()
                .WithColumn("DisplayName").AsString(255).NotNullable()
                .WithColumn("Host").AsString(255).NotNullable()
                .WithColumn("Port").AsInt32().NotNullable()
                .WithColumn("Username").AsString(255).NotNullable()
                .WithColumn("Password").AsString(255).NotNullable()
                .WithColumn("EnableSsl").AsBoolean().NotNullable()
                .WithColumn("UseDefaultCredentials").AsBoolean().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("QueuedEmail", "Id", s => s
                .WithColumn("PriorityId").AsInt32().NotNullable()
                .WithColumn("From").AsString(500).NotNullable()
                .WithColumn("FromName").AsString(500).Nullable()
                .WithColumn("To").AsString(500).NotNullable()
                .WithColumn("ToName").AsString(500).Nullable()
                .WithColumn("ReplyTo").AsString(500).Nullable()
                .WithColumn("ReplyToName").AsString(500).Nullable()
                .WithColumn("CC").AsString(500).Nullable()
                .WithColumn("Bcc").AsString(500).Nullable()
                .WithColumn("Subject").AsString(1000).Nullable()
                .WithColumn("Body").AsString(int.MaxValue).Nullable()
                .WithColumn("AttachmentFilePath").AsString(1000).Nullable()
                .WithColumn("AttachmentFileName").AsString(1000).Nullable()
                .WithColumn("AttachedDownloadId").AsInt32().Nullable()
                .WithColumn("CreatedOnUtc").AsDateTime().NotNullable()
                .WithColumn("SentTries").AsInt32().Nullable()
                .WithColumn("SentOnUtc").AsDateTime().Nullable()
                .WithColumn("EmailAccountId").AsInt32().NotNullable()
                 .ForeignKey("FK_QueuedEmail_EmailAccountId", "EmailAccounts", "Id")
                .WithColumn("DontSendBeforeDateUtc").AsDateTime().Nullable()
                .WithColumn("HasError").AsBoolean().Nullable()
                .WithColumn("Result").AsString(1000).Nullable());
        }
    }
}