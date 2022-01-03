using System;

namespace MVC
{
    public static class Views
    {
        public static class _Ext
        {
            public static class AuditLog
            {
                public const string AuditLogIndex = "~/Modules/_Ext/AuditLog/AuditLogIndex.cshtml";
            }

            public static class DevTools
            {
                public static class CompareEntityToDB
                {
                    public const string CompareEntityToDBIndex = "~/Modules/_Ext/DevTools/CompareEntityToDB/CompareEntityToDBIndex.cshtml";
                }

                public static class GenerateMigrationFromEntity
                {
                    public const string GenerateMigrationFromEntityIndex = "~/Modules/_Ext/DevTools/GenerateMigrationFromEntity/GenerateMigrationFromEntityIndex.cshtml";
                    public const string GenerateMigrationFromEntityMigrationViewer = "~/Modules/_Ext/DevTools/GenerateMigrationFromEntity/GenerateMigrationFromEntityMigrationViewer.cshtml";
                    public const string GenerateMigrationFromEntitySuccessMsg = "~/Modules/_Ext/DevTools/GenerateMigrationFromEntity/GenerateMigrationFromEntitySuccessMsg.cshtml";
                }

                public static class Sergen
                {
                    public const string SergenError = "~/Modules/_Ext/DevTools/Sergen/SergenError.cshtml";
                    public const string SergenIndex = "~/Modules/_Ext/DevTools/Sergen/SergenIndex.cshtml";
                }
            }

        }

        public static class Administration
        {
            public static class EmailAccounts
            {
                public const string EmailAccountsIndex = "~/Modules/Administration/EmailAccounts/EmailAccountsIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class QueuedEmail
            {
                public const string QueuedEmailIndex = "~/Modules/Administration/QueuedEmail/QueuedEmailIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Setting
            {
                public const string SettingIndex = "~/Modules/Administration/Setting/SettingIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class AdminLTE
        {
            public const string Calendar = "~/Modules/AdminLTE/Calendar.cshtml";
            public static class Charts
            {
                public const string ChartJS = "~/Modules/AdminLTE/Charts/ChartJS.cshtml";
                public const string Flot = "~/Modules/AdminLTE/Charts/Flot.cshtml";
                public const string InlineCharts = "~/Modules/AdminLTE/Charts/InlineCharts.cshtml";
                public const string Morris = "~/Modules/AdminLTE/Charts/Morris.cshtml";
            }
            public const string DashboardV2 = "~/Modules/AdminLTE/DashboardV2.cshtml";
            public static class Examples
            {
                public const string BlankPage = "~/Modules/AdminLTE/Examples/BlankPage.cshtml";
                public const string Error404 = "~/Modules/AdminLTE/Examples/Error404.cshtml";
                public const string Error500 = "~/Modules/AdminLTE/Examples/Error500.cshtml";
                public const string Invoice = "~/Modules/AdminLTE/Examples/Invoice.cshtml";
                public const string InvoicePrint = "~/Modules/AdminLTE/Examples/InvoicePrint.cshtml";
                public const string Lockscreen = "~/Modules/AdminLTE/Examples/Lockscreen.cshtml";
                public const string Login = "~/Modules/AdminLTE/Examples/Login.cshtml";
                public const string PacePage = "~/Modules/AdminLTE/Examples/PacePage.cshtml";
                public const string Profile = "~/Modules/AdminLTE/Examples/Profile.cshtml";
                public const string Register = "~/Modules/AdminLTE/Examples/Register.cshtml";
            }

            public static class Forms
            {
                public const string AdvancedElements = "~/Modules/AdminLTE/Forms/AdvancedElements.cshtml";
                public const string GeneralElements = "~/Modules/AdminLTE/Forms/GeneralElements.cshtml";
                public const string TextEditors = "~/Modules/AdminLTE/Forms/TextEditors.cshtml";
            }

            public static class Mailbox
            {
                public const string Compose = "~/Modules/AdminLTE/Mailbox/Compose.cshtml";
                public const string Inbox = "~/Modules/AdminLTE/Mailbox/Inbox.cshtml";
                public const string Read = "~/Modules/AdminLTE/Mailbox/Read.cshtml";
            }

            public static class Tables
            {
                public const string SimpleTables = "~/Modules/AdminLTE/Tables/SimpleTables.cshtml";
            }

            public static class UIElements
            {
                public const string Buttons = "~/Modules/AdminLTE/UIElements/Buttons.cshtml";
                public const string General = "~/Modules/AdminLTE/UIElements/General.cshtml";
                public const string Icons = "~/Modules/AdminLTE/UIElements/Icons.cshtml";
                public const string Modals = "~/Modules/AdminLTE/UIElements/Modals.cshtml";
                public const string Sliders = "~/Modules/AdminLTE/UIElements/Sliders.cshtml";
                public const string Timeline = "~/Modules/AdminLTE/UIElements/Timeline.cshtml";
            }
            public const string Widgets = "~/Modules/AdminLTE/Widgets.cshtml";
        }

        public static class BasicSamples
        {
            public static class Dialogs
            {
                public static class ChartInDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/ChartInDialog/Index.cshtml";
                }

                public static class CloneableEntityDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/CloneableEntityDialog/Index.cshtml";
                }

                public static class DefaultValuesInNewDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/DefaultValuesInNewDialog/Index.cshtml";
                }

                public static class DialogBoxes
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/DialogBoxes/Index.cshtml";
                }

