/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace SCMONLINE.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    @Serenity.Decorators.registerClass()
    export class OtherFormInTabGrid extends Northwind.OrderGrid {

        protected getDialogType() { return OtherFormInTabDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}