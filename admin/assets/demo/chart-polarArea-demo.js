// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("mypolarAreaChart");
var myRadarChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14, 5],
        backgroundColor: [
          "#33cc99",
          "#4ba6f5",
          "#fdca30",
          "#f79400",
          "#f34235",
          "#aeb6b8",
        ],
      },
    ],
  },
});
