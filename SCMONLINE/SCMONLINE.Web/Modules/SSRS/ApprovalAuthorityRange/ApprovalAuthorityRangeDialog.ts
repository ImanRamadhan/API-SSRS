
namespace SCMONLINE.Procurement {
    import fld = ApprovalAuthorityRangeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ApprovalAuthorityRangeDialog extends _Ext.DialogBase<ApprovalAuthorityRangeRow, any> {
        protected getFormKey() { return ApprovalAuthorityRangeForm.formKey; }
        protected getIdProperty() { return ApprovalAuthorityRangeRow.idProperty; }
        protected getLocalTextPrefix() { return ApprovalAuthorityRangeRow.localTextPrefix; }
        protected getNameProperty() { return ApprovalAuthorityRangeRow.nameProperty; }
        protected getService() { return ApprovalAuthorityRangeService.baseUrl; }

        protected form = new ApprovalAuthorityRangeForm(this.idPrefix);

    }
}