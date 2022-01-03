
namespace SCMONLINE.Procurement {
    import fld = ProcurementTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementTypeGrid extends _Ext.GridBase<ProcurementTypeRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcurementType'; }
        protected getDialogType() { return ProcurementTypeDialog; }
        protected getIdProperty() { return ProcurementTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementTypeRow.localTextPrefix; }
        protected getService() { return ProcurementTypeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}