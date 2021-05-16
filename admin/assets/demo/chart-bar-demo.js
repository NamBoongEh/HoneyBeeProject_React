// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
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
    datasets: [
      {
        label: "전체",
        backgroundColor: "#f34235",
        data: [100, 234, 213, 232, 525, 3],
      },
      {
        label: "모임게시판",
        backgroundColor: "#33cc99",

        data: [415, 312, 651, 71, 21, 1],
      },
      {
        label: "자유게시판",
        backgroundColor: "#4ba6f5",

        data: [425, 2, 251, 78, 900, 14],
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
            maxTicksLimit: 12,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 1000,
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