                public static class EntityDialogAsPanel
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/EntityDialogAsPanel/Index.cshtml";
                }

                public static class GetInsertedRecordId
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/GetInsertedRecordId/Index.cshtml";
                }

                public static class OtherFormInTab
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/OtherFormInTab/Index.cshtml";
                }

                public static class OtherFormInTabOneBar
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/OtherFormInTabOneBar/Index.cshtml";
                }

                public static class PopulateLinkedData
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/PopulateLinkedData/Index.cshtml";
                }

                public static class ReadOnlyDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/ReadOnlyDialog/Index.cshtml";
                }

                public static class SerialAutoNumber
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/SerialAutoNumber/Index.cshtml";
                }

            }

            public static class Editors
            {
                public static class ChangingLookupText
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/ChangingLookupText/Index.cshtml";
                }

                public static class FilteredLookupInDetail
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/FilteredLookupInDetail/Index.cshtml";
                }

                public static class LookupFilterByMultipleValues
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/LookupFilterByMultipleValues/Index.cshtml";
                }

                public static class SelectWithHardcodedValues
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/SelectWithHardcodedValues/Index.cshtml";
                }

                public static class StaticTextBlock
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/StaticTextBlock/Index.cshtml";
                }

            }

            public static class Grids
            {
                public static class CancellableBulkAction
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/CancellableBulkAction/Index.cshtml";
                }

                public static class ConditionalFormatting
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/ConditionalFormatting/Index.cshtml";
                }

                public static class CustomLinksInGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/CustomLinksInGrid/Index.cshtml";
                }

                public static class DragDropInTreeGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/DragDropInTreeGrid/Index.cshtml";
                }

                public static class EnablingRowSelection
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/EnablingRowSelection/Index.cshtml";
                }

                public static class GridFilteredByCriteria
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/GridFilteredByCriteria/Index.cshtml";
                }

                public static class GroupingAndSummariesInGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/GroupingAndSummariesInGrid/Index.cshtml";
                }

                public static class InitialValuesForQuickFilters
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/InitialValuesForQuickFilters/Index.cshtml";
                }

                public static class InlineActionButtons
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/InlineActionButtons/Index.cshtml";
                }

                public static class InlineImageInGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/InlineImageInGrid/Index.cshtml";
                }

                public static class ProductExcelImport
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/ProductExcelImport/Index.cshtml";
                }

                public static class QuickFilterCustomization
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/QuickFilterCustomization/Index.cshtml";
                }

                public static class RemovingAddButton
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/RemovingAddButton/Index.cshtml";
                }

                public static class StoredProcedureGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/StoredProcedureGrid/Index.cshtml";
                }

                public static class TreeGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/TreeGrid/Index.cshtml";
                }

                public static class ViewWithoutID
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/ViewWithoutID/Index.cshtml";
                }

                public static class VSGalleryQA
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/VSGalleryQA/Index.cshtml";
                }

                public static class WrappedHeaders
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/WrappedHeaders/Index.cshtml";
                }
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Default
        {
            public static class ProcParticipant
            {
                public const string ProcParticipantIndex = "~/Modules/Default/ProcParticipant/ProcParticipantIndex.cshtml";
            }

            public static class ProcParticipantItem
            {
                public const string ProcParticipantItemIndex = "~/Modules/Default/ProcParticipantItem/ProcParticipantItemIndex.cshtml";
            }

            public static class Procurement
            {
                public const string ProcurementIndex = "~/Modules/Default/Procurement/ProcurementIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Inbox
        {
            public static class Notification
            {
                public const string NotificationIndex = "~/Modules/Inbox/Notification/NotificationIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Northwind
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderDetailReport = "~/Modules/Northwind/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Northwind/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class SSRS
        {
            public static class Address
            {
                public const string AddressIndex = "~/Modules/SSRS/Address/AddressIndex.cshtml";
            }

            public static class AddressType
            {
                public const string AddressTypeIndex = "~/Modules/SSRS/AddressType/AddressTypeIndex.cshtml";
            }

            public static class ApprovalAuthorityRange
            {
                public const string ApprovalAuthorityRangeIndex = "~/Modules/SSRS/ApprovalAuthorityRange/ApprovalAuthorityRangeIndex.cshtml";
            }

            public static class BuyerLookupView
            {
                public const string BuyerLookupViewIndex = "~/Modules/SSRS/BuyerLookupView/BuyerLookupViewIndex.cshtml";
            }

            public static class CharacteristicDescription
            {
                public const string CharacteristicDescriptionIndex = "~/Modules/SSRS/CharacteristicDescription/CharacteristicDescriptionIndex.cshtml";
            }

            public static class CharacteristicValue
            {
                public const string CharacteristicValueIndex = "~/Modules/SSRS/CharacteristicValue/CharacteristicValueIndex.cshtml";
            }

            public static class CommitteeMember
            {
                public const string CommitteeMemberIndex = "~/Modules/SSRS/CommitteeMember/CommitteeMemberIndex.cshtml";
            }

            public static class CommitteeMemberMapping
            {
                public const string CommitteeMemberMappingIndex = "~/Modules/SSRS/CommitteeMemberMapping/CommitteeMemberMappingIndex.cshtml";
            }

            public static class CommitteeRole
            {
                public const string CommitteeRoleIndex = "~/Modules/SSRS/CommitteeRole/CommitteeRoleIndex.cshtml";
            }

            public static class CommitteeType
            {
                public const string CommitteeTypeIndex = "~/Modules/SSRS/CommitteeType/CommitteeTypeIndex.cshtml";
            }

            public static class ContractType
            {
                public const string ContractTypeIndex = "~/Modules/SSRS/ContractType/ContractTypeIndex.cshtml";
            }

            public static class Currency
            {
                public const string CurrencyIndex = "~/Modules/SSRS/Currency/CurrencyIndex.cshtml";
            }

            public static class DocSubmitMethod
            {
                public const string DocSubmitMethodIndex = "~/Modules/SSRS/DocSubmitMethod/DocSubmitMethodIndex.cshtml";
            }

            public static class DocumentStatus
            {
                public const string DocumentStatusIndex = "~/Modules/SSRS/DocumentStatus/DocumentStatusIndex.cshtml";
            }

            public static class EvaluationConclusion
            {
                public const string EvaluationConclusionIndex = "~/Modules/SSRS/EvaluationConclusion/EvaluationConclusionIndex.cshtml";
            }

            public static class EvaluationConclusionItem
            {
                public const string EvaluationConclusionItemIndex = "~/Modules/SSRS/EvaluationConclusionItem/EvaluationConclusionItemIndex.cshtml";
            }

            public static class F1_BLSelectionAdjustment
            {
                public const string F1_BLSelectionAdjustmentIndex = "~/Modules/SSRS/F1_BLSelectionAdjustment/F1_BLSelectionAdjustmentIndex.cshtml";
            }

            public static class F10_Negotiation
            {
                public const string F10_NegotiationIndex = "~/Modules/SSRS/F10_Negotiation/F10_NegotiationIndex.cshtml";
            }

            public static class F10_ProcParticipant
            {
                public const string F10_ProcParticipantIndex = "~/Modules/SSRS/F10_ProcParticipant/F10_ProcParticipantIndex.cshtml";
            }

            public static class F10_ProcParticipantItem
            {
                public const string F10_ProcParticipantItemIndex = "~/Modules/SSRS/F10_ProcParticipantItem/F10_ProcParticipantItemIndex.cshtml";
            }

            public static class F10_RfqItem
            {
                public const string F10_RfqItemIndex = "~/Modules/SSRS/F10_RfqItem/F10_RfqItemIndex.cshtml";
            }

            public static class F11_ProposeWinner
            {
                public const string F11_Propose = "~/Modules/SSRS/F11_ProposeWinner/F11_Propose.cshtml";
                public const string F11_ProposeWinnerIndex = "~/Modules/SSRS/F11_ProposeWinner/F11_ProposeWinnerIndex.cshtml";
            }

            public static class F12_ProcAs
            {
                public const string F12_ProcAsIndex = "~/Modules/SSRS/F12_ProcAs/F12_ProcAsIndex.cshtml";
            }

            public static class F13_ProcParticipant
            {
                public const string F13_ProcParticipantIndex = "~/Modules/SSRS/F13_ProcParticipant/F13_ProcParticipantIndex.cshtml";
            }

            public static class F13_ProcResultDecision
            {
                public const string F13_ProcResultDecisionIndex = "~/Modules/SSRS/F13_ProcResultDecision/F13_ProcResultDecisionIndex.cshtml";
                public const string F13_ResultDecision = "~/Modules/SSRS/F13_ProcResultDecision/F13_ResultDecision.cshtml";
            }

            public static class F13_RfqItem
            {
                public const string F13_RfqItemIndex = "~/Modules/SSRS/F13_RfqItem/F13_RfqItemIndex.cshtml";
            }

            public static class F14_WinnerAnnouncement
            {
                public const string F14_WinnerAnnouncementIndex = "~/Modules/SSRS/F14_WinnerAnnouncement/F14_WinnerAnnouncementIndex.cshtml";
                public const string WinnerEmail = "~/Modules/SSRS/F14_WinnerAnnouncement/WinnerEmail.cshtml";
            }

            public static class F15_ObjectionProcess
            {
                public const string F15_ObjectionProcessIndex = "~/Modules/SSRS/F15_ObjectionProcess/F15_ObjectionProcessIndex.cshtml";
            }

            public static class F16_WinnerDesignation
            {
                public const string F16_WinnerDesignationIndex = "~/Modules/SSRS/F16_WinnerDesignation/F16_WinnerDesignationIndex.cshtml";
            }

            public static class F17_PurchOrderDocUpload
            {
                public const string F17_PurchOrderDocUploadIndex = "~/Modules/SSRS/F17_PurchOrderDocUpload/F17_PurchOrderDocUploadIndex.cshtml";
            }

            public static class F19_CommitteeApproval
            {
                public const string F19_Approval = "~/Modules/SSRS/F19_CommitteeApproval/F19_Approval.cshtml";
                public const string F19_CommitteeApprovalIndex = "~/Modules/SSRS/F19_CommitteeApproval/F19_CommitteeApprovalIndex.cshtml";
            }

            public static class F19_CommitteeMember
            {
                public const string F19_CommitteeMemberIndex = "~/Modules/SSRS/F19_CommitteeMember/F19_CommitteeMemberIndex.cshtml";
            }

            public static class F19_ProcParticipant
            {
                public const string F19_ProcParticipantIndex = "~/Modules/SSRS/F19_ProcParticipant/F19_ProcParticipantIndex.cshtml";
            }

            public static class F19_ProcParticipantItem
            {
                public const string F19_ProcParticipantItemIndex = "~/Modules/SSRS/F19_ProcParticipantItem/F19_ProcParticipantItemIndex.cshtml";
            }

            public static class F2_ProcurementDocCreation
            {
                public const string F2_ProcurementDocCreationIndex = "~/Modules/SSRS/F2_ProcurementDocCreation/F2_ProcurementDocCreationIndex.cshtml";
            }

            public static class F20_ProcPr
            {
                public const string F20_ProcPrIndex = "~/Modules/SSRS/F20_ProcPr/F20_ProcPrIndex.cshtml";
            }

            public static class F20_Procurement
            {
                public const string F20_ProcurementIndex = "~/Modules/SSRS/F20_Procurement/F20_ProcurementIndex.cshtml";
            }

            public static class F20_PurchaseRequisitionTracking
            {
                public const string F20_PurchaseRequisitionTrackingIndex = "~/Modules/SSRS/F20_PurchaseRequisitionTracking/F20_PurchaseRequisitionTrackingIndex.cshtml";
            }

            public static class F3_1_InputOwnerEstimate
            {
                public const string F3_1_InputOwnerEstimateIndex = "~/Modules/SSRS/F3_1_InputOwnerEstimate/F3_1_InputOwnerEstimateIndex.cshtml";
            }

            public static class F3_CreateRFQ
            {
                public const string DocInviteVendor = "~/Modules/SSRS/F3_CreateRFQ/DocInviteVendor.cshtml";
                public const string DocProcurement = "~/Modules/SSRS/F3_CreateRFQ/DocProcurement.cshtml";
                public const string F3_CreateRFQIndex = "~/Modules/SSRS/F3_CreateRFQ/F3_CreateRFQIndex.cshtml";
            }

            public static class F4_Aanwijzing
            {
                public const string F4_AanwijzingIndex = "~/Modules/SSRS/F4_Aanwijzing/F4_AanwijzingIndex.cshtml";
            }

            public static class F5_ProcParticipantItem
            {
                public const string F5_ProcParticipantItemIndex = "~/Modules/SSRS/F5_ProcParticipantItem/F5_ProcParticipantItemIndex.cshtml";
            }

            public static class F5_SubmitTenderDocument
            {
                public const string F5_SubmitTenderDocumentIndex = "~/Modules/SSRS/F5_SubmitTenderDocument/F5_SubmitTenderDocumentIndex.cshtml";
            }

            public static class F6_OpenTenderDocument
            {
                public const string F6_OpenTenderDocumentIndex = "~/Modules/SSRS/F6_OpenTenderDocument/F6_OpenTenderDocumentIndex.cshtml";
            }

            public static class F6_ProcParticipant
            {
                public const string F6_ProcParticipantIndex = "~/Modules/SSRS/F6_ProcParticipant/F6_ProcParticipantIndex.cshtml";
            }

            public static class F6_ProcParticipantItem
            {
                public const string F6_ProcParticipantItemIndex = "~/Modules/SSRS/F6_ProcParticipantItem/F6_ProcParticipantItemIndex.cshtml";
            }

            public static class F7_ProcParticipant
            {
                public const string F7_ProcParticipantIndex = "~/Modules/SSRS/F7_ProcParticipant/F7_ProcParticipantIndex.cshtml";
            }

            public static class F7_ProcParticipantItem
            {
                public const string F7_ProcParticipantItemIndex = "~/Modules/SSRS/F7_ProcParticipantItem/F7_ProcParticipantItemIndex.cshtml";
            }

            public static class F7_TenderEvaluation
            {
                public const string F7_Evaluation = "~/Modules/SSRS/F7_TenderEvaluation/F7_Evaluation.cshtml";
                public const string F7_TenderEvaluationIndex = "~/Modules/SSRS/F7_TenderEvaluation/F7_TenderEvaluationIndex.cshtml";
                public const string F7_TextCommittee = "~/Modules/SSRS/F7_TenderEvaluation/F7_TextCommittee.cshtml";
            }

            public static class F8_ProcParticipant
            {
                public const string F8_ProcParticipantIndex = "~/Modules/SSRS/F8_ProcParticipant/F8_ProcParticipantIndex.cshtml";
            }

            public static class F8_TechnicalClarification
            {
                public const string F8_Clarification = "~/Modules/SSRS/F8_TechnicalClarification/F8_Clarification.cshtml";
                public const string F8_TechnicalClarificationIndex = "~/Modules/SSRS/F8_TechnicalClarification/F8_TechnicalClarificationIndex.cshtml";
            }

            public static class F9_PriceEvaluation
            {
                public const string F9_Price = "~/Modules/SSRS/F9_PriceEvaluation/F9_Price.cshtml";
                public const string F9_PriceEvaluationIndex = "~/Modules/SSRS/F9_PriceEvaluation/F9_PriceEvaluationIndex.cshtml";
            }

            public static class F9_ProcParticipantItem
            {
                public const string F9_ProcParticipantItemIndex = "~/Modules/SSRS/F9_ProcParticipantItem/F9_ProcParticipantItemIndex.cshtml";
            }

            public static class OrderType
            {
                public const string OrderTypeIndex = "~/Modules/SSRS/OrderType/OrderTypeIndex.cshtml";
            }

            public static class ProcParticipant
            {
                public const string ProcParticipantIndex = "~/Modules/SSRS/ProcParticipant/ProcParticipantIndex.cshtml";
            }

            public static class ProcParticipantItem
            {
                public const string ProcParticipantItemIndex = "~/Modules/SSRS/ProcParticipantItem/ProcParticipantItemIndex.cshtml";
            }

            public static class ProcPr
            {
                public const string ProcPrIndex = "~/Modules/SSRS/ProcPr/ProcPrIndex.cshtml";
            }

            public static class ProcStatus
            {
                public const string ProcStatusIndex = "~/Modules/SSRS/ProcStatus/ProcStatusIndex.cshtml";
            }

            public static class Procurement
            {
                public const string ProcurementIndex = "~/Modules/SSRS/Procurement/ProcurementIndex.cshtml";
            }

            public static class ProcurementMethod
            {
                public const string ProcurementMethodIndex = "~/Modules/SSRS/ProcurementMethod/ProcurementMethodIndex.cshtml";
            }

            public static class ProcurementType
            {
                public const string ProcurementTypeIndex = "~/Modules/SSRS/ProcurementType/ProcurementTypeIndex.cshtml";
            }

            public static class ProcValueRange
            {
                public const string ProcValueRangeIndex = "~/Modules/SSRS/ProcValueRange/ProcValueRangeIndex.cshtml";
            }

            public static class PurchaseRequisition
            {
                public const string PurchaseRequisitionIndex = "~/Modules/SSRS/PurchaseRequisition/PurchaseRequisitionIndex.cshtml";
            }

            public static class PurchDocTextRef
            {
                public const string PurchDocTextRefIndex = "~/Modules/SSRS/PurchDocTextRef/PurchDocTextRefIndex.cshtml";
            }

            public static class Report
            {
                public const string _ReportView = "~/Modules/SSRS/Report/_ReportView.cshtml";
                public const string ReportViewerIndex = "~/Modules/SSRS/Report/ReportViewerIndex.cshtml";
            }

            public static class ReportOther
            {
                public const string _ReportView = "~/Modules/SSRS/ReportOther/_ReportView.cshtml";
                public const string ReportViewerIndex = "~/Modules/SSRS/ReportOther/ReportViewerIndex.cshtml";
            }

            public static class Config
            {
                public const string _ReportView = "~/Modules/SSRS/ReportOther/_ReportView.cshtml";
                public const string ReportViewerIndex = "~/Modules/SSRS/ReportOther/ReportViewerIndex.cshtml";
            }

            public static class ReportViewerA
            {
                public const string ReportViewerAIndex = "~/Modules/SSRS/ReportViewerA/ReportViewerAIndex.cshtml";
            }

            public static class RfqItem
            {
                public const string RfqItemIndex = "~/Modules/SSRS/RfqItem/RfqItemIndex.cshtml";
            }

            public static class RfqItemText
            {
                public const string RfqItemTextIndex = "~/Modules/SSRS/RfqItemText/RfqItemTextIndex.cshtml";
            }

            public static class RfqText
            {
                public const string RfqTextIndex = "~/Modules/SSRS/RfqText/RfqTextIndex.cshtml";
            }

            public static class Vendor
            {
                public const string VendorIndex = "~/Modules/SSRS/Vendor/VendorIndex.cshtml";
            }

            public static class VendorAddress
            {
                public const string VendorAddressIndex = "~/Modules/SSRS/VendorAddress/VendorAddressIndex.cshtml";
            }

            public static class VendorLookupView
            {
                public const string VendorLookupViewIndex = "~/Modules/SSRS/VendorLookupView/VendorLookupViewIndex.cshtml";
            }

            public static class VendorRepresentative
            {
                public const string VendorRepresentativeIndex = "~/Modules/SSRS/VendorRepresentative/VendorRepresentativeIndex.cshtml";
            }
        }
    }
}

