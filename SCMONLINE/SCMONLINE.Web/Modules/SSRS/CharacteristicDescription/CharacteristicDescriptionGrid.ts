
namespace SCMONLINE.Procurement {
    import fld = CharacteristicDescriptionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CharacteristicDescriptionGrid extends _Ext.GridBase<CharacteristicDescriptionRow, any> {
        protected getColumnsKey() { return 'Procurement.CharacteristicDescription'; }
        protected getDialogType() { return CharacteristicDescriptionDialog; }
        protected getIdProperty() { return CharacteristicDescriptionRow.idProperty; }
        protected getLocalTextPrefix() { return CharacteristicDescriptionRow.localTextPrefix; }
        protected getService() { return CharacteristicDescriptionService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}