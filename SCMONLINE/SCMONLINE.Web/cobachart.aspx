<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="cobachart.aspx.cs" Inherits="SCMONLINE.cobachart" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function () {
            $("#btnGeneratePieChart").on('click', function (e) {
                e.preventDefault();
                var gData = [];
                gData[0] = $("#ddlyear").val();
                //gData[1] = $("#ddlMonth").val();

                var jsonData = JSON.stringify({
                    gData: gData
                });
                $.ajax({
                    type: "POST",
                    url: "cobachart.aspx/getTrafficSourceData",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: OnSuccess_,
                    error: OnErrorCall_
                });

                function OnSuccess_(response) {
                    var aData = response.d;
                    var dataarr = [];
                    var Labelarr = [];
                    var Colorarr = [];
                    $.each(aData, function (inx, val) {
                        dataarr.push(val.value);
                        Labelarr.push(val.label);
                        Colorarr.push(val.color);
                    });
                    var ctx = $("#myChart").get(0).getContext("2d");
                    var config = {
                        type: 'pie',
                        data: {
                            datasets: [{
                                data: dataarr,
                                backgroundColor: Colorarr,
                            }],
                            labels: Colorarr
                        },
                        options: {
                            responsive: true
                        }
                    };
                    var myPieChart = new Chart(ctx, config);
                }
                function OnErrorCall_(response) { }
                e.preventDefault();
            });

        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <select id="ddlyear">
                <option>2010</option>
                <option>2011</option>
                <option>2019</option>
            </select>

            <select id="ddlMonth">
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
            </select>
            <button id="btnGeneratePieChart">Show</button>
            <br />
            <div id="canvas-holder" style="width: 20%">
                <canvas id="myChart" width="200" height="200"></canvas>
            </div>
        </div>
    </form>
</body>
</html>