// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6",
      "May 7",
      "May 8",
      "May 9",
      "May 10",
      "May 11",
      "May 12",
      "May 13",
      "May 14",
      "May 15",
      "May 16",
      "May 17",
      "May 18",
      "May 19",
      "May 20",
      "May 21",
      "May 22",
      "May 23",
      "May 24",
      "May 25",
      "May 26",
      "May 27",
      "May 28",
      "May 29",
      "May 30",
      "May 31",
    ],
    datasets: [
      {
        label: "가입자",
        lineTension: 0.5,
        backgroundColor: "rgba(68,11,212,0.2)",
        borderColor: "#04005e",
        pointRadius: 5,
        pointBackgroundColor: "#440bd4",
        pointBorderColor: "rgb(255,255,255)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#ff2079",
        pointHitRadius: 3,
        pointBorderWidth: 2,
        data: [10, 100, 3, 55, 4, 20, 15, 11, 19, 22, 51, 2, 55],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 11,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 20,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
