
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
    export class ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
    //export class ProcParticipantItemDialog extends Serenity.EntityDialog<ProcParticipantItemRow, any> {
        protected getFormKey() { return ProcParticipantItemForm.formKey; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        protected getService() { return ProcParticipantItemService.baseUrl; }

        protected form = new ProcParticipantItemForm(this.idPrefix);

    }
}