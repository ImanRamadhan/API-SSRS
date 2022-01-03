using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCMONLINE.MonitoringKontrakSynchronizer
{
    public class GET_RECENT_PR_STATUS
    {
        public string PR_RELEASE_NO { get; set; }
        public string STATUS { get; set; }
        public DateTime? CREATED_DT { get; set; }
    }
    public class PurchaseRequisition
    {

        public string PRNo { get; set; }
        public int? BuyerId { get; set; }
        public string CostCenter { get; set; }
        public string ScanPRFile { get; set; }
        public string ScanPRName { get; set; }
        public DateTime? AssignDate { get; set; }
        public string AssignBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
    }

}
