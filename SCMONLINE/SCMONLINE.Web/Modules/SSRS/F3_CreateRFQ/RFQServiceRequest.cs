
namespace SCMONLINE.Procurement
{
    using Serenity.Services;

    public class RfqServiceRequest : ServiceRequest
    {
        public string RfqNo { get; set; }
    }
    public class ProcResponse : ServiceResponse
    {
        public string ExecutionResult { get; set; }
    }
    public class F3SpListRequest : ListRequest
    {
        public int ProcurementId { get; set; }
    }
    public class ProcParam : ServiceRequest
    {
        public string Param1 { get; set; }
    }
}