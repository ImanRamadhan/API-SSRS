
namespace SCMONLINE.Default {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return ProcParticipantService.baseUrl; }

        protected form = new ProcParticipantForm(this.idPrefix);

    }
}