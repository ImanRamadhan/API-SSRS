
namespace SCMONLINE.Procurement.Endpoints
{
    using System;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Reporting;
    using Serenity.Web;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ProcurementRepository;
    using MyRow = Entities.ProcurementRow;
    using SSRS.mi_osReadTableMC_PXD;
    using SCMONLINE.Modules._Ext.Utils;
    using SCMONLINE.Procurement.Entities;
    using System.Globalization;
    using System.Linq;
    using System.Collections.Generic;
    using SCMONLINE.Procurement.Repositories;

    [RoutePrefix("Services/Procurement/Procurement"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProcurementController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ProcurementColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "ProcurementList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        //[HttpPost]
        //public ServiceResponse ExportRfqItem(IDbConnection connection, RfqItemExportServiceRequest request)
        //{
        //    //var client = new mi_osReadTableMCClient();
        //    //client.ClientCredentials.UserName.UserName = "osds";
        //    //client.ClientCredentials.UserName.Password = "pertamina";

        //    //var @params = new dt_ReadTableMC_Request();

        //    //@params.CLIENT = "350";
        //    //@params.QUERY_TABLE = "ZMBIDLISTH";
        //    //@params.DELIMITER = "|";
        //    //@params.NO_DATA = "";
        //    //@params.ROWSKIPS = "0";
        //    //@params.ROWCOUNT = "1";
        //    //@params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[2];
        //    //@params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(2);
        //    //@params.OPTIONS[0].TEXT = "EKORG EQ '1010'";
        //    //@params.OPTIONS[1].TEXT = "AND BIDLISTNO EQ '" + request.CollectiveNumber + "'";
        //    //@params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(11);
        //    //////new dt_ReadTableMC_RequestFIELDS[11];
        //    //////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
        //    //@params.FIELDS[0].FIELDNAME = "KNDPRO";
        //    //@params.FIELDS[1].FIELDNAME = "SUBIDUSAHA";
        //    //@params.FIELDS[2].FIELDNAME = "KUALIFIKASI";
        //    //@params.FIELDS[3].FIELDNAME = "PENGADAAN";
        //    //@params.FIELDS[4].FIELDNAME = "REKANAN";
        //    //@params.FIELDS[5].FIELDNAME = "DIUSULKAN";
        //    //@params.FIELDS[6].FIELDNAME = "DISETUJUI";
        //    //@params.FIELDS[7].FIELDNAME = "JAB_DIUSULKAN";
        //    //@params.FIELDS[8].FIELDNAME = "JAB_DISETUJUI";
        //    //@params.FIELDS[9].FIELDNAME = "CRDATE";
        //    //@params.FIELDS[10].FIELDNAME = "CRUSER";

        //    //var result = client.mi_osReadTableMC(@params);

        //    ////Bidder list not found
        //    //if (result.DATA == null) throw new ValidationError("Bidder List " + request.CollectiveNumber + " not found!");

        //    ////Bidder list exists
        //    //var resultRow = result.DATA[0].WA.Split('|').Select(p => p.Trim()).ToList();

        //    ////var x = ""Hello From End Point!""   
        //    //ProcurementRow bidderListHeader = new ProcurementRow();

        //    //bidderListHeader.Title = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PENGADAAN")];
        //    //bidderListHeader.SapBidderListCreatedDate = DateTime.ParseExact(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRDATE")], "yyyyMMdd", CultureInfo.InvariantCulture);
        //    //bidderListHeader.SapBidderListCreatedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRUSER")];
        //    //bidderListHeader.ProcurementTypeId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KNDPRO")];
        //    //bidderListHeader.Classification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SUBIDUSAHA")];
        //    //bidderListHeader.Qualification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KUALIFIKASI")];
        //    //bidderListHeader.RequestedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DIUSULKAN")];
        //    //bidderListHeader.RequestorPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DIUSULKAN")];
        //    //bidderListHeader.ApprovedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DIUSULKAN")];
        //    //bidderListHeader.ApproverPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DISETUJUI")];
        //    //bidderListHeader.ProcParticipant = GetAllParticipant(connection, request.CollectiveNumber);

        //    //ProcParticipantRow
        //    //return bidderListHeader;
        //    return new ServiceResponse();
        //}
    }
}
