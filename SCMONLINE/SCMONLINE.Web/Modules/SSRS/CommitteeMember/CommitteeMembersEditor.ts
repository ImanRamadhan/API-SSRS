/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class CommitteeMembersEditor extends Common.GridEditorBase<CommitteeMemberRow> {
        protected getColumnsKey() { return "Procurement.CommitteeMember"; }
        protected getDialogType() { return CommitteeMemberDialog; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);
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