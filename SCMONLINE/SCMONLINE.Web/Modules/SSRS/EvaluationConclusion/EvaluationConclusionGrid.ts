
namespace SCMONLINE.Procurement {
    import fld = EvaluationConclusionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EvaluationConclusionGrid extends _Ext.GridBase<EvaluationConclusionRow, any> {
        protected getColumnsKey() { return 'Procurement.EvaluationConclusion'; }
        protected getDialogType() { return EvaluationConclusionDialog; }
        protected getIdProperty() { return EvaluationConclusionRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationConclusionRow.localTextPrefix; }
        protected getService() { return EvaluationConclusionService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}