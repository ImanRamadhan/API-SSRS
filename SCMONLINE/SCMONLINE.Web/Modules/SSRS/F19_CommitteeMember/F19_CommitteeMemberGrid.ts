
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_CommitteeMemberGrid extends _Ext.GridBase<CommitteeMemberRow, any> {
        protected getColumnsKey() { return 'Procurement.F19_CommitteeMember'; }
        protected getDialogType() { return F19_CommitteeMemberDialog; }
        protected getIdProperty() { return CommitteeMemberRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }
        protected getService() { return F19_CommitteeMemberService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}