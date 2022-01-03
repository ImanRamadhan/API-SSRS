/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class PurchaseRequestsEditor extends Common.GridEditorBase<ProcPrRow> {
        protected getColumnsKey() { return "Procurement.ProcPr"; }
        protected getDialogType() { return ProcPrDialog; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);

            //this.toolbar.element.remove();


        }

        //validateEntity(row, id) {
        //    row.ProcPrId = Q.toId(row.ProcPrId);

        //    var sameProcPr = Q.tryFirst(this.view.getItems(), x => x.ProcPrId === row.ProcPrId);
        //    if (sameProcPr && this.id(sameProcPr) !== id) {
        //        Q.alert('This ProcPr is already in list');
        //        return false;
        //    }
        //    console.log(row);
        //    console.log(ProcPrRow.getLookup().itemById[row.ProcPrId]);

        //    row.TextLine = ProcPrRow.getLookup().itemById[row.ProcPrId].TextLine;
        //    row.TextMeaning = ProcPrRow.getLookup().itemById[row.ProcPrId].TextMeaning;
        //    row.TextId = ProcPrRow.getLookup().itemById[row.ProcPrId].TextId;
        //    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
        //    return true;
        //}
        
    }
}