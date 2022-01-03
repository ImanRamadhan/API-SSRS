<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportViewerWebForm.aspx.cs" Inherits="SCMONLINE.Report.ReportViewerWebForm" %>
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
        <div>
            halo
            <asp:ScriptManager ID="ScriptManager1" runat="server">
                <Scripts>
                    <asp:ScriptReference Assembly="ReportViewerForMvc" Name="ReportViewerForMvc.Scripts.PostMessage.js" />
                     <%--<asp:ScriptReference Path="~/Scripts/ReportViewer/ReportViewer.js" />--%>
                </Scripts>
            </asp:ScriptManager>
            <rsweb:ReportViewer ID="reportViewer" runat="server" Width="782px" ></rsweb:ReportViewer>
        </div>
    </form>
</body>
</html>