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
    using _Ext;

    [ConnectionKey("Default"), TableName("[dbo].[Procurement]")]
    [DisplayName("Procurement"), InstanceName("Procurement"), TwoLevelCached]
    [ReadPermission("Procurement:Procurement:Read")]
    [InsertPermission("Procurement:Procurement:Insert")]
    [UpdatePermission("Procurement:Procurement:Update")]
    [DeletePermission("Procurement:Procurement:Delete")]
    [LookupScript]
    public sealed class ProcurementRow : Row, IIdRow, INameRow, IAuditLog
    {
        [DisplayName("Procurement Id"), Identity]

        [EditLink, QuickSearch]
        public Int64? ProcurementId { get { return Fields.ProcurementId[this]; } set { Fields.ProcurementId[this] = value; } }
        public partial class RowFields { public Int64Field ProcurementId; }

        [DisplayName("Procurement Type"), Size(1), ForeignKey("[dbo].[ProcurementType]", "ProcurementTypeId"), LeftJoin("jProcurementType"), TextualField("ProcurementTypeName")]
        [LookupEditor(typeof(ProcurementTypeRow))]

        [EditLink, QuickSearch]
        public String ProcurementTypeId { get { return Fields.ProcurementTypeId[this]; } set { Fields.ProcurementTypeId[this] = value; } }
        public partial class RowFields { public StringField ProcurementTypeId; }

        [DisplayName("Status"), Size(50), ForeignKey("[dbo].[ProcStatus]", "ProcStatusId"), LeftJoin("jStatus"), TextualField("StatusName")]
        [LookupEditor(typeof(ProcStatusRow))]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
        public partial class RowFields { public StringField Status; }

        [DisplayName("Collective Number")]
        [Size(10)]
        [LookupInclude]

        [EditLink, QuickSearch]
        public String CollectiveNumber { get { return Fields.CollectiveNumber[this]; } set { Fields.CollectiveNumber[this] = value; } }
        public partial class RowFields { public StringField CollectiveNumber; }

        [DisplayName("Judul Pekerjaan")]
        [LookupInclude]

        [EditLink, QuickSearch]
        public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
        public partial class RowFields { public StringField Title; }

        [DisplayName("Klasifikasi / Sub Bidang"), ForeignKey("[dbo].[ProcurementClassification]", "ClassificationCode"), LeftJoin("jClassification")]

        [EditLink, QuickSearch]
        public String Classification { get { return Fields.Classification[this]; } set { Fields.Classification[this] = value; } }
        public partial class RowFields { public StringField Classification; }

        [DisplayName("Kualifikasi")]


        [EditLink, QuickSearch]
        public String Qualification { get { return Fields.Qualification[this]; } set { Fields.Qualification[this] = value; } }
        public partial class RowFields { public StringField Qualification; }

        [DisplayName("Requested By")]


        [EditLink, QuickSearch]
        public String RequestedBy { get { return Fields.RequestedBy[this]; } set { Fields.RequestedBy[this] = value; } }
        public partial class RowFields { public StringField RequestedBy; }

        [DisplayName("Posisi Requestor")]


        [EditLink, QuickSearch]
        public String RequestorPosition { get { return Fields.RequestorPosition[this]; } set { Fields.RequestorPosition[this] = value; } }
        public partial class RowFields { public StringField RequestorPosition; }

        [DisplayName("Approved Oleh")]


        [EditLink, QuickSearch]
        public String ApprovedBy { get { return Fields.ApprovedBy[this]; } set { Fields.ApprovedBy[this] = value; } }
        public partial class RowFields { public StringField ApprovedBy; }

        [DisplayName("Posisi Approver")]


        [EditLink, QuickSearch]
        public String ApproverPosition { get { return Fields.ApproverPosition[this]; } set { Fields.ApproverPosition[this] = value; } }
        public partial class RowFields { public StringField ApproverPosition; }

        [DisplayName("Sap Bidder List Created By"), Column("SAPBidderListCreatedBy")]
        [EditLink, QuickSearch]
        public String SapBidderListCreatedBy { get { return Fields.SapBidderListCreatedBy[this]; } set { Fields.SapBidderListCreatedBy[this] = value; } }
        public partial class RowFields { public StringField SapBidderListCreatedBy; }

        [DisplayName("Sap Bidder List Created Date"), Column("SAPBidderListCreatedDate")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? SapBidderListCreatedDate { get { return Fields.SapBidderListCreatedDate[this]; } set { Fields.SapBidderListCreatedDate[this] = value; } }
        public partial class RowFields { public DateTimeField SapBidderListCreatedDate; }

        [DisplayName("Procurement Created By")]

        [EditLink, QuickSearch]
        public String CreatedBy { get { return Fields.CreatedBy[this]; } set { Fields.CreatedBy[this] = value; } }
        public partial class RowFields { public StringField CreatedBy; }

        [DisplayName("Procurement Created Date")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
        public partial class RowFields { public DateTimeField CreatedDate; }

        [DisplayName("Persentase Jaminan Pelaksanaan"), Size(19), Scale(0)]

        public Decimal? GuaranteePercentage { get { return Fields.GuaranteePercentage[this]; } set { Fields.GuaranteePercentage[this] = value; } }
        public partial class RowFields { public DecimalField GuaranteePercentage; }

        [DisplayName("Alamat Kantor"), ForeignKey("[dbo].[Address]", "AddressId"), LeftJoin("jOfficeAddress"), TextualField("OfficeAddressName")]
        [LookupEditor(typeof(AddressRow), InplaceAdd = true)]


        [EditLink, QuickSearch]
        public Int32? OfficeAddress { get { return Fields.OfficeAddress[this]; } set { Fields.OfficeAddress[this] = value; } }
        public partial class RowFields { public Int32Field OfficeAddress; }

        [DisplayName("Nilai Pengadaaan"), ForeignKey("[dbo].[ProcValueRange]", "ProcValueRangeId"), LeftJoin("jProcValueRange"), TextualField("ProcValueRangeName")]
        [LookupEditor(typeof(ProcValueRangeRow))]


        [EditLink, QuickSearch]
        public Int32? ProcValueRangeId { get { return Fields.ProcValueRangeId[this]; } set { Fields.ProcValueRangeId[this] = value; } }
        public partial class RowFields { public Int32Field ProcValueRangeId; }

        [DisplayName("Tipe Panitia"), ForeignKey("[dbo].[CommitteeType]", "CommitteeTypeId"), LeftJoin("jCommitteeType"), TextualField("CommitteeTypeName")]
        [LookupEditor(typeof(CommitteeTypeRow))]


        [EditLink, QuickSearch]
        public Int32? CommitteeTypeId { get { return Fields.CommitteeTypeId[this]; } set { Fields.CommitteeTypeId[this] = value; } }
        public partial class RowFields { public Int32Field CommitteeTypeId; }

        [DisplayName("Jaminan Pelaksanaan")]
        [EditLink, QuickSearch]
        [YaTidakEditor]
        public Boolean? PerformanceGuaranteeRequired { get { return Fields.PerformanceGuaranteeRequired[this]; } set { Fields.PerformanceGuaranteeRequired[this] = value; } }
        public partial class RowFields { public BooleanField PerformanceGuaranteeRequired; }

        [DisplayName("Masa Berlaku Penawaran (Hari)")]
        [EditLink, QuickSearch]
        public Int32? TenderPeriod { get { return Fields.TenderPeriod[this]; } set { Fields.TenderPeriod[this] = value; } }
        public partial class RowFields { public Int32Field TenderPeriod; }

        [DisplayName("Delivery Time (Day(s))")]


        [EditLink, QuickSearch]
        public Int32? DeliveryTime { get { return Fields.DeliveryTime[this]; } set { Fields.DeliveryTime[this] = value; } }
        public partial class RowFields { public Int32Field DeliveryTime; }

        [DisplayName("Destination"), ForeignKey("[dbo].[Address]", "AddressId"), LeftJoin("jDestination"), TextualField("DestinationName")]
        [LookupEditor(typeof(AddressRow), InplaceAdd = true)]


        [EditLink, QuickSearch]
        public Int32? DestinationId { get { return Fields.DestinationId[this]; } set { Fields.DestinationId[this] = value; } }
        public partial class RowFields { public Int32Field DestinationId; }

        [DisplayName("Tipe Penawaran"), ForeignKey("[dbo].[ContractType]", "ContractTypeId"), LeftJoin("jContractType"), TextualField("ContractTypeName")]
        [LookupEditor(typeof(ContractTypeRow))]


        [EditLink, QuickSearch]
        public Int32? ContractTypeId { get { return Fields.ContractTypeId[this]; } set { Fields.ContractTypeId[this] = value; } }
        public partial class RowFields { public Int32Field ContractTypeId; }

        [DisplayName("Currency"), Size(3), ForeignKey("[dbo].[Currency]", "CurrencyId"), LeftJoin("jCurrency"), TextualField("CurrencyName")]
        [LookupEditor(typeof(CurrencyRow))]


        [EditLink, QuickSearch]
        public String CurrencyId { get { return Fields.CurrencyId[this]; } set { Fields.CurrencyId[this] = value; } }
        public partial class RowFields { public StringField CurrencyId; }

        [DisplayName("Metode Pemasukan Dokumen"), ForeignKey("[dbo].[DocSubmitMethod]", "DocSubmitMethodId"), LeftJoin("jDocSubmitMethod"), TextualField("DocSubmitMethodName")]
        [LookupEditor(typeof(DocSubmitMethodRow))]


        [EditLink, QuickSearch]
        public Int32? DocSubmitMethodId { get { return Fields.DocSubmitMethodId[this]; } set { Fields.DocSubmitMethodId[this] = value; } }
        public partial class RowFields { public Int32Field DocSubmitMethodId; }

        [DisplayName("Penjelasan Pekerjaan (Aanwijzing)")]


        [EditLink, QuickSearch]
        public Boolean? AanwijzingExists { get { return Fields.AanwijzingExists[this]; } set { Fields.AanwijzingExists[this] = value; } }
        public partial class RowFields { public BooleanField AanwijzingExists; }

        [DisplayName("Tanggal Penjelasan Pekerjaan(Aanwijzing)")]


        [EditLink, QuickSearch]
        public DateTime? AanwijzingDate { get { return Fields.AanwijzingDate[this]; } set { Fields.AanwijzingDate[this] = value; } }
        public partial class RowFields { public DateTimeField AanwijzingDate; }

        [DisplayName("Aanwijzing Closing Date")]

        [EditLink, QuickSearch]
        public DateTime? AanwijzingClosingDate { get { return Fields.AanwijzingClosingDate[this]; } set { Fields.AanwijzingClosingDate[this] = value; } }
        public partial class RowFields { public DateTimeField AanwijzingClosingDate; }

        [DisplayName("Tempat Aanwijzing")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String AanwijzingLocation { get { return Fields.AanwijzingLocation[this]; } set { Fields.AanwijzingLocation[this] = value; } }
        public partial class RowFields { public StringField AanwijzingLocation; }

        [DisplayName("Tempat Closing Aanwijzing")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String AanwijzingClosingLocation { get { return Fields.AanwijzingClosingLocation[this]; } set { Fields.AanwijzingClosingLocation[this] = value; } }
        public partial class RowFields { public StringField AanwijzingClosingLocation; }

        [DisplayName("Sekretaris Panitia Lelang ")]

        [EditLink, QuickSearch]
        public String AanwijzingSecretary { get { return Fields.AanwijzingSecretary[this]; } set { Fields.AanwijzingSecretary[this] = value; } }
        public partial class RowFields { public StringField AanwijzingSecretary; }

        [DisplayName("Penjelasan Administrasi")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String AdministrativeExplanation { get { return Fields.AdministrativeExplanation[this]; } set { Fields.AdministrativeExplanation[this] = value; } }
        public partial class RowFields { public StringField AdministrativeExplanation; }

        [DisplayName("Penjelasan Teknik")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String TechnicalExplanation { get { return Fields.TechnicalExplanation[this]; } set { Fields.TechnicalExplanation[this] = value; } }
        public partial class RowFields { public StringField TechnicalExplanation; }

        [DisplayName("Penjelasan Lain-Lain")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String OtherExplanation { get { return Fields.OtherExplanation[this]; } set { Fields.OtherExplanation[this] = value; } }
        public partial class RowFields { public StringField OtherExplanation; }

        [DisplayName("Aanwijzing Summary")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String AanwijzingSummary { get { return Fields.AanwijzingSummary[this]; } set { Fields.AanwijzingSummary[this] = value; } }
        public partial class RowFields { public StringField AanwijzingSummary; }

        [DisplayName("Field Survey Exists")]
        //[AdaTidakAdaEditor]
        //[EnumEditor]
        [EditLink, QuickSearch]
        public AdaTidakAda? FieldSurveyExists { get { return (AdaTidakAda?) Fields.FieldSurveyExists[this]; } set { Fields.FieldSurveyExists[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field FieldSurveyExists; }

        [DisplayName("Field Survey Address")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String FieldSurveyAddress { get { return Fields.FieldSurveyAddress[this]; } set { Fields.FieldSurveyAddress[this] = value; } }
        public partial class RowFields { public StringField FieldSurveyAddress; }

        [DisplayName("Itb Document File"), Column("ITBDocumentFile")]
        [FileUploadEditor(FilenameFormat = "ITB/{1:0000}/{0:00000000}_{2}_{4}", CopyToHistory = true, OriginalNameProperty = "ItbDocumentName", DisplayFileName = true)]


        [EditLink, QuickSearch]
        public String ItbDocumentFile { get { return Fields.ItbDocumentFile[this]; } set { Fields.ItbDocumentFile[this] = value; } }
        public partial class RowFields { public StringField ItbDocumentFile; }

        [DisplayName("Itb Document Name"), Column("ITBDocumentName")]
        [Hidden]

        [EditLink, QuickSearch]
        public String ItbDocumentName { get { return Fields.ItbDocumentName[this]; } set { Fields.ItbDocumentName[this] = value; } }
        public partial class RowFields { public StringField ItbDocumentName; }

        [DisplayName("Rks Document File"), Column("RKSDocumentFile")]
        [FileUploadEditor(FilenameFormat = "RKS/{1:0000}/{0:00000000}_{2}_{4}", CopyToHistory = true, OriginalNameProperty = "RKSDocumentName", DisplayFileName = true)]

        [EditLink, QuickSearch]
        public String RksDocumentFile { get { return Fields.RksDocumentFile[this]; } set { Fields.RksDocumentFile[this] = value; } }
        public partial class RowFields { public StringField RksDocumentFile; }

        [DisplayName("Rks Document Name"), Column("RKSDocumentName")]
        [Hidden]

        [EditLink, QuickSearch]
        public String RksDocumentName { get { return Fields.RksDocumentName[this]; } set { Fields.RksDocumentName[this] = value; } }
        public partial class RowFields { public StringField RksDocumentName; }

        [DisplayName("Tanggal Dokumen Pembukaan Penawaran")]
        [DateTimeEditor]

        [EditLink, QuickSearch]
        public DateTime? TenderDocSubmitOpenDate { get { return Fields.TenderDocSubmitOpenDate[this]; } set { Fields.TenderDocSubmitOpenDate[this] = value; } }
        public partial class RowFields { public DateTimeField TenderDocSubmitOpenDate; }

        [DisplayName("Tanggal Dokumen Penutupan Penarawan")]
        [DateTimeEditor]

        [EditLink, QuickSearch]
        public DateTime? TenderDocSubmitCloseDate { get { return Fields.TenderDocSubmitCloseDate[this]; } set { Fields.TenderDocSubmitCloseDate[this] = value; } }
        public partial class RowFields { public DateTimeField TenderDocSubmitCloseDate; }

        [DisplayName("RFQ Type"), Size(4), ForeignKey("[dbo].[OrderType]", "OrderTypeId"), LeftJoin("jOrderType"), TextualField("OrderTypeName")]
        [LookupEditor(typeof(OrderTypeRow))]

        [EditLink, QuickSearch]
        public String OrderTypeId { get { return Fields.OrderTypeId[this]; } set { Fields.OrderTypeId[this] = value; } }
        public partial class RowFields { public StringField OrderTypeId; }

        [DisplayName("Purch Doc Num / RFQ Number"), Size(10)]

        [EditLink, QuickSearch]
        public String PurchDocNum { get { return Fields.PurchDocNum[this]; } set { Fields.PurchDocNum[this] = value; } }
        public partial class RowFields { public StringField PurchDocNum; }

        [DisplayName("Rfq Date"), Column("RFQDate")]
        [DateTimeEditor]

        [EditLink, QuickSearch]
        public DateTime? RfqDate { get { return Fields.RfqDate[this]; } set { Fields.RfqDate[this] = value; } }
        public partial class RowFields { public DateTimeField RfqDate; }

        [DisplayName("Quotation Deadline")]
        [DateTimeEditor]

        [EditLink, QuickSearch]
        public DateTime? QuotationDeadline { get { return Fields.QuotationDeadline[this]; } set { Fields.QuotationDeadline[this] = value; } }
        public partial class RowFields { public DateTimeField QuotationDeadline; }

        [DisplayName("Purch Group")]

        [EditLink, QuickSearch]
        public String PurchGroup { get { return Fields.PurchGroup[this]; } set { Fields.PurchGroup[this] = value; } }
        public partial class RowFields { public StringField PurchGroup; }

        [DisplayName("PR Number"), Column("PRNo")]

        [EditLink, QuickSearch]
        public String PrNo { get { return Fields.PrNo[this]; } set { Fields.PrNo[this] = value; } }
        public partial class RowFields { public StringField PrNo; }

        [DisplayName("Auth Person Name")]

        [EditLink, QuickSearch]
        public String AuthPersonName { get { return Fields.AuthPersonName[this]; } set { Fields.AuthPersonName[this] = value; } }
        public partial class RowFields { public StringField AuthPersonName; }

        [DisplayName("Auth Position")]

        [EditLink, QuickSearch]
        public String AuthPosition { get { return Fields.AuthPosition[this]; } set { Fields.AuthPosition[this] = value; } }
        public partial class RowFields { public StringField AuthPosition; }

        [DisplayName("Header Text")]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String HeaderText { get { return Fields.HeaderText[this]; } set { Fields.HeaderText[this] = value; } }
        public partial class RowFields { public StringField HeaderText; }

        [DisplayName("Header Note")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String HeaderNote { get { return Fields.HeaderNote[this]; } set { Fields.HeaderNote[this] = value; } }
        public partial class RowFields { public StringField HeaderNote; }

        [DisplayName("Work Description")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String WorkDescription { get { return Fields.WorkDescription[this]; } set { Fields.WorkDescription[this] = value; } }
        public partial class RowFields { public StringField WorkDescription; }

        [DisplayName("Bank Key")]

        [EditLink, QuickSearch]
        public String BankKey { get { return Fields.BankKey[this]; } set { Fields.BankKey[this] = value; } }
        public partial class RowFields { public StringField BankKey; }

        [DisplayName("Po Cover"), Column("POCover")]

        [EditLink, QuickSearch]
        public String PoCover { get { return Fields.PoCover[this]; } set { Fields.PoCover[this] = value; } }
        public partial class RowFields { public StringField PoCover; }

        [DisplayName("Delivery Address")]
        [TextAreaEditor]

        [EditLink, QuickSearch]
        public String DeliveryAddress { get { return Fields.DeliveryAddress[this]; } set { Fields.DeliveryAddress[this] = value; } }
        public partial class RowFields { public StringField DeliveryAddress; }

        [DisplayName("Term of Payment Targ Val")]

        [EditLink, QuickSearch]
        public String ToPTargVal { get { return Fields.ToPTargVal[this]; } set { Fields.ToPTargVal[this] = value; } }
        public partial class RowFields { public StringField ToPTargVal; }

        [DisplayName("Your Reference")]

        [EditLink, QuickSearch]
        public String YourReference { get { return Fields.YourReference[this]; } set { Fields.YourReference[this] = value; } }
        public partial class RowFields { public StringField YourReference; }

        [DisplayName("Our Reference")]

        [EditLink, QuickSearch]
        public String OurReference { get { return Fields.OurReference[this]; } set { Fields.OurReference[this] = value; } }
        public partial class RowFields { public StringField OurReference; }

        [DisplayName("Sales Person")]

        [EditLink, QuickSearch]
        public String SalesPerson { get { return Fields.SalesPerson[this]; } set { Fields.SalesPerson[this] = value; } }
        public partial class RowFields { public StringField SalesPerson; }

        [DisplayName("Telephone")]

        [EditLink, QuickSearch]
        public String Telephone { get { return Fields.Telephone[this]; } set { Fields.Telephone[this] = value; } }
        public partial class RowFields { public StringField Telephone; }

        [DisplayName("Validity Start")]
        [DateEditor]


        [EditLink, QuickSearch]
        public DateTime? ValidityStart { get { return Fields.ValidityStart[this]; } set { Fields.ValidityStart[this] = value; } }
        public partial class RowFields { public DateTimeField ValidityStart; }


        [DisplayName("Validity End")]
        [DateEditor]


        [EditLink, QuickSearch]
        public DateTime? ValidityEnd { get { return Fields.ValidityEnd[this]; } set { Fields.ValidityEnd[this] = value; } }
        public partial class RowFields { public DateTimeField ValidityEnd; }

        [DisplayName("Item Interval"), Size(19), Scale(0)]
        public Decimal? ItemInterval { get { return Fields.ItemInterval[this]; } set { Fields.ItemInterval[this] = value; } }
        public partial class RowFields { public DecimalField ItemInterval; }

        [DisplayName("Sub Item Interval"), Size(19), Scale(0)]
        public Decimal? SubItemInterval { get { return Fields.SubItemInterval[this]; } set { Fields.SubItemInterval[this] = value; } }
        public partial class RowFields { public DecimalField SubItemInterval; }

        [DisplayName("Warranty")]
        [EditLink, QuickSearch]
        public DateTime? Warranty { get { return Fields.Warranty[this]; } set { Fields.Warranty[this] = value; } }
        public partial class RowFields { public DateTimeField Warranty; }

        [DisplayName("Language")]

        [EditLink, QuickSearch]
        public String Language { get { return Fields.Language[this]; } set { Fields.Language[this] = value; } }
        public partial class RowFields { public StringField Language; }

        [DisplayName("Tanggal Closing Negosiasi Harga")]

        [EditLink, QuickSearch]
        public DateTime? EvaluationClosingPriceDate { get { return Fields.EvaluationClosingPriceDate[this]; } set { Fields.EvaluationClosingPriceDate[this] = value; } }
        public partial class RowFields { public DateTimeField EvaluationClosingPriceDate; }

        [DisplayName("Review Oe Required"), Column("ReviewOERequired")]
        [YaTidakEditor]
        [EditLink, QuickSearch]
        public Boolean? ReviewOeRequired { get { return Fields.ReviewOeRequired[this]; } set { Fields.ReviewOeRequired[this] = value; } }
        public partial class RowFields { public BooleanField ReviewOeRequired; }

        [DisplayName("Proc Agreement")]
        [EditLink, QuickSearch]
        //[BooleanEditor]
        [MinSelectLevel(SelectLevel.List)]
        public ApproveTidakApprove? ProcAgreement { get { return (ApproveTidakApprove?)Fields.ProcAgreement[this]; } set { Fields.ProcAgreement[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field ProcAgreement; }
        

        [DisplayName("Proc Agreement Date")]
        [DateTimeEditor]
        [EditLink, QuickSearch]
        public DateTime? ProcAgreementDate { get { return Fields.ProcAgreementDate[this]; } set { Fields.ProcAgreementDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcAgreementDate; }

        [DisplayName("Proc As Required"), Column("ProcASRequired")]

        [EditLink, QuickSearch]
        public YaTidak? ProcAsRequired { get { return (YaTidak?)Fields.ProcAsRequired[this]; } set { Fields.ProcAsRequired[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field ProcAsRequired; }

        [DisplayName("Proc As Approved"), Column("ProcASApproved")]

        [EditLink, QuickSearch]
        public ApproveTidakApprove? ProcAsApproved { get { return (ApproveTidakApprove?)Fields.ProcAsApproved[this]; } set { Fields.ProcAsApproved[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field ProcAsApproved; }

        [DisplayName("Proc As Approved Date"), Column("ProcASApprovedDate")]

        [EditLink, QuickSearch]
        public DateTime? ProcAsApprovedDate { get { return Fields.ProcAsApprovedDate[this]; } set { Fields.ProcAsApprovedDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcAsApprovedDate; }

        [DisplayName("Proc As Desc"), Column("ProcASDesc")]

        [EditLink, QuickSearch]
        public String ProcAsDesc { get { return Fields.ProcAsDesc[this]; } set { Fields.ProcAsDesc[this] = value; } }
        public partial class RowFields { public StringField ProcAsDesc; }

        [DisplayName("Final Conclusion Desc")]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String FinalConclusionDesc { get { return Fields.FinalConclusionDesc[this]; } set { Fields.FinalConclusionDesc[this] = value; } }
        public partial class RowFields { public StringField FinalConclusionDesc; }

        [DisplayName("Winner Nomination Date")]
        [DateTimeEditor]


        [EditLink, QuickSearch]
        public DateTime? WinnerNominationDate { get { return Fields.WinnerNominationDate[this]; } set { Fields.WinnerNominationDate[this] = value; } }
        public partial class RowFields { public DateTimeField WinnerNominationDate; }

        [DisplayName("Objection Close Date")]
        [DateTimeEditor]
        [EditLink, QuickSearch]
        public DateTime? ObjectionCloseDate { get { return Fields.ObjectionCloseDate[this]; } set { Fields.ObjectionCloseDate[this] = value; } }
        public partial class RowFields { public DateTimeField ObjectionCloseDate; }

        [DisplayName("Po Doc Name"), Column("PODocName")]
        [Hidden]

        [EditLink, QuickSearch]
        public String PoDocName { get { return Fields.PoDocName[this]; } set { Fields.PoDocName[this] = value; } }
        public partial class RowFields { public StringField PoDocName; }

        [DisplayName("Temporary Pic"), Column("TemporaryPIC")]

        [EditLink, QuickSearch]
        public String TemporaryPic { get { return Fields.TemporaryPic[this]; } set { Fields.TemporaryPic[this] = value; } }
        public partial class RowFields { public StringField TemporaryPic; }

        [DisplayName("Po Number"), Column("PONumber")]

        [EditLink, QuickSearch]
        public String PoNumber { get { return Fields.PoNumber[this]; } set { Fields.PoNumber[this] = value; } }
        public partial class RowFields { public StringField PoNumber; }

        [DisplayName("Po Doc File"), Column("PODocFile")]
        [FileUploadEditor(FilenameFormat = "PurchaseOrder/{1:0000}/{0:00000000}_{2}_{4}", CopyToHistory = true, OriginalNameProperty = "PODocName", DisplayFileName = true)]

        [EditLink, QuickSearch]
        public String PoDocFile { get { return Fields.PoDocFile[this]; } set { Fields.PoDocFile[this] = value; } }
        public partial class RowFields { public StringField PoDocFile; }

        [DisplayName("F1 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]

        public DateTime? F1SubmitDate { get { return Fields.F1SubmitDate[this]; } set { Fields.F1SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F1SubmitDate; }

        [DisplayName("F1 Submit By")]
        [EditLink, QuickSearch]
        public String F1SubmitBy { get { return Fields.F1SubmitBy[this]; } set { Fields.F1SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F1SubmitBy; }

        [DisplayName("F2 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F2SubmitDate { get { return Fields.F2SubmitDate[this]; } set { Fields.F2SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F2SubmitDate; }

        [DisplayName("F2 Submit By")]

        [EditLink, QuickSearch]
        public String F2SubmitBy { get { return Fields.F2SubmitBy[this]; } set { Fields.F2SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F2SubmitBy; }

        [DisplayName("F3 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F3SubmitDate { get { return Fields.F3SubmitDate[this]; } set { Fields.F3SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F3SubmitDate; }

        [DisplayName("F3 Submit By")]

        [EditLink, QuickSearch]
        public String F3SubmitBy { get { return Fields.F3SubmitBy[this]; } set { Fields.F3SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F3SubmitBy; }

        [DisplayName("F3 1 Submit Date"), Column("F3_1SubmitDate")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F31SubmitDate { get { return Fields.F31SubmitDate[this]; } set { Fields.F31SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F31SubmitDate; }

        [DisplayName("F3 1 Submit By"), Column("F3_1SubmitBy")]

        [EditLink, QuickSearch]
        public String F31SubmitBy { get { return Fields.F31SubmitBy[this]; } set { Fields.F31SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F31SubmitBy; }

        [DisplayName("F4 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F4SubmitDate { get { return Fields.F4SubmitDate[this]; } set { Fields.F4SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F4SubmitDate; }

        [DisplayName("F4 Submit By")]

        [EditLink, QuickSearch]
        public String F4SubmitBy { get { return Fields.F4SubmitBy[this]; } set { Fields.F4SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F4SubmitBy; }

        [DisplayName("F5 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F5SubmitDate { get { return Fields.F5SubmitDate[this]; } set { Fields.F5SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F5SubmitDate; }

        [DisplayName("F5 Submit By")]

        [EditLink, QuickSearch]
        public String F5SubmitBy { get { return Fields.F5SubmitBy[this]; } set { Fields.F5SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F5SubmitBy; }

        [DisplayName("F6 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F6SubmitDate { get { return Fields.F6SubmitDate[this]; } set { Fields.F6SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F6SubmitDate; }

        [DisplayName("F6 Submit By")]

        [EditLink, QuickSearch]
        public String F6SubmitBy { get { return Fields.F6SubmitBy[this]; } set { Fields.F6SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F6SubmitBy; }

        [DisplayName("F7 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F7SubmitDate { get { return Fields.F7SubmitDate[this]; } set { Fields.F7SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F7SubmitDate; }

        [DisplayName("F7 Submit By")]

        [EditLink, QuickSearch]
        public String F7SubmitBy { get { return Fields.F7SubmitBy[this]; } set { Fields.F7SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F7SubmitBy; }

        [DisplayName("F8 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F8SubmitDate { get { return Fields.F8SubmitDate[this]; } set { Fields.F8SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F8SubmitDate; }

        [DisplayName("F8 Submit By")]

        [EditLink, QuickSearch]
        public String F8SubmitBy { get { return Fields.F8SubmitBy[this]; } set { Fields.F8SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F8SubmitBy; }

        [DisplayName("F9 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F9SubmitDate { get { return Fields.F9SubmitDate[this]; } set { Fields.F9SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F9SubmitDate; }

        [DisplayName("F9 Submit By")]

        [EditLink, QuickSearch]
        public String F9SubmitBy { get { return Fields.F9SubmitBy[this]; } set { Fields.F9SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F9SubmitBy; }

        [DisplayName("F10 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F10SubmitDate { get { return Fields.F10SubmitDate[this]; } set { Fields.F10SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F10SubmitDate; }

        [DisplayName("F10 Submit By")]

        [EditLink, QuickSearch]
        public String F10SubmitBy { get { return Fields.F10SubmitBy[this]; } set { Fields.F10SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F10SubmitBy; }

        [DisplayName("F11 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F11SubmitDate { get { return Fields.F11SubmitDate[this]; } set { Fields.F11SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F11SubmitDate; }

        [DisplayName("F11 Submit By")]

        [EditLink, QuickSearch]
        public String F11SubmitBy { get { return Fields.F11SubmitBy[this]; } set { Fields.F11SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F11SubmitBy; }

        [DisplayName("F12 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F12SubmitDate { get { return Fields.F12SubmitDate[this]; } set { Fields.F12SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F12SubmitDate; }

        [DisplayName("F12 Submit By")]

        [EditLink, QuickSearch]
        public String F12SubmitBy { get { return Fields.F12SubmitBy[this]; } set { Fields.F12SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F12SubmitBy; }



        [DisplayName("Winner Nomination Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F13SubmitDate { get { return Fields.F13SubmitDate[this]; } set { Fields.F13SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F13SubmitDate; }

        [DisplayName("Winner Nomination Approved By")]
        [EditLink, QuickSearch]
        public String F13SubmitBy { get { return Fields.F13SubmitBy[this]; } set { Fields.F13SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F13SubmitBy; }

        [DisplayName("F14 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F14SubmitDate { get { return Fields.F14SubmitDate[this]; } set { Fields.F14SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F14SubmitDate; }

        [DisplayName("F14 Submit By")]

        [EditLink, QuickSearch]
        public String F14SubmitBy { get { return Fields.F14SubmitBy[this]; } set { Fields.F14SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F14SubmitBy; }

        [DisplayName("F15 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F15SubmitDate { get { return Fields.F15SubmitDate[this]; } set { Fields.F15SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F15SubmitDate; }

        [DisplayName("F15 Submit By")]

        [EditLink, QuickSearch]
        public String F15SubmitBy { get { return Fields.F15SubmitBy[this]; } set { Fields.F15SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F15SubmitBy; }

        [DisplayName("F16 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F16SubmitDate { get { return Fields.F16SubmitDate[this]; } set { Fields.F16SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F16SubmitDate; }

        [DisplayName("F16 Submit By")]

        [EditLink, QuickSearch]
        public String F16SubmitBy { get { return Fields.F16SubmitBy[this]; } set { Fields.F16SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F16SubmitBy; }

        [DisplayName("F17 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F17SubmitDate { get { return Fields.F17SubmitDate[this]; } set { Fields.F17SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F17SubmitDate; }
        
        [DisplayName("F17 Submit By")]

        [EditLink, QuickSearch]
        public String F17SubmitBy { get { return Fields.F17SubmitBy[this]; } set { Fields.F17SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F17SubmitBy; }

        [DisplayName("F19 Submit Date")]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F19SubmitDate { get { return Fields.F19SubmitDate[this]; } set { Fields.F19SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F19SubmitDate; }

        [DisplayName("F19 Submit By")]
        [EditLink, QuickSearch]
        public String F19SubmitBy { get { return Fields.F19SubmitBy[this]; } set { Fields.F19SubmitBy[this] = value; } }
        public partial class RowFields { public StringField F19SubmitBy; }

        [DisplayName("Procurement Method"), Size(50), ForeignKey("[dbo].[ProcurementMethod]", "ProcurementMethodId"), LeftJoin("jProcurementMethod"), TextualField("ProcurementMethodName")]
        [LookupEditor(typeof(ProcurementMethodRow))]

        [EditLink, QuickSearch]
        public String ProcurementMethodId { get { return Fields.ProcurementMethodId[this]; } set { Fields.ProcurementMethodId[this] = value; } }
        public partial class RowFields { public StringField ProcurementMethodId; }

        [DisplayName("District"), Size(245)]
        public String District { get { return Fields.District[this]; } set { Fields.District[this] = value; } }
		public partial class RowFields { public StringField District; }
        [DisplayName("Csms"), Size(8)]
        public String Csms { get { return Fields.Csms[this]; } set { Fields.Csms[this] = value; } }
		public partial class RowFields { public StringField Csms; }

        [DisplayName("Panitia Pengadaan"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<CommitteeMemberRow> CommitteeMember
        {
            get { return Fields.CommitteeMember[this]; }
            set { Fields.CommitteeMember[this] = value; }
        }
        public partial class RowFields { public RowListField<CommitteeMemberRow> CommitteeMember; }

        [DisplayName("Bidder List"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<ProcParticipantRow> ProcParticipant
        {
            get { return Fields.ProcParticipant[this]; }
            set { Fields.ProcParticipant[this] = value; }
        }

        public partial class RowFields { public RowListField<ProcParticipantRow> ProcParticipant; }


        [DisplayName("RFQ Text"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<RfqTextRow> RfqTexts
        {
            get { return Fields.RfqTexts[this]; }
            set { Fields.RfqTexts[this] = value; }
        }
        public partial class RowFields { public RowListField<RfqTextRow> RfqTexts; }

        [DisplayName("RFQ Item"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<RfqItemRow> RfqItems
        {
            get { return Fields.RfqItems[this]; }
            set { Fields.RfqItems[this] = value; }
        }
        public partial class RowFields { public RowListField<RfqItemRow> RfqItems; }

        [DisplayName("Bidder Item"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<ProcParticipantItemRow> ProcParticipantItems
        {
            get { return Fields.ProcParticipantItems[this]; }
            set { Fields.ProcParticipantItems[this] = value; }
        }
        public partial class RowFields { public RowListField<ProcParticipantItemRow> ProcParticipantItems; }

        [DisplayName("Purchase Requisition"), MasterDetailRelation(foreignKey: "ProcurementId"), NotMapped]
        public List<ProcPrRow> ProcPurchaseRequests
        {
            get { return Fields.ProcPurchaseRequests[this]; }
            set { Fields.ProcPurchaseRequests[this] = value; }
        }
        public partial class RowFields { public RowListField<ProcPrRow> ProcPurchaseRequests; }

        [DisplayName("Request Terms")]
        [HtmlNoteContentEditor]
        [StaticTextBlock(IsHtml = false)]

        [NotMapped]
        [ReadOnly(true)]

        [EditLink]
        public String RequestTerms { get { return Fields.RequestTerms[this]; } set { Fields.RequestTerms[this] = value; } }
        public partial class RowFields { public StringField RequestTerms; }

        [TextAreaEditor]
        [NotMapped]
        [DisplayName("Min Score"), Size(6)]
        public String MinScore { get { return Fields.MinScore[this]; } set { Fields.MinScore[this] = value; } }
		public partial class RowFields { public StringField MinScore; }

        [DisplayName("Status Lelang")]
        //[AdaTidakAdaEditor]
        //[EnumEditor]
        [EditLink, QuickSearch]
        public LelangGagalLelang? ProcRejectTender { get { return (LelangGagalLelang?)Fields.ProcRejectTender[this]; } set { Fields.ProcRejectTender[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field ProcRejectTender; }

        [DisplayName("Deskripsi Gagal Lelang")]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String ProcRejectTenderDesc { get { return Fields.ProcRejectTenderDesc[this]; } set { Fields.ProcRejectTenderDesc[this] = value; } }
        public partial class RowFields { public StringField ProcRejectTenderDesc; }
        //[DisplayName("Request Description")]
        //[EditLink]
        //public String RequestDescription { get { return Fields.RequestDescription[this]; } set { Fields.RequestDescription[this] = value; } }
        //public partial class RowFields { public StringField RequestDescription; }

        #region Foreign Fields


        [DisplayName("Procurement Type Name"), Expression("jProcurementType.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ProcurementTypeName { get { return Fields.ProcurementTypeName[this]; } set { Fields.ProcurementTypeName[this] = value; } }
        public partial class RowFields { public StringField ProcurementTypeName; }

        [DisplayName("Procurement Type Description"), Expression("jProcurementType.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ProcurementTypeDescription { get { return Fields.ProcurementTypeDescription[this]; } set { Fields.ProcurementTypeDescription[this] = value; } }
        public partial class RowFields { public StringField ProcurementTypeDescription; }



        [DisplayName("Status Name"), Expression("jStatus.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String StatusName { get { return Fields.StatusName[this]; } set { Fields.StatusName[this] = value; } }
        public partial class RowFields { public StringField StatusName; }

        [DisplayName("Status Description"), Expression("jStatus.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String StatusDescription { get { return Fields.StatusDescription[this]; } set { Fields.StatusDescription[this] = value; } }
        public partial class RowFields { public StringField StatusDescription; }

        [DisplayName("Status Sequence"), Expression("jStatus.[Sequence]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? StatusSequence { get { return Fields.StatusSequence[this]; } set { Fields.StatusSequence[this] = value; } }
        public partial class RowFields { public Int32Field StatusSequence; }

        [DisplayName("Classification Association Code"), Expression("jClassification.[AssociationCode]"), ReadOnly(true)]
        public String ClassificationAssociationCode { get { return Fields.ClassificationAssociationCode[this]; } set { Fields.ClassificationAssociationCode[this] = value; } }
		public partial class RowFields { public StringField ClassificationAssociationCode; }

        [DisplayName("Classification Area Code"), Expression("jClassification.[AreaCode]"), ReadOnly(true)]
        public String ClassificationAreaCode { get { return Fields.ClassificationAreaCode[this]; } set { Fields.ClassificationAreaCode[this] = value; } }
		public partial class RowFields { public StringField ClassificationAreaCode; }

        [DisplayName("Classification Vendor Class"), Expression("jClassification.[VendorClass]"), ReadOnly(true)]
        public String ClassificationVendorClass { get { return Fields.ClassificationVendorClass[this]; } set { Fields.ClassificationVendorClass[this] = value; } }
		public partial class RowFields { public StringField ClassificationVendorClass; }

        [DisplayName("Classification Kode Jenis Jasa"), Expression("jClassification.[KodeJenisJasa]"), ReadOnly(true)]
        public String ClassificationKodeJenisJasa { get { return Fields.ClassificationKodeJenisJasa[this]; } set { Fields.ClassificationKodeJenisJasa[this] = value; } }
		public partial class RowFields { public StringField ClassificationKodeJenisJasa; }

        [DisplayName("Classification Classification Descr"), Expression("jClassification.[ClassificationDescr]"), ReadOnly(true)]
        public String ClassificationClassificationDescr { get { return Fields.ClassificationClassificationDescr[this]; } set { Fields.ClassificationClassificationDescr[this] = value; } }
		public partial class RowFields { public StringField ClassificationClassificationDescr; }


        
        [DisplayName("Office Address Name"), Expression("jOfficeAddress.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String OfficeAddressName { get { return Fields.OfficeAddressName[this]; } set { Fields.OfficeAddressName[this] = value; } }
        public partial class RowFields { public StringField OfficeAddressName; }

        [DisplayName("Office Address Description"), Expression("jOfficeAddress.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String OfficeAddressDescription { get { return Fields.OfficeAddressDescription[this]; } set { Fields.OfficeAddressDescription[this] = value; } }
        public partial class RowFields { public StringField OfficeAddressDescription; }

        [DisplayName("Office Address Address Type Id"), Expression("jOfficeAddress.[AddressTypeId]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public Int32? OfficeAddressAddressTypeId { get { return Fields.OfficeAddressAddressTypeId[this]; } set { Fields.OfficeAddressAddressTypeId[this] = value; } }
        public partial class RowFields { public Int32Field OfficeAddressAddressTypeId; }



        [DisplayName("Proc Value Range Name"), Expression("jProcValueRange.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ProcValueRangeName { get { return Fields.ProcValueRangeName[this]; } set { Fields.ProcValueRangeName[this] = value; } }
        public partial class RowFields { public StringField ProcValueRangeName; }

        [DisplayName("Proc Value Range Description"), Expression("jProcValueRange.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ProcValueRangeDescription { get { return Fields.ProcValueRangeDescription[this]; } set { Fields.ProcValueRangeDescription[this] = value; } }
        public partial class RowFields { public StringField ProcValueRangeDescription; }



        [DisplayName("Committee Type Name"), Expression("jCommitteeType.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String CommitteeTypeName { get { return Fields.CommitteeTypeName[this]; } set { Fields.CommitteeTypeName[this] = value; } }
        public partial class RowFields { public StringField CommitteeTypeName; }

        [DisplayName("Committee Type Description"), Expression("jCommitteeType.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String CommitteeTypeDescription { get { return Fields.CommitteeTypeDescription[this]; } set { Fields.CommitteeTypeDescription[this] = value; } }
        public partial class RowFields { public StringField CommitteeTypeDescription; }



        [DisplayName("Destination Name"), Expression("jDestination.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String DestinationName { get { return Fields.DestinationName[this]; } set { Fields.DestinationName[this] = value; } }
        public partial class RowFields { public StringField DestinationName; }

        [DisplayName("Destination Description"), Expression("jDestination.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String DestinationDescription { get { return Fields.DestinationDescription[this]; } set { Fields.DestinationDescription[this] = value; } }
        public partial class RowFields { public StringField DestinationDescription; }

        [DisplayName("Destination Address Type Id"), Expression("jDestination.[AddressTypeId]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public Int32? DestinationAddressTypeId { get { return Fields.DestinationAddressTypeId[this]; } set { Fields.DestinationAddressTypeId[this] = value; } }
        public partial class RowFields { public Int32Field DestinationAddressTypeId; }



        [DisplayName("Contract Type Name"), Expression("jContractType.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ContractTypeName { get { return Fields.ContractTypeName[this]; } set { Fields.ContractTypeName[this] = value; } }
        public partial class RowFields { public StringField ContractTypeName; }

        [DisplayName("Contract Type Description"), Expression("jContractType.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String ContractTypeDescription { get { return Fields.ContractTypeDescription[this]; } set { Fields.ContractTypeDescription[this] = value; } }
        public partial class RowFields { public StringField ContractTypeDescription; }



        [DisplayName("Currency Name"), Expression("jCurrency.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String CurrencyName { get { return Fields.CurrencyName[this]; } set { Fields.CurrencyName[this] = value; } }
        public partial class RowFields { public StringField CurrencyName; }

        [DisplayName("Currency Description"), Expression("jCurrency.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String CurrencyDescription { get { return Fields.CurrencyDescription[this]; } set { Fields.CurrencyDescription[this] = value; } }
        public partial class RowFields { public StringField CurrencyDescription; }



        [DisplayName("Doc Submit Method Name"), Expression("jDocSubmitMethod.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String DocSubmitMethodName { get { return Fields.DocSubmitMethodName[this]; } set { Fields.DocSubmitMethodName[this] = value; } }
        public partial class RowFields { public StringField DocSubmitMethodName; }

        [DisplayName("Doc Submit Method Description"), Expression("jDocSubmitMethod.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String DocSubmitMethodDescription { get { return Fields.DocSubmitMethodDescription[this]; } set { Fields.DocSubmitMethodDescription[this] = value; } }
        public partial class RowFields { public StringField DocSubmitMethodDescription; }



        [DisplayName("Order Type Name"), Expression("jOrderType.[Name]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String OrderTypeName { get { return Fields.OrderTypeName[this]; } set { Fields.OrderTypeName[this] = value; } }
        public partial class RowFields { public StringField OrderTypeName; }

        [DisplayName("Order Type Description"), Expression("jOrderType.[Description]"), ReadOnly(true)]

        [EditLink, QuickSearch]
        public String OrderTypeDescription { get { return Fields.OrderTypeDescription[this]; } set { Fields.OrderTypeDescription[this] = value; } }
        public partial class RowFields { public StringField OrderTypeDescription; }



        [DisplayName("Procurement Method Name"), Expression("jProcurementMethod.[Name]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementMethodName { get { return Fields.ProcurementMethodName[this]; } set { Fields.ProcurementMethodName[this] = value; } }
        public partial class RowFields { public StringField ProcurementMethodName; }

        [DisplayName("Procurement Method Description"), Expression("jProcurementMethod.[Description]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementMethodDescription { get { return Fields.ProcurementMethodDescription[this]; } set { Fields.ProcurementMethodDescription[this] = value; } }
        public partial class RowFields { public StringField ProcurementMethodDescription; }

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcurementId; } }

        StringField INameRow.NameField { get { return Fields.Title; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcurementRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
