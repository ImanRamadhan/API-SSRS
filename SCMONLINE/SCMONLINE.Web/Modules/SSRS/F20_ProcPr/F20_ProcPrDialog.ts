
namespace SCMONLINE.Procurement {
    import fld = ProcPrRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F20_ProcPrDialog extends _Ext.DialogBase<ProcPrRow, any> {
        protected getFormKey() { return F20_ProcPrForm.formKey; }
        protected getIdProperty() { return ProcPrRow.idProperty; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }
        protected getNameProperty() { return ProcPrRow.nameProperty; }
        protected getService() { return F20_ProcPrService.baseUrl; }

        protected form = new F20_ProcPrForm(this.idPrefix);

    }
}