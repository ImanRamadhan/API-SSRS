using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SCMONLINE.Procurement
{
    [NestedPermissionKeys]

    public class ProcurementPermission
    {
        public const string Address = "Pages:Address";
        public const string AddressType = "Pages:AddressType";
        public const string CommitteeMember = "Pages:CommitteeMember";
        public const string CommitteeMemberMapping = "Pages:CommitteeMemberMapping";
        public const string CommitteeRole = "Pages:CommitteeRole";
        public const string CommitteeType = "Pages:CommitteeType";
        public const string ContractType = "Pages:ContractType";
        public const string Currency = "Pages:Currency";
        public const string DocSubmitMethod = "Pages:DocSubmitMethod";
        public const string DocumentStatus = "Pages:DocumentStatus";
        public const string EvaluationConclusion = "Pages:EvaluationConclusion";
        public const string EvaluationConclusionItem = "Pages:EvaluationConclusionItem";
        public const string F10_Negotiation = "Pages:F10_Negotiation";
        public const string F10_ProcParticipantItem = "Pages:F10_ProcParticipantItem";
        public const string F10_RfqItem = "Pages:F10_RfqItem";
        public const string F11_ProposeWinner = "Pages:F11_ProposeWinner";
        public const string F12_ProcAs = "Pages:F12_ProcAs";
        public const string F13_ProcParticipant = "Pages:F13_ProcParticipant";
        public const string F13_ProcResultDecision = "Pages:F13_ProcResultDecision";
        public const string F13_RfqItem = "Pages:F13_RfqItem";
        public const string F14_WinnerAnnouncement = "Pages:F14_WinnerAnnouncement";
        public const string F15_ObjectionProcess = "Pages:F15_ObjectionProcess";
        public const string F16_WinnerDesignation = "Pages:F16_WinnerDesignation";
        public const string F17_PurchOrderDocUpload = "Pages:F17_PurchOrderDocUpload";
        public const string F1_BLSelectionAdjustment = "Pages:F1_BLSelectionAdjustment";
        public const string F2_ProcurementDocCreation = "Pages:F2_ProcurementDocCreation";
        public const string F3_1_InputOwnerEstimate = "Pages:F3_1_InputOwnerEstimate";
        public const string F3_CreateRFQ = "Pages:F3_CreateRFQ";
        public const string F4_Aanwijzing = "Pages:F4_Aanwijzing";
        public const string F5_ProcParticipantItem = "Pages:F5_ProcParticipantItem";
        public const string F5_SubmitTenderDocument = "Pages:F5_SubmitTenderDocument";
        public const string F6_OpenTenderDocument = "Pages:F6_OpenTenderDocument";
        public const string F6_ProcParticipant = "Pages:F6_ProcParticipant";
        public const string F6_ProcParticipantItem = "Pages:F6_ProcParticipantItem";
        public const string F7_ProcParticipant = "Pages:F7_ProcParticipant";
        public const string F7_ProcParticipantItem = "Pages:F7_ProcParticipantItem";
        public const string F7_TenderEvaluation = "Pages:F7_TenderEvaluation";
        public const string F8_ProcParticipant = "Pages:F8_ProcParticipant";
        public const string F8_TechnicalClarification = "Pages:F8_TechnicalClarification";
        public const string F9_PriceEvaluation = "Pages:F9_PriceEvaluation";
        public const string F9_ProcParticipantItem = "Pages:F9_ProcParticipantItem";
        public const string F19_CommitteeApproval = "Pages:F19_CommitteeApproval"; 
        public const string F20_PurchaseRequisitionTracking = "Pages:F20_PurchaseRequisitionTracking";
        public const string OrderType = "Pages:OrderType";
        public const string ProcParticipant = "Pages:ProcParticipant";
        public const string ProcParticipantItem = "Pages:ProcParticipantItem";
        public const string ProcPr = "Pages:ProcPr";
        public const string ProcStatus = "Pages:ProcStatus";
        public const string Procurement = "Pages:Procurement";
        public const string ProcurementMethod = "Pages:ProcurementMethod";
        public const string ProcurementType = "Pages:ProcurementType";
        public const string ProcValueRange = "Pages:ProcValueRange";
        public const string PurchaseRequisition = "Pages:PurchaseRequisition";
        public const string PurchDocTextRef = "Pages:PurchDocTextRef";
        public const string ReportF1 = "Pages:ReportF1";
        public const string ReportViewerA = "Pages:ReportViewerA";
        public const string RfqItem = "Pages:RfqItem";
        public const string RfqItemText = "Pages:RfqItemText";
        public const string RfqText = "Pages:RfqText";
        public const string Vendor = "Pages:Vendor";
        public const string VendorAddress = "Pages:VendorAddress";
        public const string VendorRepresentative = "Pages:VendorRepresentative";
        public const string Setting = "Pages:Setting";

        public const string RoleVendor = "Role:VendorRoleDahsboard";
        public const string RolePRTracking = "Role:PurchaseRequisitionTracking";

        public const string DashboardAdmin = "Dashboard:StatusPRAdmin";
        public const string DashboardVendor = "Dashboard:StatusPRVendor";
        public const string DashboardAstman = "Dashboard:Astman";
        public const string DashboardPRBuyer = "Dashboard:StatusPRBuyer";

        public const string DataMaterial = "Data:DataMaterial";
        public const string DataService = "Data:DataService";

    }
}