
namespace _Ext.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.AuditLogRow;

    public class AuditLogRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        //public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        //{
        //    return new MyListHandler().Process(connection, request);
        //}

        public ListResponse<MyRow> List(IDbConnection connection, AuditLogSpListRequest request)
        {
            ListResponse<MyRow> x = new ListResponse<MyRow>();

            var p = new DynamicParameters();

            if (!string.IsNullOrWhiteSpace(request.ActionStartDate.ToStringNullSafe()))
            {
                p.Add("@ActionStartDate", request.ActionStartDate);
            }

            if (!string.IsNullOrWhiteSpace(request.ActionEndDate.ToStringNullSafe()))
            {
                p.Add("@ActionEndDate", request.ActionEndDate);
            }

            //Filtering

            foreach (KeyValuePair<string, object> entry in request.EqualityFilter)
            {
                if (!string.IsNullOrWhiteSpace(entry.Value.ToString()))
                {
                    p.Add("@" + entry.Key, entry.Value.ToString());
                }

            }

            //pagination
            p.Add("@PageNo", request.Take == 0 ? 1 : (request.Skip / request.Take) + 1);
            p.Add("@PageSize", request.Take == 0 ? 2147483646 : request.Take); //give max SQL int when take = 0

            //sorting

            if (request.Sort != null && request.Sort.Length > 0)
            {
                if (request.Sort[0].Descending)
                {
                    p.Add("@SortOrder", "DESC");
                }
                else
                {
                    p.Add("@SortOrder", "ASC");
                }
                p.Add("@SortColumn", request.Sort[0].Field);
            }


            //get totlal records.
            //var p1 = new DynamicParameters();
            //p1.Add("@RecordCount", dbType: DbType.Int32, direction: ParameterDirection.Output);
            //connection.Execute("AuditLogSpCount", p1, commandType: CommandType.StoredProcedure);

            //var queryParameters = new DynamicParameters();
            //queryParameters.Add("@parameter1", valueOfparameter1);
            //queryParameters.Add("@parameter2", valueOfparameter2);

            //var data = connection.Query<MyRow>("AuditLogSp",
            //    //param: new
            //    //{
            //    //        //startDate = request.StartDate,
            //    //        //endDate = request.EndDate
            //    //},
            //    param: p,
            //    commandType: System.Data.CommandType.StoredProcedure);

            //var response = new ListResponse<MyRow>();
            //response.Entities = (List<MyRow>)data;
            //return response;

            // get data
            x.Entities = (List<MyRow>)connection.Query<MyRow>("AuditLogSp", p, commandType: CommandType.StoredProcedure);
            x.Skip = request.Skip;
            x.Take = request.Take;

            if (x.Entities.Count > 0)
            {
                x.TotalCount = x.Entities[0].TotalCount.GetValueOrDefault(); ;
            }

            return x;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}