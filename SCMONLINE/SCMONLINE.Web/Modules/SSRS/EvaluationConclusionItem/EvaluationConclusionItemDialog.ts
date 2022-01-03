
namespace SCMONLINE.Procurement {
    import fld = EvaluationConclusionItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EvaluationConclusionItemDialog extends _Ext.DialogBase<EvaluationConclusionItemRow, any> {
        protected getFormKey() { return EvaluationConclusionItemForm.formKey; }
        protected getIdProperty() { return EvaluationConclusionItemRow.idProperty; }
        protected getLocalTextPrefix() { return EvaluationConclusionItemRow.localTextPrefix; }
        protected getNameProperty() { return EvaluationConclusionItemRow.nameProperty; }
        protected getService() { return EvaluationConclusionItemService.baseUrl; }

        protected form = new EvaluationConclusionItemForm(this.idPrefix);

    }
}