namespace SCMONLINE.Procurement {
    @Serenity.Decorators.registerEditor()
    export class ProcParticipantLookupEditor extends Serenity.LookupEditorBase<ProcParticipantLookupEditorOptions, any> {

        constructor(container: JQuery, opt?: ProcParticipantLookupEditorOptions) {
            super(container, opt);

            container.data("VendorId", opt.vendorId);
            container.data("Name", opt.name);
            container.data("PenaltyCode", opt.penaltyCode);
        }

        public getSelect2Options() {
            var selec2Options = super.getSelect2Options();

            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;

            return selec2Options;
        }

        protected myFormatSelection(item: Serenity.Select2Item): string {
            if (item === undefined)
                return null;

            var vendorId = item.source[this.element.data("VendorId")];
            var name = item.source[this.element.data("Name")];
            var penaltyCode = item.source[this.element.data("PenltyCode")];

            var title = "Code: " + vendorId;
            title += " - " + name;

            return "<div title='" + title + "'><b>" + vendorId + "</b>&nbsp;-&nbsp;" + name + "</div>";
        }

        protected myFormatResult(item: Serenity.Select2Item) {
            var vendorId = item.source[this.element.data("VendorId")];
            var name = item.source[this.element.data("Name")];
            var penaltyCode = item.source[this.element.data("PenaltyCode")];

            var title = "VendorId: " + vendorId;
            title += " - " + name;
            title += " - " + penaltyCode;

            var markup = '<div class="row">' +
                '<div class="col-xs-2" style="white-space: nowrap"><b>' + vendorId + "</b>" + "</div>" +
                '<div class="col-xs-10"><small>' + name + '</small></div>' +
                '<div class="col-xs-10"><small>' + penaltyCode + '</small></div>' +
                '</div>';

            // This for search on code and description
            item.text = vendorId + " " + name+" "+penaltyCode;

            return markup;
        }
    }
    export interface ProcParticipantLookupEditorOptions extends Serenity.LookupEditorOptions {
        vendorId: string;
        name: string;
        penaltyCode: string;
    }
}