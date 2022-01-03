/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class VendorRepresentativeEditor extends Common.GridEditorBase<VendorRepresentativeRow> {
        protected getColumnsKey() { return "Procurement.VendorRepresentative"; }
        protected getDialogType() { return VendorRepresentativeDialog; }
        protected getLocalTextPrefix() { return VendorRepresentativeRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);


        }

        validateEntity(row, id) {
            row.UserId = Q.toId(row.UserId);

            var sameUser = Q.tryFirst(this.view.getItems(), x => x.UserId === row.UserId);
            if (sameUser && this.id(sameUser) !== id) {
                Q.alert('This User is already in list');
                return false;
            }
            console.log(row);

            row.UserName = Administration.UserRow.getLookup().itemById[row.UserId].Username;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        
    }
}