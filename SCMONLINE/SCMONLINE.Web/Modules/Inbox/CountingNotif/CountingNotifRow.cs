namespace SCMONLINE.Inbox.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
	using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[CountingNotif]")]
    [DisplayName("Counting Notif"), InstanceName("Counting Notif"), TwoLevelCached]
    [ReadPermission("Inbox:CountingNotif:Read")]
    [InsertPermission("Inbox:CountingNotif:Insert")]
    [UpdatePermission("Inbox:CountingNotif:Update")]
    [DeletePermission("Inbox:CountingNotif:Delete")]
    public sealed class CountingNotifRow : Row, IIdRow
    {

        [DisplayName("Notif Count")]
        public Int32? NotifCount { get { return Fields.NotifCount[this]; } set { Fields.NotifCount[this] = value; } }
		public partial class RowFields { public Int32Field NotifCount; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.NotifCount; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CountingNotifRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
