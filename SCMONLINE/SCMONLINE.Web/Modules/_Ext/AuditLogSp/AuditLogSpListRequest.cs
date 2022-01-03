namespace _Ext
{
    using Serenity.Services;
    using System;

    public class AuditLogSpListRequest : ListRequest
    {
        public DateTime? ActionStartDate { get; set; }
        public DateTime? ActionEndDate { get; set; }
    }
}