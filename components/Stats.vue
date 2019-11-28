<template>
  <div class="example">
    <apexcharts
      :options="chartOptions"
      :series="series"
      width="700"
      height="350"
      type="line" />
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [
            '2017 Q4',
            '2018 Q1',
            '2018 Q2',
            '2018 Q3',
            '2018 Q4',
            '2019 Q1',
            '2019 Q2',
            '2019 Q3',
            '2019 Q4'
          ]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                color: '#008FFB'
              }
            },
            title: {
              text: 'Readers',
              style: {
                color: '#008FFB'
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Citations',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                color: '#00E396'
              }
            },
            title: {
              text: 'Citations',
              style: {
                color: '#00E396'
              }
            }
          }
        ],
        title: {
          text: "Bradley's work",
          align: 'left',
          offsetX: 110
        }
      },
      series: [
        {
          name: 'Readers',
          type: 'line',
          data: [506, 540, 590, 627, 670, 698, 723, 766]
        },
        {
          name: 'Citations',
          type: 'line',
          data: [69, 72, 78, 81, 86, 90, 98, 107]
        }
      ],
      stroke: {
        width: [1, 1, 4]
      }
    }
  }
}
</script>
