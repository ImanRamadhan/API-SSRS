
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;
    import cmmFld = CommitteeMemberMappingRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F1_BLSelectionAdjustmentDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F1_BLSelectionAdjustmentForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F1_BLSelectionAdjustmentService.baseUrl; }

        protected form = new F1_BLSelectionAdjustmentForm(this.idPrefix);

        protected participantCount = 0;
        constructor(opt?) {
            super(opt);

            $('<a id="CNPullBtn" class="tool-button inplace-button refresh-button load-data-button "><\/a>')
                .insertAfter(this.form.CollectiveNumber.element)
                .click(() => {
                    F1_BLSelectionAdjustmentService.GetBidderListHeader(
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
                            this.form.ProcurementMethodId.set_value(response.ProcurementMethodId);
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
                                this.form.ProcurementMethodId.value = null;
                            }
                        }

                    );
                    //this.form.ProcParticipant.upd
                    this.updateInterface();
                    //this.form.ProcParticipant.myPassValue 
                });

            this.form.ProcValueRangeId.changeSelect2(e => {
                switch (this.form.ProcValueRangeId.value.toString()) {
                    case "1": {
                        //internal
                        this.form.CommitteeTypeId.value = 2;
                        this.form.PerformanceGuaranteeRequired.set_value("false");
                        break;
                    }
                    case "2": {
                        //pengadaan
                        this.form.CommitteeTypeId.value = 1;
                        this.form.PerformanceGuaranteeRequired.set_value(null);
                        break;
                    }
                    case "3": {
                        //pengadaan
                        this.form.CommitteeTypeId.value = 1;
                        this.form.PerformanceGuaranteeRequired.set_value(null);
                        break;
                    }
                    default: {
                        //statements; 
                        break;
                    }
                }
                this.loadDefaultCommitteeRole(this.form.CommitteeTypeId.value);

                //this.updateInterface();
            });


            /*
             * this.form.PerformanceGuaranteeRequired.changeSelect2(e => {
                if (this.form.PerformanceGuaranteeRequired.get_value() == "true") {
                    this.form.GuaranteePercentage.element.parent().toggle(true);
                } else {
                    this.form.GuaranteePercentage.element.parent().toggle(false);
                }
            });
            */


            //re adjust sequence when row count changed
            this.form.ProcParticipant.view.onDataChanged.subscribe(x => {
                var newParticipantCount = this.form.ProcParticipant.getItems().length;

                if (newParticipantCount != this.participantCount) {
                    this.participantCount = newParticipantCount;
                    this.adjustParticipantSequence();
                }
            });

            this.form.ProcParticipant.slickGrid.setSortColumn("SequenceNo", true)
        }

        protected loadDefaultCommitteeRole(committeeTypeId: number) {
            var committeeList = this.form.CommitteeMember.getItems();
            var i = 1;

            var request: Serenity.ListRequest;
            request = {};
            request.Criteria = Serenity.Criteria.and(request.Criteria, [[cmmFld.ProcurementTypeId], "=", this.form.ProcurementTypeId.value]);
            request.Criteria = Serenity.Criteria.and(request.Criteria, [[cmmFld.ProcValueRangeId], "=", this.form.ProcValueRangeId.value]);
            CommitteeMemberMappingService.List(request, response => {
                committeeList = [];

                response.Entities.forEach(item => {
                    var cm: CommitteeMemberRow;
                    cm = {}
                    cm.CommitteeRoleId = item.CommitteeRoleId;
                    cm.CommitteeRoleName = item.CommitteeRoleName;
                    cm.RoleId = item.RoleId;
                    cm.RoleRoleName = item.RoleRoleName;

                    //Need temporary id for in-memory grid
                    cm["__id"] = "``" + i;
                    committeeList.push(cm);
                    i++;
                });
                this.form.CommitteeMember.view.setItems(committeeList, true);
            });
            //participantList.forEach(function (value) {
            //    value.SequenceNo = i;
            //    i++;
            //});

        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            if (Q.indexOf(buttons, x => x.cssClass == "add-button") > -1) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }
            //if (Q.indexOf(buttons, x => x.cssClass == "delete-button") > -1) {
            //    buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            //}
            if (Q.indexOf(buttons, x => x.cssClass == "save-and-close-button") > -1) {
                //it's used for pendingChangesConfirmation, we can't just remove the button
                var saveCloseIndex = Q.indexOf(buttons, x => x.cssClass == "save-and-close-button");
                buttons[saveCloseIndex].cssClass = buttons[saveCloseIndex].cssClass + " hide";
            }


            //F1 Not passed yet
            //add submit-button
            //create
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button") + 1, 0,
                {
                    title: Q.text('Submit'),
                    cssClass: 'submit-button create-button',
                    icon: 'fa-play text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to submit?', () => {
                            F1_BLSelectionAdjustmentService.SubmitCreate({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                Q.notifySuccess("Procurement " + this.form.Title.value + " has been successfully Submitted.");
                                this.set_entityId(response.EntityId);
                                this.reloadById();
                            });
                        });
                    }
                }
            );
            //update
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button")+1 , 0,
                {
                    title: Q.text('Submit'),
                    cssClass: 'submit-button update-button',
                    icon: 'fa-play text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to submit?', () => {
                            F1_BLSelectionAdjustmentService.SubmitUpdate({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                Q.notifySuccess("Procuremnt " + this.form.Title.value + " has been successfully Submitted.");
                                this.reloadById();
                            });
                        });
                    }
                }
            );


            buttons.push({
                title: "Report [R1] - Daftar Bidder List",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator: true,
                onClick: () => {
                    this.get_entity
                    this.get_entityId()
                    var a = '../Procurement/Report/ReportR1?';
                    //window.open(a, '_blank');
                    window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });



            return buttons;
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

            //hide next button when flow passed
            if (this.entity.F1SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
                this.toolbar.findButton(".delete-button").remove();
            }

            if (this.form.PerformanceGuaranteeRequired.get_value() == "true") {
                this.form.GuaranteePercentage.element.parent().toggle(true);
            } else {
                this.form.GuaranteePercentage.element.parent().toggle(false);
            }
            if (this.form.Status.get_value()) { } else { this.form.Status.set_value("F1"); }

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

        protected onDialogOpen() {
            super.onDialogOpen();
            if (this.isNew()) {
                this.toolbar.findButton(".update-button").remove();
            } else {
                this.toolbar.findButton(".create-button").remove();
            }
        }


    }
}