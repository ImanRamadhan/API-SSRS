<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="R3.aspx.cs" Inherits="SCMONLINE.Report.R3" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<style>
   .iframe {
  /*for the report viewer*/
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body style="margin: 0px; padding: 0px;">
    <form id="form1" runat="server">
        <div style="width: 1066px">
            <asp:ScriptManager ID="ScriptManager1" runat="server">
                <Scripts>
                    <asp:ScriptReference Assembly="ReportViewerForMvc" Name="ReportViewerForMvc.Scripts.PostMessage.js" />
                     <%--<asp:ScriptReference Path="~/Scripts/ReportViewer/ReportViewer.js" />--%>
                </Scripts>
            </asp:ScriptManager>
            <rsweb:ReportViewer ID="ReportViewer1" runat="server" Width="1082px" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Height="447px" >
                <LocalReport ReportPath="Report\R3.rdlc">
                    <DataSources>
                        
                        <rsweb:ReportDataSource DataSourceId="SqlDataSource1" Name="R3" />
                        
                    </DataSources>
                </LocalReport>
            </rsweb:ReportViewer>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:Default %>" SelectCommand="SELECT * FROM [Procurement]"></asp:SqlDataSource>
        </div>
    </form>
</body>
</html>
