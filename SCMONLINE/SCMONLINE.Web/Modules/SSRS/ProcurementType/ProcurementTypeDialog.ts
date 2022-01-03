
namespace SCMONLINE.Procurement {
    import fld = ProcurementTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementTypeDialog extends _Ext.DialogBase<ProcurementTypeRow, any> {
        protected getFormKey() { return ProcurementTypeForm.formKey; }
        protected getIdProperty() { return ProcurementTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementTypeRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementTypeRow.nameProperty; }
        protected getService() { return ProcurementTypeService.baseUrl; }

        protected form = new ProcurementTypeForm(this.idPrefix);

    }
}