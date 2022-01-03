
namespace SCMONLINE.Inbox.Repositories
{
    using SCMONLINE.Inbox.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.NotificationRow;

    public class NotificationRepository
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

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {

            //Create Auto Update ReadingDate
            protected override void OnReturn()
            {
                base.OnReturn();
                var NotifRow = new NotificationRow();
                var connection = SqlConnections.NewFor<NotificationRow>();
                var SQLCommand = "UPDATE " + NotifRow.Table + " SET [ReadingDate] = " + "'" + DateTime.Now + "'" + " WHERE [NotificationId] = " + Row.NotificationId;
                connection.Execute(SQLCommand);

                
            }

        }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                query.OrderByFirst("ReadingDate");
                query.OrderBy("CreateDate");
               
                //query.Where("ReadingDate is null");


            }
        }
    }
}