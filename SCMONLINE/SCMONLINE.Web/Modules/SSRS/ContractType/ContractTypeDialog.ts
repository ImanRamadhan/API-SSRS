
namespace SCMONLINE.Procurement {
    import fld = ContractTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ContractTypeDialog extends _Ext.DialogBase<ContractTypeRow, any> {
        protected getFormKey() { return ContractTypeForm.formKey; }
        protected getIdProperty() { return ContractTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ContractTypeRow.localTextPrefix; }
        protected getNameProperty() { return ContractTypeRow.nameProperty; }
        protected getService() { return ContractTypeService.baseUrl; }

        protected form = new ContractTypeForm(this.idPrefix);

    }
}