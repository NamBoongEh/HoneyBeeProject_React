// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "스포츠",
      "스터디/자기계발",
      "독서/토론",
      "게임",
      "여행",
      "문화/예술",
      "봉사활동",
      "패션/뷰티",
      "반려동물",
      "원데이클래스",
    ],
    datasets: [
      {
        data: [12, 15, 11, 82, 11, 32, 51, 77, 53, 22],
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
        ],
      },
    ],
  },
});
