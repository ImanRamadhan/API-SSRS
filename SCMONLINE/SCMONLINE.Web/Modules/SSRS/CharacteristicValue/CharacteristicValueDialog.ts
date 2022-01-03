
namespace SCMONLINE.Procurement {
    import fld = CharacteristicValueRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CharacteristicValueDialog extends _Ext.DialogBase<CharacteristicValueRow, any> {
        protected getFormKey() { return CharacteristicValueForm.formKey; }
        protected getIdProperty() { return CharacteristicValueRow.idProperty; }
        protected getLocalTextPrefix() { return CharacteristicValueRow.localTextPrefix; }
        protected getNameProperty() { return CharacteristicValueRow.nameProperty; }
        protected getService() { return CharacteristicValueService.baseUrl; }

        protected form = new CharacteristicValueForm(this.idPrefix);

    }
}