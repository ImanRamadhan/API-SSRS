
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.CharacteristicValue")]
    [BasedOnRow(typeof(Entities.CharacteristicValueRow), CheckNames = true)]
    public class CharacteristicValueForm
    {
        public String Object { get; set; }
        public String InternalChar { get; set; }
        public String Counter { get; set; }
        public String ObjectClass { get; set; }
        public String ClassType { get; set; }
        public String IntCounter { get; set; }
        public String CharValue { get; set; }
        public String ValueFrom { get; set; }
        public String IntMeasUnit { get; set; }
        public String ValueTo { get; set; }
        public String Code { get; set; }
        public String ToleranceFrom { get; set; }
        public String ToleranceTo { get; set; }
        public String Percentage { get; set; }
        public String Increment { get; set; }
        public String Author { get; set; }
        public String ChangeNumber { get; set; }
        public String ValidFrom { get; set; }
        public String DeletionInd { get; set; }
        public String InstanceCntr { get; set; }
        public String Position { get; set; }
        public String CompType { get; set; }
    }
}