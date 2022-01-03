using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SCMONLINE.SAPSynchronizer
{
    public class Vendor
    {
        public string VendorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string PenaltyCode { get; set; }
        public string Country { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string PoBox { get; set; }
        public string PoBoxPcode { get; set; }
        public string PostalCode { get; set; }
        public string Region { get; set; }
        public string SearchTerm { get; set; }
        public string Street { get; set; }
        public string Address { get; set; }
        public string Title { get; set; }
        public string TrainStation { get; set; }
        public int? LocationNo1 { get; set; }
        public int? LocationNo2 { get; set; }
        public string Authorization { get; set; }
        public string Industry { get; set; }
        public int? CheckDigit { get; set; }
        public string DataLine { get; set; }
        public string DmeIndicator { get; set; }
        public string InstructionKey { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? TotalPo { get; set; }
        public string Group { get; set; }
    }

    public class CharacteristicValue
    {
        public long CharacteristicValueId { get; set; }
        public string Object { get; set; }
        public string InternalChar { get; set; }
        public string Counter { get; set; }
        public string ObjectClass { get; set; }
        public string ClassType { get; set; }
        public string IntCounter { get; set; }
        public string CharValue { get; set; }
        public string ValueFrom { get; set; }
        public string IntMeasUnit { get; set; }
        public string ValueTo { get; set; }
        public string Code { get; set; }
        public string ToleranceFrom { get; set; }
        public string ToleranceTo { get; set; }
        public string Percentage { get; set; }
        public string Increment { get; set; }
        public string Author { get; set; }
        public string ChangeNumber { get; set; }
        public string ValidFrom { get; set; }
        public string DeletionInd { get; set; }
        public string InstanceCntr { get; set; }
        public string Position { get; set; }
        public string CompType { get; set; }
    }

}
