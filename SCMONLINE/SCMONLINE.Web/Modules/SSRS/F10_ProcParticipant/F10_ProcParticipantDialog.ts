
namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class F10_ProcParticipantDialog extends Serenity.EntityDialog<ProcParticipantRow, any> {
        protected getFormKey() { return F10_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F10_ProcParticipantService.baseUrl; }

        protected form = new F10_ProcParticipantForm(this.idPrefix);

    }
}