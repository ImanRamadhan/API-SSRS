
namespace SCMONLINE.Procurement {
    import fld = ApprovalAuthorityRangeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ApprovalAuthorityRangeGrid extends _Ext.GridBase<ApprovalAuthorityRangeRow, any> {
        protected getColumnsKey() { return 'Procurement.ApprovalAuthorityRange'; }
        protected getDialogType() { return ApprovalAuthorityRangeDialog; }
        protected getIdProperty() { return ApprovalAuthorityRangeRow.idProperty; }
        protected getLocalTextPrefix() { return ApprovalAuthorityRangeRow.localTextPrefix; }
        protected getService() { return ApprovalAuthorityRangeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}