
namespace SCMONLINE.Procurement {
    import fld = CommitteeRoleRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeRoleGrid extends _Ext.GridBase<CommitteeRoleRow, any> {
        protected getColumnsKey() { return 'Procurement.CommitteeRole'; }
        protected getDialogType() { return CommitteeRoleDialog; }
        protected getIdProperty() { return CommitteeRoleRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeRoleRow.localTextPrefix; }
        protected getService() { return CommitteeRoleService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}