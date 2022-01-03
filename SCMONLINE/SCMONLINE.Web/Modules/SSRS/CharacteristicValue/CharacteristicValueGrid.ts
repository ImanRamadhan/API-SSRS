
namespace SCMONLINE.Procurement {
    import fld = CharacteristicValueRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CharacteristicValueGrid extends _Ext.GridBase<CharacteristicValueRow, any> {
        protected getColumnsKey() { return 'Procurement.CharacteristicValue'; }
        protected getDialogType() { return CharacteristicValueDialog; }
        protected getIdProperty() { return CharacteristicValueRow.idProperty; }
        protected getLocalTextPrefix() { return CharacteristicValueRow.localTextPrefix; }
        protected getService() { return CharacteristicValueService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}