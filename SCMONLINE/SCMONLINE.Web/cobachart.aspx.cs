using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Services;

namespace SCMONLINE
{
    public partial class cobachart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                
        }

        public class trafficSourceData
        {
            public string label { get; set; }
            public string value { get; set; }
            public string color { get; set; }
            public string hightlight { get; set; }
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public static string getTrafficSourceData()
        //public static List<trafficSourceData> getTrafficSourceData(List<string> gData)
        {
            return "Holla!";

            //List<trafficSourceData> t = new List<trafficSourceData>();
            //string[] arrColor = new string[] { "#231F20", "#FFC200", "#F44937", "#16F27E", "#FC9775", "#5A69A6" };

            //string conn = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            
            //using (SqlConnection cn = new SqlConnection(conn))
            //{
            //    string myQuery = "select * from PurchaseRequisition where CostCenter =@year ";
            //    SqlCommand cmd = new SqlCommand();
            //    cmd.CommandText = myQuery;
            //    cmd.CommandType = CommandType.Text;
            //    cmd.Parameters.AddWithValue("@year", gData[0]);
            //    //cmd.Parameters.AddWithValue("@month", gData[1]);
            //    cmd.Connection = cn;
            //    cn.Open();
            //    SqlDataReader dr = cmd.ExecuteReader();
            //    if (dr.HasRows)
            //    {
            //        int counter = 0;
            //        while (dr.Read())
            //        {
            //            trafficSourceData tsData = new trafficSourceData();
            //            tsData.value = dr["PRNo"].ToString();
            //            tsData.label = dr["BuyerId"].ToString();
            //            tsData.color = arrColor[counter];
            //            t.Add(tsData);
            //            counter++;
            //        }
            //    }
            //}
            //return t;
        }
    }
}