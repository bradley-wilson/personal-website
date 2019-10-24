<script>
import { Line } from 'vue-chartjs'
function setIntervalX(callback, delay, repetitions) {
  var x = 0
  var intervalID = window.setInterval(function() {
    callback()

    if (++x === repetitions) {
      window.clearInterval(intervalID)
    }
  }, delay)
}
export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Now'],
      datasets: [
        {
          label: 'Data One',
          data: [0, 100, 180, 299, 360, 403, 489, 532, 594, 632, 688, 729],
          backgroundColor: '#424BAF'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
