/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class F19_CommitteeMembersEditor extends Common.GridEditorBase<CommitteeMemberRow> {
        protected getColumnsKey() { return "Procurement.F19_CommitteeMember"; }
        protected getDialogType() { return F19_CommitteeMemberDialog; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }

        public myPassValue: number;

        public parentDialog: F19_CommitteeApprovalDialog;
        constructor(container: JQuery) {
            super(container);

            this.toolbar.element.toggle(false);
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            (dialog as F19_CommitteeMemberDialog).parentDialog = this.parentDialog;
        }

        validateEntity(row, id) {
            var sameRole = Q.tryFirst(this.view.getItems(), x => x.RoleId === row.RoleId);
            if (sameRole && this.id(sameRole) !== id) {
                Q.alert('This Role is already in Committee List');
                return false;
            }
            row.RoleRoleName = Administration.RoleRow.getLookup().itemById[row.RoleId].RoleName;
            row.CommitteeRoleName = CommitteeRoleRow.getLookup().itemById[row.CommitteeRoleId].Name;
            return true;
        }
        
    }
}