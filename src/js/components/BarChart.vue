<template>
  <div style="max-width: 600px">
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
</template>
<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
const axios = require("axios");
export default {
  name: "BarChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    //datasets: { type: Array },
    //label: { type: Array },
  },
  data() {
    return {
      chartData: { type: Object },
    };
  },
  setup() {
    //this.loadData();
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
            data: [40, 20, 50, 10],
          },
          {
            label: "My Second Dataset",
            backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
            data: [-40, -20, -10, -10],
          },
        ],
      },
    };

    return {
      barChart,
    };
  },
  methods: {
    updateChart(data) {
      //this.chartData = data;
    },

    async loadData() {
      await function () {
        //this.updateChart([40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]);
        this.chartData = {
          labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
          datasets: [
            {
              label: "My First Dataset",
              backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9", "#34495e"],
              data: [40, 20, 50, 10],
            },
            {
              label: "My Second Dataset",
              backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
              data: [-40, -20, -10, -10],
            },
          ],
        };
      };
      //await this.$axios.get(this.url)
      //    .then(response => {
      //        this.updateChart(response.data)
      //    })
    },
  },
};
</script>

<style></style>
