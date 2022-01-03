
namespace SCMONLINE.Common.Pages
{
    using CsQuery.ExtensionMethods;
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Web.Mvc;
    using System.Linq;
    using SCMONLINE.Inbox.Entities;
    using SCMONLINE.App_Start;
    using SCMONLINE.Procurement;

    [RequiredPermission(PermissionKeys.General)]
    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                OrderRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = OrderRow.Fields;
                    using (var connection = SqlConnections.NewFor<OrderRow>())
                    {
                        model.OpenOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<CustomerRow>();
                        model.ProductCount = connection.Count<ProductRow>();
                    }
                    return model;
                });
            if (Authorization.HasPermission(ProcurementPermission.RoleVendor) && Authorization.Username != "admin")
            {
                return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
                //return View(MVC.Views.Common.Dashboard.DashboardF5, cachedModel);
            }
            else
            {
                return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
            }
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }



        public List<ViewStoredGraphRow> GetGraph()
        {
            List<String> lst = new List<string>();
            TestPesan tp = new TestPesan();
            using (var connection = SqlConnections.NewFor<ViewStoredGraphRow>())
            {
                using (SqlCommand cmd = new SqlCommand("StoreGraphsFC"))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        lst.Add(dr["Name"].ToString());
                        lst.Add(dr["Jumlah"].ToString());
                        tp.graph = lst.Cast<ViewStoredGraphRow>().ToList();
                    }
                }
                return tp.graph;
            }
        }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        //[Authorize, HttpPost]
        //public String GetDateData(String startDate, String endDate)
        //{
        //    using (var connection = SqlConnections.NewFor<GraphBarRow>())
        //    {
        //        var Start = Convert.ToDateTime(startDate);
        //        var End = Convert.ToDateTime(endDate);

        //        return connection.Query<Item>("StoreGraphsFCDate",
        //            param: new
        //            {
        //                StartDate = Start,
        //                EndDate = End
        //            },
        //            commandType: CommandType.StoredProcedure).ToJSON();

        //    }

        //}

        [Authorize, HttpPost]
        public String GetData()
        {
            using (var connection = SqlConnections.NewFor<GraphBarRow>())
            {
                var procType = new List<string>();

                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procType.Add("'M'");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procType.Add("'S'");
                }

                var p = new DynamicParameters();

                if (procType.Count > 0)
                {
                    p.Add("@WhereClause", "Procurement.ProcurementTypeId IN (" + string.Join(",", procType) + ")");
                }
                else
                {
                    p.Add("@WhereClause", "1=2");
                }

                return connection.Query<Item>("StoreGraphsFC", param: p, commandType: CommandType.StoredProcedure).ToJSON();
            }
        }

        [Authorize, HttpPost]
        public String GetDataUser()
        {
            using (var connection = SqlConnections.NewFor<GraphBarRow>())
            {
                //var procType = new List<string>();

                //if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                //{
                //    procType.Add("'M'");
                //}
                //if (Authorization.HasPermission(ProcurementPermission.DataService))
                //{
                //    procType.Add("'S'");
                //}

                var p = new DynamicParameters();

                //if (procType.Count > 0)
                //{
                    p.Add("@WhereClause", Serenity.Authorization.UserId);
                //}
                //else
                //{
                //    p.Add("@WhereClause", "1=2");
                //}

                return connection.Query<Item>("StoreGraphsUser", param: p, commandType: CommandType.StoredProcedure).ToJSON();
            }
        }

        public class Item
        {
            public String label { get; set; }
            public Int32? value { get; set; }

        }

        [Authorize, HttpPost]
        public String GetData2()
        {
            using (var connection = SqlConnections.NewFor<StoreGraphs2Row>())
            {

                Authorization.HasPermission("Data:ProcurementService");
                Authorization.HasPermission("Data:ProcurementMaterial");
                //var x = connection.Query<Object>("SP_ChartF", CommandType.StoredProcedure).ToJSON();
                //var y = connection.QueryMultiple(sql:  "SP_ChartF", commandType: CommandType.StoredProcedure);
                //return x;
                return connection.Query<Item2>("StoreGraphs2", CommandType.StoredProcedure).ToJSON();
            }
        }
        public class Item2
        {
            public String label { get; set; }
            public Int32? data { get; set; }

        }

        public String GetDataProses()
        {
            using (var connection = SqlConnections.NewFor<StoreGraphsFCRow>())
            {
                return connection.Query<ItemPros>("SPBar_Proses", CommandType.StoredProcedure).ToJSON();
            }
        }
        public class ItemPros
        {
            //public String buyer { get; set; }
            //public String x { get; set; }
            public Int32? y { get; set; }
        }

        public String GetDataWaiting()
        {
            using (var connection = SqlConnections.NewFor<StoreGraphsFCRow>())
            {
                return connection.Query<ItemWait>("SPBar_Waiting", CommandType.StoredProcedure).ToJSON();
            }
        }
        public class ItemWait
        {
            //public String buyer { get; set; }
            //public String x { get; set; }
            public Int32? y { get; set; }
        }

        public String GetDataPO()
        {
            using (var connection = SqlConnections.NewFor<StoreGraphsFCRow>())
            {
                return connection.Query<ItemPO>("SPBar_PO", CommandType.StoredProcedure).ToJSON();
            }
        }
        public class ItemPO
        {
            //public String buyer { get; set; }
            //public String x { get; set; }
            public Int32? y { get; set; }
        }

        public String GetDataBuyer()
        {
            using (var connection = SqlConnections.NewFor<StoreGraphsFCRow>())
            {
                return connection.Query<ItemB>("SPBar_Waiting", CommandType.StoredProcedure).ToJSON();
            }
        }
        public class ItemB
        {
            public String nameBuyer { get; set; }
            public String buyer { get; set; }
            //public String x { get; set; }
            //public Int32? y { get; set; }
        }




    }
}
