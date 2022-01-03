
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return ProcurementForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return ProcurementService.baseUrl; }

        protected form = new ProcurementForm(this.idPrefix);

        protected participantCount = 0;
        constructor(opt?) {
            super(opt);

            console.log(window.location);
            //this.form.Title.element.parent().remove();

            $('<a id="CNPullBtn" class="inplace-button load-data-button"><\/a>')
                .insertAfter(this.form.CollectiveNumber.element)
                .click(() => {
                    ProcurementService.GetBidderListHeader(
                        { CollectiveNumber: this.form.CollectiveNumber.value }
                        , response => {
                            this.form.Title.value = response.Title;
                            this.form.SapBidderListCreatedDate.value = response.SapBidderListCreatedDate;
                            this.form.SapBidderListCreatedBy.value = response.SapBidderListCreatedBy;
                            this.form.ProcurementTypeId.set_value(response.ProcurementTypeId);
                            this.form.Classification.value = response.Classification;
                            this.form.Qualification.value = response.Qualification;
                            this.form.RequestedBy.value = response.RequestedBy;
                            this.form.RequestorPosition.value = response.RequestorPosition;
                            this.form.ApprovedBy.value = response.ApprovedBy;
                            this.form.ApproverPosition.value = response.ApproverPosition;
                            this.form.ProcParticipant.value = response.ProcParticipant;
                            Q.notifySuccess("Bidder list " + this.form.CollectiveNumber.value + " successfully loaded.")
                        }
                        , {
                            onError: response => {
                                Q.notifyError(response.Error.Message);

                                //Reset Data
                                this.form.Title.value = null;
                                this.form.SapBidderListCreatedDate.value = null;
                                this.form.SapBidderListCreatedBy.value = null;
                                this.form.ProcurementTypeId.value = null;
                                this.form.Classification.value = null;
                                this.form.Qualification.value = null;
                                this.form.RequestedBy.value = null;
                                this.form.RequestorPosition.value = null;
                                this.form.ApprovedBy.value = null;
                                this.form.ApproverPosition.value = null;
                                this.form.ProcParticipant.value = null;
                            }
                        }

                    );
                    //this.form.ProcParticipant.upd
                    this.updateInterface();
                    //this.form.ProcParticipant.myPassValue 
                });

            //this.form.ProcParticipant.change(x => {
            //    this.adjustParticipantSequence();
            //    console.log('changecc');
            //});

            //re adjust sequence when row count changed
            this.form.ProcParticipant.view.onDataChanged.subscribe(x => {
                var newParticipantCount = this.form.ProcParticipant.getItems().length;
                //console.log("before");
                //console.log("newParticipantCount: " + newParticipantCount);
                //console.log("this.participantCount: " + this.participantCount);
                //console.log(newParticipantCount != this.participantCount);

                if (newParticipantCount != this.participantCount) {
                    this.participantCount = newParticipantCount;
                    this.adjustParticipantSequence();
                }

                //console.log("after");

                //console.log("newParticipantCount: " + newParticipantCount);
                //console.log("this.participantCount: " + this.participantCount);
                //console.log(newParticipantCount != this.participantCount);
                //var participantList = this.form.ProcParticipant.getItems();
                //if (participantList.filter(x => typeof x.SequenceNo != 'undefined')[0]) { }
                //else {
                //    this.adjustParticipantSequence();
                //}
            });

            this.form.ProcParticipant.slickGrid.setSortColumn("SequenceNo", true)
        }

        protected updateInterface() {
            super.updateInterface();

            //var rows = this.form.ProcParticipant.getItems();
            //Math.max.apply(Math, rows.map(function (o) { return o.SequenceNo; }))

            //console.log(this.form.ProcParticipant.getItems());

            //this.adjustParticipantSequence();
        }
        protected adjustParticipantSequence() {
            var participantList = this.form.ProcParticipant.getItems();
            var i = 1;

            participantList.forEach(function (value) {
                value.SequenceNo = i;
                i++;
            });

            this.form.ProcParticipant.setItems(participantList);
            //this.updateInterface();
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.participantCount = this.form.ProcParticipant.getItems().length;

            //$('<a id="CNPullBtn" class="inplace-button "><b>Load Bidder List<\/b><\/a>')
            //    .insertAfter(this.form.CollectiveNumber.element)
            //    .click(() =>
            //        ProcurementService.GetBidderListHeader(
            //            { CollectiveNumber: this.form.CollectiveNumber.value }
            //            , response => {
            //                console.log(response);
            //                if (response == null) {
            //                    Q.notifyWarning("Bidder List No:" + this.form.CollectiveNumber + " not found!");
            //                    return;
            //                }
            //                console.log(this.form.CollectiveNumber.value);
            //                //this.form.Title.value = response.Title;
            //                //this.form.SapBidderListCreatedDate.value = response.SapBidderListCreatedDate;
            //                //this.form.SapBidderListCreatedBy.value = response.SapBidderListCreatedBy;
            //                //this.form.ProcurementTypeId.value = response.ProcurementTypeId;
            //                //this.form.Qualification.value = response.Qualification;
            //                //this.form.RequestedBy.value = response.RequestedBy;
            //                //this.form.RequestorPosition.value = response.RequestorPosition;
            //                //this.form.ApprovedBy.value = response.ApprovedBy;
            //                //this.form.ApproverPosition.value = response.ApproverPosition;
            //                //var responseItem = response.DATA[0].WA.split("|");
            //                //this.form.Title.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('PENGADAAN'.trim())];
            //                //this.form.SapBidderListCreatedDate.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('CRDATE'.trim())];
            //                //this.form.SapBidderListCreatedBy.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('CRUSER'.trim())];
            //                //this.form.ProcurementTypeId.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('KNDPRO'.trim())];
            //                //this.form.Qualification.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('KUALIFIKASI'.trim())];
            //                //this.form.RequestedBy.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('DIUSULKAN'.trim())];
            //                //this.form.RequestorPosition.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('JAB_DIUSULKAN'.trim())];
            //                //this.form.ApprovedBy.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('DISETUJUI'.trim())];
            //                //this.form.ApproverPosition.value = responseItem[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('JAB_DISETUJUI'.trim())];
            //            }));


            //);
            //$('<a id="CNPullBtn" class="inplace-button inplace-create"><b><\/b><\/a>')
            //    .insertAfter(this.form.CollectiveNumber.element);

            //let btn = document.getElementById("CNPullBtn");

            //btn.addEventListener("click", (e: Event) => {
            //    ProcurementService.GetBidderListHeader({
            //    }, response => {
            //        //FindIndex(response).;
            //        //FindIndex();

            //        //FindIndex(response.FIELDS)

            //        var KNDPRO = response.DATA[0].WA.split("|")[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('KNDPRO')];

            //        console.log(KNDPRO);

            //        this.form.Title.value = KNDPRO;



            //        //response.FIELDS.
            //        //response.FIELDS.indexOf({ FIELDNAME: 'KNDPRO' });
            //        //response.DATA[0].WA.split("|");
            //        ////for (let entry of response.DATA) {
            //        ////    console.log(entry.WA); // 1, "string", false
            //        ////}
            //        //console.log(response.FIELDS.fin)
            //        //this.element.find("input").val(response)
            //    });
            //});
        }



    }


}