using Serenity.Services;

namespace SCMONLINE.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}