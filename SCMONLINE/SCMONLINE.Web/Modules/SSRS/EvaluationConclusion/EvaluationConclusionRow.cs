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

    [ConnectionKey("Default"), TableName("[dbo].[EvaluationConclusion]")]
    [DisplayName("Evaluation Conclusion"), InstanceName("Evaluation Conclusion"), TwoLevelCached]
    [ReadPermission("Procurement:EvaluationConclusion:Read")]
    [InsertPermission("Procurement:EvaluationConclusion:Insert")]
    [UpdatePermission("Procurement:EvaluationConclusion:Update")]
    [DeletePermission("Procurement:EvaluationConclusion:Delete")]
    [LookupScript]
    public sealed class EvaluationConclusionRow : Row, IIdRow, INameRow
    {

        [DisplayName("Evaluation Conclusion Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? EvaluationConclusionId { get { return Fields.EvaluationConclusionId[this]; } set { Fields.EvaluationConclusionId[this] = value; } }
		public partial class RowFields { public Int32Field EvaluationConclusionId; }

        [DisplayName("Name")]
        [EditLink,QuickSearch] 
 public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink,QuickSearch] 
 public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.EvaluationConclusionId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public EvaluationConclusionRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
