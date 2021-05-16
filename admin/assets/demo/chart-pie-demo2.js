// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "서울특별시",
      "경기도",
      "충청북도",
      "충청남도",
      "경상북도",
      "경상남도",
      "전라북도",
      "전라남도",
      "강원도",
      "제주특별자치도",
      "인천광역시",
      "대전광역시",
      "대구광역시",
      "부산광역시",
      "울산광역시",
      "광주광역시",
      "세종특별자치시",
      "기타(해외 등)",
    ],
    datasets: [
      {
        data: [12, 15, 11, 82, 11, 32, 51, 77, 53, 22, 11],
        backgroundColor: [
          "#3bb2d0",
          "#3887be",
          "#8a8acb",
          "#56b881",
          "#50667f",
          "#41afa5",
          "#f9886c",
          "#e55e5e",
          "#ed6498",
          "#fbb03b",
          "#3bb2d0",
          "#3887be",
          "#8a8acb",
          "#56b881",
          "#50667f",
          "#41afa5",
          "#f9886c",
          "#e55e5e",
          "#ed6498",
          "#fbb03b",
        ],
      },
    ],
  },
});
