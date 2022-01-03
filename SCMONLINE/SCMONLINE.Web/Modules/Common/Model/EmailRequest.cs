using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SCMONLINE.Modules.Common.Model
{
    public class EmailRequest
    {
        public string recipient { get; set; }
        public string recipientCC { get; set; }
        public string recipientBC { get; set; }
        public string subject { get; set; }
        public string body { get; set; }
        public string description { get; set; }
        public string attachment { get; set; }
    }
}