var options = {
    series: [
      {
        name: "Revenue",
        type: "area",
        data: [23, 60, 44, 70, 45, 59, 44, 48, 80, 55, 69, 64],
      },
      {
        name: "Members",
        type: "line",
        data: [10, 9, 8, 18, 20, 12, 7, 8, 9, 19, 14, 30],
      },
    ],
    chart: { height: 330, type: "line", toolbar: { show: !1 } },
    stroke: { dashArray: [0, 8], width: [2, 2], curve: "smooth" },
    fill: {
      opacity: [1, 1],
      type: ["gradient", "solid"],
      gradient: {
        type: "vertical",
        inverseColors: !1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 70],
      },
    },
    markers: { size: [0, 0, 0], strokeWidth: 2, hover: { size: 4 } },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: { show: !1 },
      axisBorder: { show: !1 },
    },
    yaxis: {
      labels: {
        formatter: function (e) {
          return e + "k";
        },
      },
      axisBorder: { show: !1 },
    },
    grid: {
      show: !0,
      xaxis: { lines: { show: !1 } },
      yaxis: { lines: { show: !0 } },
      padding: { top: 0, right: -2, bottom: 15, left: 15 },
    },
    legend: {
      show: !0,
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: 5,
      markers: { width: 9, height: 9, radius: 6 },
      itemMargin: { horizontal: 10, vertical: 0 },
    },
    plotOptions: {
      bar: { columnWidth: "30%", barHeight: "70%", borderRadius: 3 },
    },
    colors: ["#22c55e", "#fa5944"],
    tooltip: {
      shared: !0,
      y: [
        {
          formatter: function (e) {
            return void 0 !== e ? "₹" + e.toFixed(2) + "k" : e;
          },
        },
        {
          formatter: function (e) {
            return void 0 !== e ? "₹" + e.toFixed(2) + "k" : e;
          },
        },
      ],
    },
  },
  chart = new ApexCharts(
    document.querySelector("#recent-buyers-chart"),
    options
  ),
  options =
    (chart.render(),
    {
      chart: { height: 270, type: "donut" },
      legend: {
        show: !1,
        position: "bottom",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: { width: 9, height: 9, radius: 6 },
        itemMargin: { horizontal: 10, vertical: 0 },
      },
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: { show: !0, total: { showAlways: !0, show: !0 } },
          },
        },
      },
      series: [150, 135, 90, 56],
      labels: ["Electronics", "Stationery", "Beauty", "Home & Kitchen"],
      colors: ["#22c55e", "#efb540", "#4ecac2", "#fa5944"],
      dataLabels: { enabled: !1 },
    });
(chart = new ApexCharts(
  document.querySelector("#month-sales-chart"),
  options
)).render();
