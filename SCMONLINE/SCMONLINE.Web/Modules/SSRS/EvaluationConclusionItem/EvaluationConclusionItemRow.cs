namespace SCMONLINE.Procurement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[EvaluationConclusionItem]")]
    [DisplayName("Evaluation Conclusion Item"), InstanceName("Evaluation Conclusion Item"), TwoLevelCached]
    [ReadPermission("Procurement:EvaluationConclusionItem:Read")]
    [InsertPermission("Procurement:EvaluationConclusionItem:Insert")]
    [UpdatePermission("Procurement:EvaluationConclusionItem:Update")]
    [DeletePermission("Procurement:EvaluationConclusionItem:Delete")]
    [LookupScript]
    public sealed class EvaluationConclusionItemRow : Row, IIdRow, INameRow
    {

        [DisplayName("Evaluation Conclusion Item Id"), Identity]
        [EditLink, QuickSearch]
        [MinSelectLevel(SelectLevel.List), LookupInclude]
        public Int32? EvaluationConclusionItemId { get { return Fields.EvaluationConclusionItemId[this]; } set { Fields.EvaluationConclusionItemId[this] = value; } }
        public partial class RowFields { public Int32Field EvaluationConclusionItemId; }

        [DisplayName("Name")]
        [EditLink, QuickSearch]
        [MinSelectLevel(SelectLevel.List), LookupInclude]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink, QuickSearch]
        [MinSelectLevel(SelectLevel.List), LookupInclude]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.EvaluationConclusionItemId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationConclusionItemRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
