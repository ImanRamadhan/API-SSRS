using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SCMONLINE.Modules._Ext.Utils
{
    using Administration.Entities;
    using SCMONLINE.Procurement.Entities;
    using SCMONLINE.Procurement.Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.Data.SqlClient;
    using System.IO;
    using System.Net.Mail;
    using System.Threading;
    using System.Web.Hosting;
    //using MyRepository = Administration.Repositories.QueuedEmailRepository;
    //using MyRow = Administration.Entities.QueuedEmailRow;
    public static class ProcurementStatus
    {
        private static Thread _ProcurementStatusThread = null;
        private static Thread _ProcurementStatusObjectionThread = null;
        //private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public static void StartThread()
        {
            if (_ProcurementStatusThread == null)
            {
                _ProcurementStatusThread = new Thread(new ThreadStart(ChangeProcurementStatus));
                _ProcurementStatusThread.Priority = ThreadPriority.Lowest;
                _ProcurementStatusThread.Start();
            }
            if (_ProcurementStatusObjectionThread == null)
            {
                _ProcurementStatusObjectionThread = new Thread(new ThreadStart(ChangeProcurementStatusObjection));
                _ProcurementStatusObjectionThread.Priority = ThreadPriority.Lowest;
                _ProcurementStatusObjectionThread.Start();
            }
        }
        public static void EndProcurementStatusThread()
        {
            if (_ProcurementStatusThread != null)
            {
                _ProcurementStatusThread.Abort();
            }
        }
        public static void EndProcurementStatusObjectionThread()
        {
            if (_ProcurementStatusObjectionThread != null)
            {
                _ProcurementStatusObjectionThread.Abort();
            }
        }

        private static void ChangeProcurementStatusObjection()
        {
            bool enableProcurementStatusService = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableProcurementStatusService"]);
            if (enableProcurementStatusService)
            {
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                var connection = SqlConnections.NewFor<ProcurementRow>();
                while (true)
                {
                    Thread.Sleep(60000); // 10 sec
                    connection.Execute("SP_UPDATE_PROCUREMENT_STATUS_Objection", commandType: CommandType.StoredProcedure);
                }
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
        }
        private static void ChangeProcurementStatus()
        {
            bool enableProcurementStatusService = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableProcurementStatusService"]);
            if (enableProcurementStatusService)
            {
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
                var connection = SqlConnections.NewFor<ProcurementRow>();
                while (true)
                {
                    Thread.Sleep(60000); // 10 sec
                    connection.Execute("SP_UPDATE_PROCUREMENT_STATUS", commandType: CommandType.StoredProcedure);
                }
                (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            }
        }
    }
}