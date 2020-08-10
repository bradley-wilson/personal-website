<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: function() {
        return { message: 'initiated' }
      }
    }
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'point'
        },
        layout: {
          padding: {
            top: 30,
            bottom: 50,
            right: 60,
            left: 30
          }
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
