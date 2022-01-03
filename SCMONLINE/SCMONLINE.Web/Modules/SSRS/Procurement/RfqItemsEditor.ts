/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class RfqItemsEditor extends Common.GridEditorBase<RfqItemRow> {
        protected getColumnsKey() { return "Procurement.RfqItem"; }
        protected getDialogType() { return RfqItemDialog; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);
            //  this.toolbar.element.remove();
            //q.initDetailEditor(this, this.form.someDetailField)
            let columns = this.slickGrid.getColumns();
            console.log(columns);
            //columns = columns.filter(f => f.field != 'RfqItemId');
            columns = columns.filter(f => f.field != 'ProcurementStatus');
            columns = columns.filter(f => f.field != 'OwnerEstimateReview');
            //columns = columns.filter(f => f.field != 'OwnerEstimate');
            columns = columns.filter(f => f.field != 'PurchasingDocument');
            //columns = columns.filter(f => f.field != 'Item');
            columns = columns.filter(f => f.field != 'DeletionIndicator');
            columns = columns.filter(f => f.field != 'RfqStatus');
            columns = columns.filter(f => f.field != 'LastChangedOn');
            //columns = columns.filter(f => f.field != 'ShortText');
            //columns = columns.filter(f => f.field != 'Material');
            columns = columns.filter(f => f.field != 'Plant');
            columns = columns.filter(f => f.field != 'StorageLocation');    
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

            // add our import button
            buttons.push({
                title: 'Export to Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    console.log(this.options)
                    //if (!this.options.onViewSubmit()) {
                    //    return;
                    //}
                    //let grid = this.options.grid;
                    //let grid = this.slickGrid;
                    //var request: Serenity.ListRequest;
                    //request = {};
                    //request.Take = 0;
                    //request.Skip = 0;
                    //request.Criteria = Serenity.Criteria.and("RfqItemId":"");
                    ////var sortBy = grid.getSortColumns();
                    ////if (sortBy) {
                    //    //request.Sort = sortBy;
                    //    //request.Sort = ["Item"];
                    ////}

                    //request.IncludeColumns = [];
                    ////let columns = grid.getGrid().getColumns();
                    //let columns = grid.getColumns();
                    //for (let column of columns) {
                    //    request.IncludeColumns.push(column.id || column.field);
                    //}
                    //Q.postToService({ service: this.options.service, request: request, target: '_blank' });

                    var gridRows = this.AdjustRows((this.slickGrid.getData() as any).getRows());

                    Q.postToService({ service: RfqItemService.baseUrl + "/ListExcelOwnerEstimate", request: gridRows, target: '_blank' });


                    //var gridRows = (this.slickGrid.getData() as any).getRows();
                    ////console.log(gridRows);
                    //var modifiedGridRows = this.AdjustRows(gridRows);
                    //console.log(modifiedGridRows);

                    //RfqItemService.List({});

                    //SCMONLINE.Common.ReportHelper.execute({
                    //    download: true,
                    //    reportKey: "Procurement.RfqItem",
                    //    extension: "xlsx",
                    //    target: "_blank",
                    //    //params: opt
                    //});


                    //ProcurementService.ExportRfqItem(
                    //    //{ RfqItemList: (this.slickGrid.getData() as any).getRows() }
                    //    { RfqItemList: modifiedGridRows }
                    //    , response => {
                    //        //this.form.Title.value = response.Title;
                    //        //this.form.SapBidderListCreatedDate.value = response.SapBidderListCreatedDate;
                    //        //this.form.SapBidderListCreatedBy.value = response.SapBidderListCreatedBy;
                    //        //this.form.ProcurementTypeId.value = response.ProcurementTypeId;
                    //        //this.form.Classification.value = response.Classification;
                    //        //this.form.Qualification.value = response.Qualification;
                    //        //this.form.RequestedBy.value = response.RequestedBy;
                    //        //this.form.RequestorPosition.value = response.RequestorPosition;
                    //        //this.form.ApprovedBy.value = response.ApprovedBy;
                    //        //this.form.ApproverPosition.value = response.ApproverPosition;
                    //        //this.form.ProcParticipant.value = response.ProcParticipant;
                    //        //Q.notifySuccess("Bidder list " + this.form.CollectiveNumber.value + " successfully loaded.")
                    //    }
                    //    , {
                    //        onError: response => {
                    //            Q.notifyError(response.Error.Message);

                    //            //Reset Data
                    //            //this.form.Title.value = null;
                    //            //this.form.SapBidderListCreatedDate.value = null;
                    //            //this.form.SapBidderListCreatedBy.value = null;
                    //            //this.form.ProcurementTypeId.value = null;
                    //            //this.form.Classification.value = null;
                    //            //this.form.Qualification.value = null;
                    //            //this.form.RequestedBy.value = null;
                    //            //this.form.RequestorPosition.value = null;
                    //            //this.form.ApprovedBy.value = null;
                    //            //this.form.ApproverPosition.value = null;
                    //            //this.form.ProcParticipant.value = null;
                    //        }
                    //    }

                    //);


                    // open export dialog, let it handle rest
                    //var data = this.slickGrid.getData();
                    //console.log(data);
                    //console.log(this.getGrid().getDataItem(0));
                    //console.log(this.getGrid().getDataItem(1));
                    //console.log(this.getGrid().getDataItem(3));
                    //var dialog = new OwnerEstimateImportDialog();
                    //dialog.element.on('dialogclose', () => {
                    //    this.refresh();
                    //    dialog = null;
                    //});
                    //dialog.dialogOpen();
                }
            });
            // add our import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {


                    // open import dialog, let it handle rest
                    var dialog = new OwnerEstimateImportDialog();
                    dialog.rfqItemsEditor = this;
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