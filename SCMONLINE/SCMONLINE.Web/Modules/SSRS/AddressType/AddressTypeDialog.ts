
namespace SCMONLINE.Procurement {
    import fld = AddressTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AddressTypeDialog extends _Ext.DialogBase<AddressTypeRow, any> {
        protected getFormKey() { return AddressTypeForm.formKey; }
        protected getIdProperty() { return AddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
        protected getNameProperty() { return AddressTypeRow.nameProperty; }
        protected getService() { return AddressTypeService.baseUrl; }

        protected form = new AddressTypeForm(this.idPrefix);

    }
}