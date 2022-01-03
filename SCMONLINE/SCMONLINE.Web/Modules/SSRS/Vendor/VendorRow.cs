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
    using SCMONLINE.Administration.Entities;

    [ConnectionKey("Default"), TableName("[dbo].[Vendor]")]
    [DisplayName("Vendor"), InstanceName("Vendor"), TwoLevelCached]
    [ReadPermission("Procurement:Vendor:Read")]
    [InsertPermission("Procurement:Vendor:Insert")]
    [UpdatePermission("Procurement:Vendor:Update")]
    [DeletePermission("Procurement:Vendor:Delete")]
    [LookupScript]
    public sealed class VendorRow : Row, IIdRow, INameRow
    {

        [DisplayName("Vendor Id"), Size(50), PrimaryKey]
        [EditLink, QuickSearch]
        public String VendorId { get { return Fields.VendorId[this]; } set { Fields.VendorId[this] = value; } }
        public partial class RowFields { public StringField VendorId; }

        [DisplayName("Name"), LookupInclude]
        [EditLink, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink, QuickSearch]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }

        [DisplayName("Penalty Code")]
        [EditLink, QuickSearch]
        [LookupInclude]
        public String PenaltyCode { get { return Fields.PenaltyCode[this]; } set { Fields.PenaltyCode[this] = value; } }
        public partial class RowFields { public StringField PenaltyCode; }

        [DisplayName("Vendor"), Size(10), QuickSearch]
        public String Vendor { get { return Fields.Vendor[this]; } set { Fields.Vendor[this] = value; } }
        public partial class RowFields { public StringField Vendor; }

        [DisplayName("Country"), Size(3)]
        public String Country { get { return Fields.Country[this]; } set { Fields.Country[this] = value; } }
        public partial class RowFields { public StringField Country; }

        [DisplayName("Name2"), Size(35)]
        public String Name2 { get { return Fields.Name2[this]; } set { Fields.Name2[this] = value; } }
        public partial class RowFields { public StringField Name2; }

        [DisplayName("Name3"), Size(35)]
        public String Name3 { get { return Fields.Name3[this]; } set { Fields.Name3[this] = value; } }
        public partial class RowFields { public StringField Name3; }

        [DisplayName("Name4"), Size(35)]
        public String Name4 { get { return Fields.Name4[this]; } set { Fields.Name4[this] = value; } }
        public partial class RowFields { public StringField Name4; }

        [DisplayName("City"), Size(35)]
        public String City { get { return Fields.City[this]; } set { Fields.City[this] = value; } }
        public partial class RowFields { public StringField City; }

        [DisplayName("District"), Size(35)]
        public String District { get { return Fields.District[this]; } set { Fields.District[this] = value; } }
        public partial class RowFields { public StringField District; }

        [DisplayName("Po Box"), Size(10)]
        public String PoBox { get { return Fields.PoBox[this]; } set { Fields.PoBox[this] = value; } }
        public partial class RowFields { public StringField PoBox; }

        [DisplayName("Po Box Pcode"), Size(10)]
        public String PoBoxPcode { get { return Fields.PoBoxPcode[this]; } set { Fields.PoBoxPcode[this] = value; } }
        public partial class RowFields { public StringField PoBoxPcode; }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode { get { return Fields.PostalCode[this]; } set { Fields.PostalCode[this] = value; } }
        public partial class RowFields { public StringField PostalCode; }

        [DisplayName("Region"), Size(3)]
        public String Region { get { return Fields.Region[this]; } set { Fields.Region[this] = value; } }
        public partial class RowFields { public StringField Region; }

        [DisplayName("Search Term"), Size(10)]
        public String SearchTerm { get { return Fields.SearchTerm[this]; } set { Fields.SearchTerm[this] = value; } }
        public partial class RowFields { public StringField SearchTerm; }

        [DisplayName("Street"), Size(35)]
        public String Street { get { return Fields.Street[this]; } set { Fields.Street[this] = value; } }
        public partial class RowFields { public StringField Street; }

        [DisplayName("Address"), Size(10)]
        public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
        public partial class RowFields { public StringField Address; }

        [DisplayName("Title"), Size(15)]
        public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
        public partial class RowFields { public StringField Title; }

        [DisplayName("Train Station"), Size(25)]
        public String TrainStation { get { return Fields.TrainStation[this]; } set { Fields.TrainStation[this] = value; } }
        public partial class RowFields { public StringField TrainStation; }

        [DisplayName("Location No1")]
        public Int32? LocationNo1 { get { return Fields.LocationNo1[this]; } set { Fields.LocationNo1[this] = value; } }
        public partial class RowFields { public Int32Field LocationNo1; }

        [DisplayName("Location No2")]
        public Int32? LocationNo2 { get { return Fields.LocationNo2[this]; } set { Fields.LocationNo2[this] = value; } }
        public partial class RowFields { public Int32Field LocationNo2; }

        [DisplayName("Authorization"), Size(4)]
        public String Authorization { get { return Fields.Authorization[this]; } set { Fields.Authorization[this] = value; } }
        public partial class RowFields { public StringField Authorization; }

        [DisplayName("Industry"), Size(4)]
        public String Industry { get { return Fields.Industry[this]; } set { Fields.Industry[this] = value; } }
        public partial class RowFields { public StringField Industry; }

        [DisplayName("Check Digit")]
        public Int32? CheckDigit { get { return Fields.CheckDigit[this]; } set { Fields.CheckDigit[this] = value; } }
        public partial class RowFields { public Int32Field CheckDigit; }

        [DisplayName("Data Line"), Size(14)]
        public String DataLine { get { return Fields.DataLine[this]; } set { Fields.DataLine[this] = value; } }
        public partial class RowFields { public StringField DataLine; }

        [DisplayName("Dme Indicator"), Size(1)]
        public String DmeIndicator { get { return Fields.DmeIndicator[this]; } set { Fields.DmeIndicator[this] = value; } }
        public partial class RowFields { public StringField DmeIndicator; }

        [DisplayName("Instruction Key"), Size(2)]
        public String InstructionKey { get { return Fields.InstructionKey[this]; } set { Fields.InstructionKey[this] = value; } }
        public partial class RowFields { public StringField InstructionKey; }

        [DisplayName("Created On")]
        public DateTime? CreatedOn { get { return Fields.CreatedOn[this]; } set { Fields.CreatedOn[this] = value; } }
        public partial class RowFields { public DateTimeField CreatedOn; }

        [DisplayName("Qualification"), Size(10)]
        [LookupInclude]
        public String Qualification { get { return Fields.Qualification[this]; } set { Fields.Qualification[this] = value; } }
        public partial class RowFields { public StringField Qualification; }

        

        //[DisplayName("Vendor Representative"), MasterDetailRelation(foreignKey: "VendorId"), NotMapped]
        [LookupEditor(typeof(UserRow), Multiple = true, InplaceAdd = true), NotMapped]
        [LinkingSetRelation(typeof(VendorRepresentativeRow), "VendorId", "UserId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> VendorRepresentative
        {
            get { return Fields.VendorRepresentative[this]; }
            set { Fields.VendorRepresentative[this] = value; }
        }
        public partial class RowFields { public ListField<Int32> VendorRepresentative; }


        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.VendorId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public VendorRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
