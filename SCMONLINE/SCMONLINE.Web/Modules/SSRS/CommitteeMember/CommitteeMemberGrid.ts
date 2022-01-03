
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeMemberGrid extends _Ext.GridBase<CommitteeMemberRow, any> {
        protected getColumnsKey() { return 'Procurement.CommitteeMember'; }
        protected getDialogType() { return CommitteeMemberDialog; }
        protected getIdProperty() { return CommitteeMemberRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }
        protected getService() { return CommitteeMemberService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}