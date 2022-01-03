
namespace SCMONLINE.Workflow.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Workflow"), TableName("[dbo].[NextState]")]
    [DisplayName("Next State"), InstanceName("Next State")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NextStateRow : Row, IIdRow, INameRow
    {

        [DisplayName("Request Id"), Column("RequestID"), NotNull]
        public Int32? RequestId
        {
            get { return Fields.RequestId[this]; }
            set { Fields.RequestId[this] = value; }
        }

        [DisplayName("Action Type Id"), Column("ActionTypeID")]
        public Int32? ActionTypeId
        {
            get { return Fields.ActionTypeId[this]; }
            set { Fields.ActionTypeId[this] = value; }
        }

        [DisplayName("Current State Id"), Column("CurrentStateID")]
        public Int32? CurrentStateId
        {
            get { return Fields.CurrentStateId[this]; }
            set { Fields.CurrentStateId[this] = value; }
        }

        [DisplayName("ProcMethod ID"), Column("ProcMethodID")]
        public Int32? ProcMethodId
        {
            get { return Fields.ProcMethodId[this]; }
            set { Fields.ProcMethodId[this] = value; }
        }

        [DisplayName("Next State Id"), Column("NextStateID")]
        public Int32? NextStateId
        {
            get { return Fields.NextStateId[this]; }
            set { Fields.NextStateId[this] = value; }
        }

        [DisplayName("Next State"), Size(100), QuickSearch]
        public String NextState
        {
            get { return Fields.NextState[this]; }
            set { Fields.NextState[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.RequestId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NextState; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NextStateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field RequestId;

            public Int32Field ActionTypeId;

            public Int32Field ProcMethodId;

            public Int32Field CurrentStateId;

            public Int32Field NextStateId;

            public StringField NextState;


		}
    }
}
