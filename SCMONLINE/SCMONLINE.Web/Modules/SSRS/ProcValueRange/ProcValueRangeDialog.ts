
namespace SCMONLINE.Procurement {
    import fld = ProcValueRangeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcValueRangeDialog extends _Ext.DialogBase<ProcValueRangeRow, any> {
        protected getFormKey() { return ProcValueRangeForm.formKey; }
        protected getIdProperty() { return ProcValueRangeRow.idProperty; }
        protected getLocalTextPrefix() { return ProcValueRangeRow.localTextPrefix; }
        protected getNameProperty() { return ProcValueRangeRow.nameProperty; }
        protected getService() { return ProcValueRangeService.baseUrl; }

        protected form = new ProcValueRangeForm(this.idPrefix);

    }
}