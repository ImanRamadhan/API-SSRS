
namespace SCMONLINE.Procurement.Repositories
{
    using SCMONLINE.Procurement.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.ProcurementRow;

    public class F10_NegotiationRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                    var connection = SqlConnections.NewFor<ProcParticipantRow>();
                    var a = Request.EntityId;
                    var p = new DynamicParameters();
                    p.Add("@Procurement", a.ToString());
                    List<ProcParticipantRow> participant = (List<ProcParticipantRow>)connection.Query<ProcParticipantRow>("SP_CekProcParticipantNegotiation", p, commandType: CommandType.StoredProcedure);
                    foreach (var participantList in participant)
                    {
                        p.Add("@Procurement", a.ToString());
                        List<ProcParticipantItemRow> participantitem = (List<ProcParticipantItemRow>)connection.Query<ProcParticipantItemRow>("SP_CekProcParticipantItemNegotiation", p, commandType: CommandType.StoredProcedure);
                        foreach (var participantitemList in participantitem)
                        {
                            if (participantitemList.EvaluationConclusionItemId == 1)
                            {
                                participantList.FinalBidPrice += participantitemList.NegotiationPrice;
                            }
                        }
                    }
                //Row.ProcParticipant.ForEach(participant =>
                //{
                //    participant.ProcParticipantItems.ForEach(item =>
                //    {
                //        if (item.EvaluationConclusionItemId == 1)
                //        {
                //            participant.FinalBidPrice += item.NegotiationPrice;
                //        }
                //    });
                //});
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
                var procurementType = new List<string>();
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (Row.F10SubmitDate != null || Row.Status == "F10") { }
                else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                if (procurementType.Count > 0)
                {
                    if (procurementType.Any(x => x == Row.ProcurementTypeId))
                    {
                    }
                    else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                }
                else
                {
                    throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions);
                }

            }
            protected override void OnBeforeExecuteQuery()
            {
                base.OnBeforeExecuteQuery();
                var connection = SqlConnections.NewFor<ProcParticipantRow>();
                var a = Request.EntityId;
                var p = new DynamicParameters();
                p.Add("@Procurement", a.ToString());
                List<ProcParticipantItemRow> participantitem = (List<ProcParticipantItemRow>)connection.Query<ProcParticipantItemRow>("SP_CekProcParticipantItemNegotiation", p, commandType: CommandType.StoredProcedure);
                if (participantitem != null)
                {
                    foreach (var participantitemList in participantitem)
                    {
                        if (participantitemList.NegotiationPrice == null)
                        {
                            participantitemList.NegotiationPrice = participantitemList.BidPrice;
                        }
                    }
                }
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }



                query.Where(new Criteria(fld.F10SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F10");

                if (procurementType.Count > 0)
                {
                    query.Where(new Criteria(fld.ProcurementTypeId).In(procurementType));
                }
                else
                {
                    //hide all data
                    query.Where(new Criteria("1=2"));
                }

            }
        }
    }
}