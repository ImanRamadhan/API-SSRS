
namespace _Ext {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class AdaTidakAdaEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            // you may also use addItem which accepts a Select2Item parameter

            this.addItem({
                id: "true",
                text: "Ada"
            });

            // don't let selecting this one (disabled)
            this.addItem({
                id: "false",
                text: "Tidak Ada",
            });

            //this.set_value(null);
        }
    }
}