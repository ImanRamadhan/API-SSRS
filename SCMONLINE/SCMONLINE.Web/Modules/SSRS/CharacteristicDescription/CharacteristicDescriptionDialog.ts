
namespace SCMONLINE.Procurement {
    import fld = CharacteristicDescriptionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CharacteristicDescriptionDialog extends _Ext.DialogBase<CharacteristicDescriptionRow, any> {
        protected getFormKey() { return CharacteristicDescriptionForm.formKey; }
        protected getIdProperty() { return CharacteristicDescriptionRow.idProperty; }
        protected getLocalTextPrefix() { return CharacteristicDescriptionRow.localTextPrefix; }
        protected getNameProperty() { return CharacteristicDescriptionRow.nameProperty; }
        protected getService() { return CharacteristicDescriptionService.baseUrl; }

        protected form = new CharacteristicDescriptionForm(this.idPrefix);

    }
}