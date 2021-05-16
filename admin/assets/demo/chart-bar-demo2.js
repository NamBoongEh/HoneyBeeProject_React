// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Bar Chart Example
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "1st Week",
      "2nd Week",
      "3rd Week",
      "4th Week",
      "5th Week",
    ],
    datasets: [
      {
        label: "전체",
        backgroundColor: "#f34235",
        data: [100, 234, 213, 232, 25, 3],
      },
      {
        label: "모임게시판",
        backgroundColor: "#33cc99",

        data: [15, 12, 61, 71, 21, 1],
      },
      {
        label: "자유게시판",
        backgroundColor: "#4ba6f5",

        data: [5, 2, 251, 78, 0, 14],
      },
      {
        label: "신고/문의게시판",
        backgroundColor: "#fdca30",

        data: [15, 12, 51, 41, 21, 1],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 5,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 300,
            maxTicksLimit: 10,
          },
          gridLines: {
            display: true,
          },
        },
      ],
    },
    legend: {
      display: true,
    },
  },
});
