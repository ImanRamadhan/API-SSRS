/// <reference path="../Bases/DialogBase.ts" />

namespace _Ext {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AuditLogDialog extends DialogBase<AuditLogRow, any> {
        protected getFormKey() { return AuditLogForm.formKey; }
        protected getIdProperty() { return AuditLogRow.idProperty; }
        protected getLocalTextPrefix() { return AuditLogRow.localTextPrefix; }
        protected getNameProperty() { return AuditLogRow.nameProperty; }
        protected getService() { return AuditLogService.baseUrl; }

        protected form = new AuditLogForm(this.idPrefix);

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.splice(0, 5);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);


            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            usingJsonDiffPatch();
            //console.log(this.entity);
            //showing diff visually
            var left = JSON.parse(this.entity.OldEntity ? this.entity.OldEntity : null);
            if (left) {
                if (left.PlantJson) {
                    left.PlantInfo = JSON.parse(left.PlantJson);
                    delete (left.PlantJson);
                }
                delete (left.Id);
                delete (left.IDate);
                delete (left.IUser);
                delete (left.EDate);
                delete (left.EUser);
            }

            var right = JSON.parse(this.entity.NewEntity ? this.entity.NewEntity : null);
            if (right) {
                if (right.PlantJson) {
                    right.PlantInfo = JSON.parse(right.PlantJson);
                    delete (right.PlantJson);
                }
            }

            //only show content of json property
            for (var key in left) {
                if (!right.hasOwnProperty(key)) {
                    delete left[key];
                }
            }

            var delta = jsondiffpatch.diff(left, right);

            // beautiful html diff
            this.form.Differences.value = jsondiffpatch.formatters.html.format(delta);

        }

    }
}