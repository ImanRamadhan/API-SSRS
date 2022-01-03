
namespace SCMONLINE.Procurement {
    import fld = CurrencyRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CurrencyDialog extends _Ext.DialogBase<CurrencyRow, any> {
        protected getFormKey() { return CurrencyForm.formKey; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyRow.nameProperty; }
        protected getService() { return CurrencyService.baseUrl; }

        protected form = new CurrencyForm(this.idPrefix);

    }
}