
namespace _Ext {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class AuditLogViewerDialog extends Serenity.TemplatedDialog<any> {

        constructor(public request: AuditLogViewerRequest) {
            super();
            usingVuejs();
            usingJsonDiffPatch();


            this.dialogTitle = 'Audit Log Viewer'

            this.onDialogOpen = () => {

                AuditLogViewerService.List(this.request, response => {
                    response.EntityVersions.forEach(e => {
                        delete (e.Id)

                        console.log(e.OldEntity);
                        e.OldEntity = JSON.parse(e.OldEntity) as any;
                        e.NewEntity = JSON.parse(e.NewEntity)

                        if (e.OldEntity) {
                            delete ((e.OldEntity as any).Id);
                            delete ((e.OldEntity as any).IDate);
                            delete ((e.OldEntity as any).IUser);
                            delete ((e.OldEntity as any).EDate);
                            delete ((e.OldEntity as any).EUser);
                        }
                        e.ActionType = AuditActionType[e.ActionType] as any;
                        (e as any).isShowed = false;
                    });

                    new Vue(new AuditLogViewer('#' + this.idPrefix + 'dialogContent', response.EntityVersions));


                })

            };
        }

        protected getTemplateName(): string {
            return '_Ext.AuditLogViewer'
        }

    }

}
