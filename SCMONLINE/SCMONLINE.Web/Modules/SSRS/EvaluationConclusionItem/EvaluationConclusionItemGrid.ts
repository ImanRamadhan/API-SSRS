
namespace SCMONLINE.Procurement {
    import fld = EvaluationConclusionItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EvaluationConclusionItemGrid extends _Ext.GridBase<EvaluationConclusionItemRow, any> {
        protected getColumnsKey() { return 'Procurement.EvaluationConclusionItem'; }
        protected getDialogType() { return EvaluationConclusionItemDialog; }
        protected getIdProperty() { return EvaluationConclusionItemRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationConclusionItemRow.localTextPrefix; }
        protected getService() { return EvaluationConclusionItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}