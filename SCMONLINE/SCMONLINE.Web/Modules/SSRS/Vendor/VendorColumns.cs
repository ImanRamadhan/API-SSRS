
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.Vendor")]
    [BasedOnRow(typeof(Entities.VendorRow), CheckNames = true)]
    public class VendorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Width(150, Min = 200)]
        public String VendorId { get; set; }
        [Width(150, Min = 300)]
        public String Name { get; set; }
        public String PenaltyCode { get; set; }
        [EditLink]
        public String Country { get; set; }
        public String Name2 { get; set; }
        public String Name3 { get; set; }
        public String Name4 { get; set; }
        public String City { get; set; }
        public String District { get; set; }
        public String PoBox { get; set; }
        public String PoBoxPcode { get; set; }
        public String PostalCode { get; set; }
        public String Region { get; set; }
        public String SearchTerm { get; set; }
        public String Street { get; set; }
        public String Address { get; set; }
        public String Title { get; set; }
        public String TrainStation { get; set; }
        public Int32 LocationNo1 { get; set; }
        public Int32 LocationNo2 { get; set; }
        public String Authorization { get; set; }
        public String Industry { get; set; }
        public Int32 CheckDigit { get; set; }
        public String DataLine { get; set; }
        public String DmeIndicator { get; set; }
        public String InstructionKey { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}