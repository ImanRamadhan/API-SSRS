
namespace SCMONLINE.Administration {
    import fld = SettingRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SettingGrid extends _Ext.GridBase<SettingRow, any> {
        protected getColumnsKey() { return 'Administration.Setting'; }
        protected getDialogType() { return SettingDialog; }
        protected getIdProperty() { return SettingRow.idProperty; }
        protected getLocalTextPrefix() { return SettingRow.localTextPrefix; }
        protected getService() { return SettingService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}