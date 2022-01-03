
namespace _Ext.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using _Ext.Entities;
    using Serenity.Reporting;

    [ColumnsScript("_Ext.AuditLog")]
    [BasedOnRow(typeof(Entities.AuditLogRow))]
    public class AuditLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int64 Id { get; set; }
        public String EntityTableName { get; set; }
        [EditLink]
        public Int32 VersionNo { get; set; }
        // [Width(200, Min = 150)]
        [Hidden]
        public String UserId { get; set; }
        public String Username { get; set; }
        public AuditActionType ActionType { get; set; }
        public DateTime ActionDate { get; set; }
        //[RoleListFormatter, CellDecorator(typeof(RoleListDecorator))]
        //[CellDecorator(typeof(RoleListDecorator))]
        public String Roles { get; set; }
        [Hidden]
        public Int32 TotalCount { get; set; }
        public Int32 EntityId { get; set; }
        public String IpAddress { get; set; }
    }
}