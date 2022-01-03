
namespace SCMONLINE.Inbox {

    @Serenity.Decorators.registerClass()
    export class NotificationDialog extends _Ext.DialogBase<NotificationRow, any> {
        protected getFormKey() { return NotificationForm.formKey; }
        protected getIdProperty() { return NotificationRow.idProperty; }
        protected getLocalTextPrefix() { return NotificationRow.localTextPrefix; }
        protected getNameProperty() { return NotificationRow.nameProperty; }
        protected getService() { return NotificationService.baseUrl; }

        private texteditor: Serenity.HtmlContentEditor;


        protected form = new NotificationForm(this.idPrefix);


        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.splice(0, 4);
            return buttons;

        }


        //constructor() {
        //    super();
        //    this.texteditor = new Serenity.HtmlNoteContentEditor(this.byId('Text'));
        //}

        //protected getTemplate() {
        //    return (

        //        "<form id='~_Form' class='s-Form'>" +
        //        "<textarea id='~_Text' class='required'></textarea>" +
        //        "</form>");
        //}

        //protected getDialogOptions() {
        //    var opt = super.getDialogOptions();

        //    opt.buttons = [{
        //        text: Q.text('Dialogs.OkButton'),
        //        click: () => {
        //            if (!this.validateForm()) {
        //                return;
        //            }

        //            this.okClick && this.okClick();
        //        }
        //    }, {
        //        text: Q.text('Dialogs.CancelButton'),
        //        click: () => this.dialogClose()
        //    }
        //    ];

        //    return opt;
        //}

        //get text(): string {
        //    return this.texteditor.value;
        //}

        //set text(value: string) {
        //    this.texteditor.value = value;
        //}

        //public okClick: () => void;


    }
}