
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
        protected getFormKey() { return F19_ProcParticipantItemForm.formKey; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        protected getService() { return F19_ProcParticipantItemService.baseUrl; }

        protected form = new F19_ProcParticipantItemForm(this.idPrefix);

    }
}