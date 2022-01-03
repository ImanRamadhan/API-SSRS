
namespace SCMONLINE.Procurement {
    import fld = CommitteeTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeTypeGrid extends _Ext.GridBase<CommitteeTypeRow, any> {
        protected getColumnsKey() { return 'Procurement.CommitteeType'; }
        protected getDialogType() { return CommitteeTypeDialog; }
        protected getIdProperty() { return CommitteeTypeRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeTypeRow.localTextPrefix; }
        protected getService() { return CommitteeTypeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}