new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["North America", "Europe", "Africa", "Asia"],
    datasets: [
      {
        label: "Population (million)",
        data: ["579", "741.4", "1216", "4463"],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"]
      }
    ]
  },
  options: {
    legend: {
      display: false /*to remove the legend */
    }
  }
});

new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "China",
        data: ["1179", "79824", "811171"]
      }
    ]
  }
});
