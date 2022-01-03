/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {
    import fld = Procurement.ProcParticipantItemRow.Fields

    @Serenity.Decorators.registerClass()
    export class F9_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey() { return "Procurement.F9_ProcParticipantItem"; }
        protected getDialogType() { return F9_ProcParticipantItemDialog; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }

        public parentDialog: F9_PriceEvaluationDialog;

        constructor(container: JQuery) {
            super(container);

            this.toolbar.element.toggle(false);

            //let columns = this.slickGrid.getColumns();

            //console.log(columns);
            ////columns = columns.filter(f => f.field != 'RfqItemId');
            //columns = columns.filter(f => f.field != 'ProcurementStatus');


        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            (dialog as F9_ProcParticipantItemDialog).parentDialog = this.parentDialog;
        }


        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setGrouping(
                [
                    {
                        formatter: x => x.rows[0][fld.VendorName] + ' (' + x.value + '), Doc Submit Date: ' + Q.formatDate(x.rows[0][fld.F5ParticipantSubmitDate], 'dd/MM/yyyy HH:mm:ss'),
                        getter: fld.ProcParticipantVendorId
                    },
                ]);

            ////ProcParticipantVendorId
            //this.view.setSummaryOptions({
            //    aggregators: [
            //        //new Slick.Aggregators.Avg(fld.UnitPrice),
            //        new Slick.Aggregators.Sum(fld.BidPrice),
            //        //new Slick.Aggregators.Max(fld.UnitsOnOrder),
            //        //new Slick.Aggregators.Avg(fld.ReorderLevel)
            //    ]
            //});

            return grid;
        }

        //protected getColumns() {
        //    var columns = super.getColumns();
        //    console.log(columns);
        //    Q.first(columns, x => x.field === fld.BidPrice)
        //        .groupTotalsFormatter = (totals, col) =>
        //            (totals.sum ? ('sum: ' + Q.coalesce(totals.sum[col.field], '')) : '');

        //    //Q.first(columns, x => x.field === fld.ReorderLevel)
        //    //    .groupTotalsFormatter = (totals, col) =>
        //    //        (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');

        //    return columns;
        //}

        //protected getSlickOptions() {
        //    var opt = super.getSlickOptions();
        //    opt.showFooterRow = true;
        //    return opt;
        //}

        protected usePager() {
            return false;
        }


        validateEntity(row, id) {
            let itemRow = (row as SCMONLINE.Procurement.ProcParticipantItemRow);
            //row
            //row.ProcParticipantItemId = Q.toId(row.ProcParticipantItemId);
            //var sameProcParticipantItem = Q.tryFirst(this.view.getItems(), x => x.ProcParticipantItemId === row.ProcParticipantItemId);
            //if (sameProcParticipantItem && this.id(sameProcParticipantItem) !== id) {
            //    Q.alert('This ProcParticipantItem is already in list');
            //    return false;
            //}
            //console.log(row);
            //console.log(ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId]);

            //row.TextLine = ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId].TextLine;
            //row.TextMeaning = ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId].TextMeaning;
            //row.TextId = ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId].TextId;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);

            //row.ProcParticipantVendorId = ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId].ProcParticipantVendorId;
            //row.VendorName = ProcParticipantItemRow.getLookup().itemById[row.ProcParticipantItemId].VendorName;

            //var newRow = ProcParticipantItemRow.getLookup().items.filter(function (item) {
            //    //for (var key in filter) {
            //    //console.log("row.Item");
            //    //console.log(row.Item);
            //    //console.log("item[\"Item\"]");
            //    //console.log(item["Item"]);
            //    //console.log("item[\"Item\"] == row.Item")
            //    //console.log(item["Item"] == row.Item);
            //    console.log("item");
            //    console.log(item);
            //    console.log("item[ProcParticipantId]");
            //    console.log(item["ProcParticipantId"]);
            //    console.log("row.ProcParticipantId");
            //    console.log(row.ProcParticipantId);

            //    if (item["ProcParticipantId"] == row.ProcParticipantId
            //        && item["Item"] == row.Item) {
            //        console.log("true")
            //        return true;
            //    } else {
            //        console.log("false")
            //        return false;
            //    }
            //    //}
            //});
            //console.log("newRow");
            //console.log(newRow);
            //row.EvaluationConclusionItemName = newRow[0].EvaluationConclusionItemName;
            itemRow.EvaluationConclusionItemName = EvaluationConclusionItemRow.getLookup().itemById[itemRow.EvaluationConclusionItemId].Name;
            return true;
        }


    }
}