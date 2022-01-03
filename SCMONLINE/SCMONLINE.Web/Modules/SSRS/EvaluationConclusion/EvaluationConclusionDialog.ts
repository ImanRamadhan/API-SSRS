
namespace SCMONLINE.Procurement {
    import fld = EvaluationConclusionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EvaluationConclusionDialog extends _Ext.DialogBase<EvaluationConclusionRow, any> {
        protected getFormKey() { return EvaluationConclusionForm.formKey; }
        protected getIdProperty() { return EvaluationConclusionRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationConclusionRow.localTextPrefix; }
        protected getNameProperty() { return EvaluationConclusionRow.nameProperty; }
        protected getService() { return EvaluationConclusionService.baseUrl; }

        protected form = new EvaluationConclusionForm(this.idPrefix);

    }
}