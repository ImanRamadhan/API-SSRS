/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {
    import fld = Procurement.ProcParticipantItemRow.Fields

    @Serenity.Decorators.registerClass()
    export class F5_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey() { return "Procurement.F5_ProcParticipantItem"; }
        protected getDialogType() { return F5_ProcParticipantItemDialog; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }

        public parentDialog: F5_SubmitTenderDocumentDialog;

        constructor(container: JQuery) {
            super(container);
            //  this.toolbar.element.remove();
            //q.initDetailEditor(this, this.form.someDetailField)
            let columns = this.slickGrid.getColumns();
            console.log(columns);
            //columns = columns.filter(f => f.field != 'RfqItemId');
            columns = columns.filter(f => f.field != 'ProcurementStatus');
            //columns = columns.filter(f => f.field != 'BidPrice');
            //columns = columns.filter(f => f.field != 'OwnerEstimate');
            columns = columns.filter(f => f.field != 'PurchasingDocument');
            //columns = columns.filter(f => f.field != 'Item');
            columns = columns.filter(f => f.field != 'DeletionIndicator');
            columns = columns.filter(f => f.field != 'RfqStatus');
            columns = columns.filter(f => f.field != 'LastChangedOn');
            //columns = columns.filter(f => f.field != 'ShortText');
            //columns = columns.filter(f => f.field != 'Material');
            //columns = columns.filter(f => f.field != 'Plant');
            //columns = columns.filter(f => f.field != 'StorageLocation');
            columns = columns.filter(f => f.field != 'ReqTrackingNumber');
            columns = columns.filter(f => f.field != 'MaterialGroup');
            columns = columns.filter(f => f.field != 'PurchasingInfoRec');
            columns = columns.filter(f => f.field != 'VendorMaterialNo');
            columns = columns.filter(f => f.field != 'TargetQuantity');
            //columns = columns.filter(f => f.field != 'OrderQuantity');
            //columns = columns.filter(f => f.field != 'OrderUnit');
            //columns = columns.filter(f => f.field != 'OrderPriceUnit');
            columns = columns.filter(f => f.field != 'QuantityConversion');
            columns = columns.filter(f => f.field != 'EqualTo');
            columns = columns.filter(f => f.field != 'Denominator');
            columns = columns.filter(f => f.field != 'NetOrderPrice');
            columns = columns.filter(f => f.field != 'PriceUnit');
            columns = columns.filter(f => f.field != 'NetOrderValue');
            columns = columns.filter(f => f.field != 'GrossOrderValue');
            columns = columns.filter(f => f.field != 'QuotationDeadline');
            columns = columns.filter(f => f.field != 'GrProcessingTime');
            columns = columns.filter(f => f.field != 'TaxCode');
            columns = columns.filter(f => f.field != 'BaseUnitOfMeasure');
            columns = columns.filter(f => f.field != 'ShippingInstr');
            columns = columns.filter(f => f.field != 'OaTargetValue');
            columns = columns.filter(f => f.field != 'PriceDate');
            columns = columns.filter(f => f.field != 'PurchDocCategory');
            columns = columns.filter(f => f.field != 'EffectiveValue');
            columns = columns.filter(f => f.field != 'AffectsCommitments');
            columns = columns.filter(f => f.field != 'MaterialType');
            columns = columns.filter(f => f.field != 'SubitemCategory');
            columns = columns.filter(f => f.field != 'SubItems');
            columns = columns.filter(f => f.field != 'Subtotal1');
            columns = columns.filter(f => f.field != 'Subtotal2');
            columns = columns.filter(f => f.field != 'Subtotal3');
            columns = columns.filter(f => f.field != 'Subtotal4');
            columns = columns.filter(f => f.field != 'Subtotal5');


            //var columns: Slick.Column[];
            //columns = [
            //    { name: "__id", field: "__id", width: 150, sortable: true, visible:false },
            //    { name: "ID", field: "RfqItemId", width: 150, sortable: true },
            //    { name: "Item", field: "Item" },
            //    { name: "Material", field: "Material" },
            //    { name: "ShortText", field: "ShortText" },
            //    { name: "OrderQuantity", field: "OrderQuantity" },
            //    { name: "OrderUnit", field: "OrderUnit" },
            //    { name: "OrderPriceUnit", field: "OrderPriceUnit" },
            //    { name: "OwnerEstimate", field: "OwnerEstimate" },
            //];

            this.slickGrid.setColumns(columns);
        }

        validateEntity(row, id) {
            console.log(row);
            row.RfqItemId = Q.toId(row.RfqItemId);

            var sameRfqItem = Q.tryFirst(this.view.getItems(), x => x.RfqItemId === row.RfqItemId);
            if (sameRfqItem && this.id(sameRfqItem) !== id) {
                Q.alert('This Item is already in list');
                return false;
            }
            console.log(row);

            row.ShortText = RfqItemRow.getLookup().itemById[row.RfqItemId].ShortText;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }

        protected AdjustRows(gridRows: any): any {

            //console.log(gridRows);
            gridRows.forEach(function (part, index) {
                //console.log(gridRows[index]);
                //this[index]['RfqItemId'] = this[index]['__id'];
                delete gridRows[index]['__id'];
            });

            return gridRows;
        }

        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            //var buttons = super.getButtons();
            var buttons = new Array();

            // add our export button
            buttons.push({
                title: 'Export to Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    console.log(this.options)

                    var gridRows = this.AdjustRows((this.slickGrid.getData() as any).getRows());

                    Q.postToService({ service: F5_ProcParticipantItemService.baseUrl + "/ListExcelBidPrice", request: gridRows, target: '_blank' });
                }
            });

            // add our import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new BidPriceImportDialog();
                    dialog.procParticipantItemsEditor = this;
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }



    }
}