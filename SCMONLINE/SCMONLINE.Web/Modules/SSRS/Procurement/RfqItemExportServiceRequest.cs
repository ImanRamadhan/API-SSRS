
namespace SCMONLINE.Procurement
{
    using SCMONLINE.Procurement.Entities;
    using Serenity.Services;
    using System.Collections.Generic;

    public class RfqItemExportServiceRequest : ServiceRequest
    {
        public List<RfqItemRow> RfqItemList { get; set; }
    }
}