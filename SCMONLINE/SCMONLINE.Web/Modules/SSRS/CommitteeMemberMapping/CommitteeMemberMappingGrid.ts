
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberMappingRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeMemberMappingGrid extends _Ext.GridBase<CommitteeMemberMappingRow, any> {
        protected getColumnsKey() { return 'Procurement.CommitteeMemberMapping'; }
        protected getDialogType() { return CommitteeMemberMappingDialog; }
        protected getIdProperty() { return CommitteeMemberMappingRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberMappingRow.localTextPrefix; }
        protected getService() { return CommitteeMemberMappingService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}