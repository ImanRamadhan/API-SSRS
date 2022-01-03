
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcParticipant'; }
        protected getDialogType() { return ProcParticipantDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return ProcParticipantService.baseUrl; }

        private isHighestVersionFilter: Serenity.QuickFilter<Serenity.SelectEditor, Serenity.SelectEditorOptions>;
        constructor(container: JQuery, options) {
            super(container, options);

        //    this.isHighestVersionFilter = {
        //    type: Serenity.SelectEditor,
        //    title: "Is Highest Version",
        //    options: {
        //        items: ["yes", "no"]
        //    },
        //    handler: h => {
        //        var request = (h.request as CustomGridListRequest);
        //        var value = (h.widget as Serenity.SelectEditor).value;

        //        if (Q.trimToNull(value) !== null) {
        //            request.IsHighestVersion = value == "yes" ? true : false;
        //            h.active = true;
        //        }
        //        else {
        //            h.active = false;
        //        }

        //        h.handled = true;
        //    }
        //};

        //this.addQuickFilter(this.isHighestVersionFilter);
        }
    }
}