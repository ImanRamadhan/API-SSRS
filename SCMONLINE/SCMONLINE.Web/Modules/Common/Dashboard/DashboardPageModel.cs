
using SCMONLINE.Inbox.Entities;
using System.Collections.Generic;

namespace SCMONLINE.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }

        public List<ViewStoredGraphRow> Details { get; set; }
    }
}