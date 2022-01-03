/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class RfqTextsEditor extends Common.GridEditorBase<RfqTextRow> {
        protected getColumnsKey() { return "Procurement.RfqText"; }
        protected getDialogType() { return RfqTextDialog; }
        protected getLocalTextPrefix() { return RfqTextRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);

            //this.toolbar.element.remove();


        }

        validateEntity(row, id) {
            row.RfqTextId = Q.toId(row.RfqTextId);
            console.log(row.RfqTextId)
            var sameRfqText = Q.tryFirst(this.view.getItems(), x => x.RfqTextId === row.RfqTextId);
            if (sameRfqText && this.id(sameRfqText) !== id) {
                Q.alert('This RfqText is already in list');
                return false;
            }
            console.log(row);
            console.log(RfqTextRow.getLookup().itemById[row.RfqTextId]);
            //Not Clear when get data from sap? turn on when function not working
        //    row.TextLine = RfqTextRow.getLookup().itemById[row.RfqTextId].TextLine;
        //    row.TextMeaning = RfqTextRow.getLookup().itemById[row.RfqTextId].TextMeaning;
        //    row.TextId = RfqTextRow.getLookup().itemById[row.RfqTextId].TextId;
        //    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        
    }
}