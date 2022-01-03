
namespace SCMONLINE.Procurement {
    import fld = ContractTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ContractTypeGrid extends _Ext.GridBase<ContractTypeRow, any> {
        protected getColumnsKey() { return 'Procurement.ContractType'; }
        protected getDialogType() { return ContractTypeDialog; }
        protected getIdProperty() { return ContractTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ContractTypeRow.localTextPrefix; }
        protected getService() { return ContractTypeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}