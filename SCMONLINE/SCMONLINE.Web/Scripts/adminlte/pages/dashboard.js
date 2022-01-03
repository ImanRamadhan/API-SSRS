/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  if (!$('#s-DashboardPage').length)
      return;

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $(".knob").knob();

  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };
  //World map by jvectormap
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ["#92c1dc", "#ebf4f9"],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  //Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });

  //The Calender
  $("#calendar").datepicker();

  //SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart
  //var area = new Morris.Area({
  //  element: 'revenue-chart',
  //  resize: true,
  //  data: [
  //    {y: '2011 Q1', item1: 2666, item2: 2666},
  //    {y: '2011 Q2', item1: 2778, item2: 2294},
  //    {y: '2011 Q3', item1: 4912, item2: 1969},
  //    {y: '2011 Q4', item1: 3767, item2: 3597},
  //    {y: '2012 Q1', item1: 6810, item2: 1914},
  //    {y: '2012 Q2', item1: 5670, item2: 4293},
  //    {y: '2012 Q3', item1: 4820, item2: 3795},
  //    {y: '2012 Q4', item1: 15073, item2: 5967},
  //    {y: '2013 Q1', item1: 10687, item2: 4460},
  //    {y: '2013 Q2', item1: 8432, item2: 5713}
  //  ],
  //  xkey: 'y',
  //  ykeys: ['item1', 'item2'],
  //  labels: ['Item 1', 'Item 2'],
  //  lineColors: ['#a0d0e0', '#3c8dbc'],
  //  hideHover: 'auto'
  //});
  //var line = new Morris.Line({
  //  element: 'line-chart',
  //  resize: true,
  //  data: [
  //    {y: '2011 Q1', item1: 2666},
  //    {y: '2011 Q2', item1: 2778},
  //    {y: '2011 Q3', item1: 4912},
  //    {y: '2011 Q4', item1: 3767},
  //    {y: '2012 Q1', item1: 6810},
  //    {y: '2012 Q2', item1: 5670},
  //    {y: '2012 Q3', item1: 4820},
  //    {y: '2012 Q4', item1: 15073},
  //    {y: '2013 Q1', item1: 10687},
  //    {y: '2013 Q2', item1: 8432}
  //  ],
  //  xkey: 'y',
  //  ykeys: ['item1'],
  //  labels: ['Item 1'],
  //  lineColors: ['#efefef'],
  //  lineWidth: 2,
  //  hideHover: 'auto',
  //  gridTextColor: "#fff",
  //  gridStrokeWidth: 0.4,
  //  pointSize: 4,
  //  pointStrokeColors: ["#efefef"],
  //  gridLineColor: "#efefef",
  //  gridTextFamily: "Open Sans",
  //  gridTextSize: 10
  //});

  //Donut Chart
  //var donut = new Morris.Donut({
  //  element: 'sales-chart',
  //  resize: true,
 //   colors: ["#3c8dbc", "#f56954", "#00a65a"],
  //  data: [
   //   {label: "Download Sales", value: 12},
  //    {label: "In-Store Sales", value: 30},
  //    {label: "Mail-Order Sales", value: 20}
  //  ],
  //  hideHover: 'auto'
  //});


  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    //area.redraw();
    //donut.redraw();
    //line.redraw();
    //redarea.redraw();
    //reddonut.redraw();
      //redline.redraw();
      //bluedonut.redraw();
  });



    /* Morris.js Charts */
    // Red Sales chart
    /*var redarea = new Morris.Area({
        element: 'redrevenue-chart',
        resize: true,
        data: [
            { y: '2011 Q1', item1: 2000, item2: 2500 },
            { y: '2011 Q2', item1: 2500, item2: 3000 },
            { y: '2011 Q3', item1: 3000, item2: 3500 },
            { y: '2011 Q4', item1: 3500, item2: 4000 },
            { y: '2012 Q1', item1: 4000, item2: 4500 },
            { y: '2012 Q2', item1: 4500, item2: 5000 },
            { y: '2012 Q3', item1: 5000, item2: 5500 },
            { y: '2012 Q4', item1: 5500, item2: 6000 },
            { y: '2013 Q1', item1: 6000, item2: 6500 },
            { y: '2013 Q2', item1: 6500, item2: 7000 }
        ],
        xkey: 'y',
        ykeys: ['item1', 'item2'],
        labels: ['Item 1', 'Item 2'],
        lineColors: ['#cf000f', '#f22613'],
        hideHover: 'auto'
    });*/
    //var redline = new Morris.Line({
    //    element: 'redline-chart',
    //    resize: true,
    //    data: [
    //        { y: '2011 Q1', item1: 2666 },
    //        { y: '2011 Q2', item1: 2778 },
    //        { y: '2011 Q3', item1: 4912 },
    //        { y: '2011 Q4', item1: 3767 },
    //        { y: '2012 Q1', item1: 6810 },
    //        { y: '2012 Q2', item1: 5670 },
    //        { y: '2012 Q3', item1: 4820 },
    //        { y: '2012 Q4', item1: 15073 },
    //        { y: '2013 Q1', item1: 10687 },
    //        { y: '2013 Q2', item1: 8432 }
    //    ],
    //    xkey: 'y',
    //    ykeys: ['item1'],
    //    labels: ['Item 1'],
    //    lineColors: ['#efefef'],
    //    lineWidth: 2,
    //    hideHover: 'auto',
    //    gridTextColor: "#fff",
    //    gridStrokeWidth: 0.4,
    //    pointSize: 4,
    //    pointStrokeColors: ["#efefef"],
    //    gridLineColor: "#efefef",
    //    gridTextFamily: "Open Sans",
    //    gridTextSize: 10
    //});

    //Red Donut Chart
    //var reddonut = new Morris.Donut({
    //    element: 'redsales-chart',
    //    resize: true,
    //    colors: ["#f15a22", "#e47833", "#d35400","#f9690e"],
    //    data: [
    //        { label: "Terbit PO", value: 1 },
    //        { label: "Proses", value: 2 },
    //        { label: "Diterima Ast.Manager", value: 3 },
    //        { label: "Verifikasi", value: 8 }
    //    ],
    //    hideHover: 'auto'
    //});


  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
    });

    //-------------
    //-HORIZONTAL BAR CHART -
    //-------------
    //var densityCanvas = document.getElementById("densityChart");

    //Chart.defaults.global.defaultFontFamily = "Lato";
    //Chart.defaults.global.defaultFontSize = 18;

    //var densityData = {
    //    label: 'Jumlah PR)',
    //    data: [5427, 5243, 5514, 3933],
    //    backgroundColor: [
    //        'rgba(0, 99, 132, 0.6)',
    //        'rgba(30, 99, 132, 0.6)',
    //        'rgba(60, 99, 132, 0.6)',
    //        'rgba(90, 99, 132, 0.6)',
    //        'rgba(120, 99, 132, 0.6)'
    //    ],
    //    borderColor: [
    //        'rgba(0, 99, 132, 1)',
    //        'rgba(30, 99, 132, 1)',
    //        'rgba(60, 99, 132, 1)',
    //        'rgba(90, 99, 132, 1)',
    //        'rgba(120, 99, 132, 1)'
    //    ],
    //    borderWidth: 2,
    //    hoverBorderWidth: 0
    //};

    //var chartOptions = {
    //    scales: {
    //        yAxes: [{
    //            barPercentage: 0.5
    //        }]
    //    },
    //    elements: {
    //        rectangle: {
    //            borderSkipped: 'left',
    //        }
    //    }
    //};

    //var testbar = new Chart(densityCanvas, {
    //    type: 'horizontalBar',
    //    data: {
    //        labels: ["Terbit PO", "Penetapan Pemenang", "Aanwijzing", "Bidder List"],
    //        datasets: [densityData],
    //    },
    //    options: chartOptions
    //});

    /*var areaChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Electronics",
                fillColor: "rgba(210, 214, 222, 1)",
                strokeColor: "rgba(210, 214, 222, 1)",
                pointColor: "rgba(210, 214, 222, 1)",
                pointStrokeColor: "#c1c7d1",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Digital Goods",
                fillColor: "rgba(60,141,188,0.9)",
                strokeColor: "rgba(60,141,188,0.8)",
                pointColor: "#3b8bba",
                pointStrokeColor: "rgba(60,141,188,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(60,141,188,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "Bad Problem Instict",
                fillColor: "rgba(160,41,88,0.9)",
                strokeColor: "rgba(160,41,88,0.8)",
                pointColor: "#3a8bba",
                pointStrokeColor: "rgba(160,41,88,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(160,41,88,1)",
                data: [8, 28, 30, 9, 46, 17, 150]
            }
        ]
    };*/

    //-------------
    //- BAR CHART -
    //-------------
    /*var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartData;
    barChartData.datasets[1].fillColor = "#00a65a";
    barChartData.datasets[1].strokeColor = "#00a65a";
    barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true
    };
    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);*/

    //-------------
    //- BAR CHART -
    //-------------
    /*var densityCanvas = document.getElementById("ReddensityChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var Waiting = {
        label: 'Waiting ',
        data: [10, 5, 7, 15],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderWidth: 0,
        //yAxisID: "y-axis-waiting"
    };

    var proses = {
        label: 'Proses',
        data: [4, 9, 5, 7],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderWidth: 0,
        //yAxisID: "y-axis-proses"
    };

    var po = {
        label: 'PO',
        data: [5, 3, 4, 9],
        backgroundColor: 'rgba(244, 208, 63, 1)',
        borderWidth: 0,
        //yAxisID: "y-axis-po"
    };

    var planetData = {
        labels: ["Buyer A", "Buyer B", "Buyer C", "Buyer D"],
        datasets: [Waiting, proses,po]
    };

    var chartOptions = {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    };

    var barChart = new Chart(densityCanvas, {
        type: 'bar',
        data: planetData,
        options: chartOptions
    });*/
    

});
