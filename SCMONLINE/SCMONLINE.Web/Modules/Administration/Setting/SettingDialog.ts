
namespace SCMONLINE.Administration {
    import fld = SettingRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SettingDialog extends _Ext.DialogBase<SettingRow, any> {
        protected getFormKey() { return SettingForm.formKey; }
        protected getIdProperty() { return SettingRow.idProperty; }
        protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }
        protected getNameProperty() { return SettingRow.nameProperty; }
        protected getService() { return SettingService.baseUrl; }

        protected form = new SettingForm(this.idPrefix);

    }
}