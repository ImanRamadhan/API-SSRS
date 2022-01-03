
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class RfqItemDialog extends _Ext.DialogBase<RfqItemRow, any> {
    export class RfqItemDialog extends Common.GridEditorDialog<RfqItemRow> {
        protected getFormKey() { return RfqItemForm.formKey; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getNameProperty() { return RfqItemRow.nameProperty; }
        protected getService() { return RfqItemService.baseUrl; }

        protected form = new RfqItemForm(this.idPrefix);

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);

            return buttons;
        }

    }
}