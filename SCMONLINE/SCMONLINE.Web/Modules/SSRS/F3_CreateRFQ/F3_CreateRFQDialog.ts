
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F3_CreateRFQDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F3_CreateRFQForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F3_CreateRFQService.baseUrl; }

        protected form = new F3_CreateRFQForm(this.idPrefix);

        constructor(opt?) {
            super(opt);

            $('<a id="RFQPullBtn" class="tool-button inplace-button refresh-button load-data-button "><\/a>')
                .insertAfter(this.form.PurchDocNum.element)
                .click(() => {
                    F3_CreateRFQService.GetRFQ(
                        { RfqNo: this.form.PurchDocNum.value }
                        , response => {
                            this.form.OrderTypeId.set_value(response.OrderTypeId);
                            this.form.RfqDate.value = response.RfqDate;
                            this.form.QuotationDeadline.value = response.QuotationDeadline;
                            this.form.PurchGroup.value = response.PurchGroup;
                            this.form.PrNo.value = response.PrNo;
                            this.form.AuthPersonName.value = response.AuthPersonName;
                            this.form.AuthPosition.value = response.AuthPosition;
                            this.form.DeliveryAddress.value = response.DeliveryAddress;
                            this.form.ToPTargVal.value = response.ToPTargVal;
                            this.form.YourReference.value = response.YourReference;
                            this.form.OurReference.value = response.OurReference;
                            this.form.SalesPerson.value = response.SalesPerson;
                            this.form.Telephone.value = response.Telephone;
                            this.form.ValidityStart.value = response.ValidityStart;
                            this.form.ValidityEnd.value = response.ValidityEnd;
                            this.form.ItemInterval.value = response.ItemInterval;
                            this.form.SubItemInterval.value = response.SubItemInterval;
                            this.form.Warranty.value = response.Warranty;
                            this.form.Language.value = response.Language;
                            this.form.RfqTexts.value = response.RfqTexts;
                            this.form.RfqItems.value = response.RfqItems;
                            this.form.ProcPurchaseRequests.value = response.ProcPurchaseRequests;

                            Q.notifySuccess("RFQ " + this.form.PurchDocNum.value + " successfully loaded.")
                        }
                        , {
                            onError: response => {
                                Q.notifyError(response.Error.Message);

                                //Reset Data
                                this.form.OrderTypeId.value = null;
                                this.form.RfqDate.value = null;
                                this.form.QuotationDeadline.value = null;
                                this.form.PurchGroup.value = null;
                                this.form.PrNo.value = null;
                                this.form.AuthPersonName.value = null;
                                this.form.AuthPosition.value = null;
                                this.form.DeliveryAddress.value = null;
                                this.form.ToPTargVal.value = null;
                                this.form.YourReference.value = null;
                                this.form.OurReference.value = null;
                                this.form.SalesPerson.value = null;
                                this.form.Telephone.value = null;
                                this.form.ValidityStart.value = null;
                                this.form.ValidityEnd.value = null;
                                this.form.ItemInterval.value = null;
                                this.form.SubItemInterval.value = null;
                                this.form.Warranty.value = null;
                                this.form.Language.value = null;
                                this.form.RfqTexts.value = null;
                                this.form.RfqItems.value = null;
                                this.form.ProcPurchaseRequests.value = null;
                            }
                        }

                    );

                });
        }



        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            if (Q.indexOf(buttons, x => x.cssClass == "add-button") > -1) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }
            if (Q.indexOf(buttons, x => x.cssClass == "delete-button") > -1) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }
            if (Q.indexOf(buttons, x => x.cssClass == "save-and-close-button") > -1) {
                //it's used for pendingChangesConfirmation, we can't just remove the button
                var saveCloseIndex = Q.indexOf(buttons, x => x.cssClass == "save-and-close-button");
                buttons[saveCloseIndex].cssClass = buttons[saveCloseIndex].cssClass + " hide";
            }


            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button") + 1, 0,
                {
                    title: Q.text('Submit'),
                    cssClass: 'submit-button',
                    icon: 'fa-play text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to submit?', () => {
                            F3_CreateRFQService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => 
                            {
                                F3_CreateRFQService.SendMail({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
                                    response => {
                                        Q.notifySuccess("Procurement " + this.form.Title.value + " has been successfully Submitted.");
                                        this.reloadById();
                                    }
                                ),
                                F3_CreateRFQService.SendMailVendor({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
                                    response => {
                                        Q.notifySuccess("Procurement " + this.form.Title.value + " has been successfully Submitted.");
                                        this.reloadById();
                                    }
                                );
                            });
                        });
                    }
                }
            );
            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();


            //hide next button when flow passed
            if (this.entity.F3SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }


    }
}