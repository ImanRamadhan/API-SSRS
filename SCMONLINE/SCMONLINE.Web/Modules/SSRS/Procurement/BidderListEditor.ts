///// <reference path="./../../../node_modules/jspolyfill-array.prototype.findIndex/findIndex.js"/>
///// <reference path="./../../../node_modules/array.prototype.findindex/index.js"/>

namespace SCMONLINE.Procurement {
    //import * as FindIndex from "array.prototype.findindex";
    import fld = SCMONLINE.Procurement.ProcurementRow.Fields;

    @Serenity.Decorators.element("<div style='display: flex' />")
    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])

    export class BidderListEditor extends Serenity.Widget<any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        

        constructor(container: JQuery) {
            super(container);
            
            this.updateElementContent();
        }

        private updateElementContent() {
            //var divID = this.element.attr('id');
            //var inputID = 'clpkr' + this.uniqueName;
            //this.element.append('<input type="text" class="editor flexify" id="' + inputID + '" /><span id="CNPullBtn" class="inplace-button input-group-addon" style="padding-top: 5px; padding-left: 3px; border-radius: 4px"><i></i></span>');
            //var findIndex = require('array.prototype.findindex');
            
            //findIndex.shim();

            //this.element.append(
            //    "<script>" +
            //    "$('#" + divID + "').colorpicker({" +
            //    "autoInputFallback: false" +
            //    "});" +
            //    "</script>"
            //);
            //this.element.append(
            //    "<script>" +
            //    "$('#CNPullBtn').click(function(){" +
            //    "alert('Holla!');" +
            //    "$('#" + inputID + "').val('hola');"+
            //    "});" +
            //    "</script>"
            //);
           
            

            //let btn = document.getElementById("CNPullBtn");

            //let arr = ['a', 'b'];
            ////let x = arr.findIndex('a');
            ////console.log(x);

            //btn.addEventListener("click", (e: Event) => {
            //    //alert('Holla!');
            //    //this.element.val("as");

            //    ProcurementService.GetBidderListHeader({
            //    }, response => {
            //        //FindIndex(response).;
            //        //FindIndex();

            //        //FindIndex(response.FIELDS)

            //        var KNDPRO = response.DATA[0].WA.split("|")[response.FIELDS.map(function (e) { return e.FIELDNAME; }).indexOf('KNDPRO')];                    

            //        console.log(KNDPRO);

            //        this.element.parent().find(fld.Title).find("input").val(KNDPRO);

            //        var x = this.element.parent().find(fld.Title);
            //        var y = this.element.parent().parent();
            //        var z = this.element.parent().parent().parent();
            //        //this.for
            //        //console.log(fld);
            //        console.log(x);
            //        console.log(y);
            //        console.log(z);


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


            //var request = this.getSaveEntity();

            //Q.serviceCall({
            //    url: Q.resolveUrl('~/Account/ChangePassword'),
            //    request: request,
            //    onSuccess: response => {
            //        Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
            //            window.location.href = Q.resolveUrl('~/');
            //        });
            //    }
            //});

        }


        //public get value(): string {
        //    //return $('#clpkr' + this.uniqueName).val();
        //    alert("asdad323423");

        //}

        public set value(value: string) {
            //if (value != undefined) {
            //    var pick = this.element.data('colorpicker');
            //    pick.color.setColor(value);
            //    $('#clpkr' + this.uniqueName).val(pick.update());
            //}
            alert("jrio");

        }

        public getEditValue(property, target) {
            //target[property.name] = this.value;
            //alert("feger");

        }

        public setEditValue(source, property) {
            //alert("asdad");
            //this.value = source[property.name];
        }
    }
}