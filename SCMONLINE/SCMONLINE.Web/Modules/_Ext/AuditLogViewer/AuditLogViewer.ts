declare var jsondiffpatch: any;

namespace _Ext {
    export class AuditLogViewer {
        el = '.content-wrapper';
        data = {
            entityVersions: []
        };

        entity
        entityId

        constructor(el: string, entityVersions: AuditLogRow[]) {
            this.el = el || this.el;
            this.data.entityVersions = entityVersions;
        }

        mounted = () => {

        }

        computed = {
            test: () => {
                return 'test computed';
            }
        }

        filters = {
            filterByYardId: () => {
                return [];
            }
        }

        methods = {
            showDiff: (versionInfo: AuditLogRow) => {
                //showing diff visually
                var left = versionInfo.OldEntity;
                var right = versionInfo.NewEntity;



                var delta = jsondiffpatch.diff(left, right);

                // beautiful html diff
                document.getElementById('visualizeDiff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);

            },

            getDiff: (versionInfo: AuditLogRow) => {
                //showing diff visually
                //var left = versionInfo.OldEntity;
                //var right = versionInfo.NewEntity;

                //console.log(this.entity);
                //showing diff visually
                var left = JSON.stringify(versionInfo.OldEntity ? versionInfo.OldEntity : null);
                var leftJson = JSON.parse(left);
                
                //if (left) {
                //    if (left.PlantJson) {
                //        left.PlantInfo = JSON.parse(left.PlantJson);
                //        delete (left.PlantJson);
                //    }
                //    delete (left.Id);
                //    delete (left.IDate);
                //    delete (left.IUser);
                //    delete (left.EDate);
                //    delete (left.EUser);
                //}

                var right = JSON.stringify(versionInfo.NewEntity ? versionInfo.NewEntity : null);
                var rightJson = JSON.parse(right);
                //if (right) {
                //    if (right.PlantJson) {
                //        right.PlantInfo = JSON.parse(right.PlantJson);
                //        delete (right.PlantJson);
                //    }
                //}

                //only show content of json property
                for (var key in leftJson) {
                    if (!rightJson.hasOwnProperty(key)) {
                        delete leftJson[key];
                    }
                }


                var delta = jsondiffpatch.diff(leftJson, rightJson);

                // beautiful html diff
                return jsondiffpatch.formatters.html.format(delta);

                //var delta = jsondiffpatch.diff(left, right);

                //// left is optional, if specified unchanged values will be visible too
                //document.getElementBy('the-diff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);


                //// Also you can dinamically show/hide unchanged values
                //jsondiffpatch.formatters.html.showUnchanged();
                //jsondiffpatch.formatters.html.hideUnchanged();
                //// these will also adjust array move arrows (SVG), which is useful if something alters the html layout
            }
        }

        destroyed() {

        }
    }
}