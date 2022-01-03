
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F13_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F13_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F13_ProcParticipantService.baseUrl; }

        protected form = new F13_ProcParticipantForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            return [];
        }

    }
}