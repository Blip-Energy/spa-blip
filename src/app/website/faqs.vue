<template xmlns="http://www.w3.org/1999/html">
  <div>
    <banner></banner>
    <div class="main">
      <!--start:FAQs-->
      <section class="FAQs">
        <div class="container">
          <div class="w-100p">
            <div class="pr-16">
              <h2 class="h2 two54B77 t-left" style="margin-left: 0">FAQs</h2>

              <div class="topline">
                <h3 class="h3 c-4F9BC1 t-left wow fadeInUp">How much money can I expect to save?</h3>
                <p class="p3 c-254B77 t-left w-511px wow fadeInUp" style="left: 0">
                  It depends on where you live. blip can save you $50 a month or more. Check our
                  <a href="./calculator" class=""><u>savings calculator</u></a>
                  for more information!
                </p>
              </div>

              <div class="topline">
                <h3 class="h3 c-4F9BC1 t-left wow fadeInUp">Do I need an electrician to install it?</h3>
                <p class="p3 c-254B77 t-left w-511px wow fadeInUp" style="left: 0">
                  Nope! Just plug it into your outlet. You will then finish setting up your blip via your user dashboard.
                </p>
              </div>

              <div class="topline">
                <h3 class="h3 c-4F9BC1 t-left wow fadeInUp">How does blip help the environment?</h3>
                <p class="p3 c-254B77 t-left w-511px wow fadeInUp" style="left: 0">
                  Some dirty power plants exist only to meet demand during peak energy times.
                  By lowering demand at peak times, these plants won’t have to run as often.
                  When enough blip units are installed, utilities may be able to shut down these dirty power plants altogether.
                </p>
              </div>

              <div class="topline">
                <h3 class="h3 c-4F9BC1 t-left wow fadeInUp">I have an idea for blip. Who can I talk to?</h3>
                <p class="p3 c-254B77 t-left w-511px wow fadeInUp" style="left: 0">
                  Please reach out to us by filling out the contact form.
                </p>
              </div>

              <div class="content t-center">
                <p class="p1point5 c-254B77 t-center wow fadeInUp">Have more questions?</p>
                <button type="button" class="btn btn-B0E7FF" style="margin-top: 18px" data-toggle="modal" data-target="#modalSignup" onclick="window.location.href='./contact-us'">
                  Contact Us
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/FooterII.vue";

export default {
  name: "faqs",
  data() {
    return {
      chartOne: null,
      chartTwo: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.drawChartOne('chartOne')
    })
    this.$nextTick(function() {
      this.drawChartTwo('chartTwo')
    })
  },

  methods: {
    drawChartOne(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          // enabled: false,
          // trigger: 'item',
          trigger: 'axis',
          show: false,
          // axisPointer: {
          //   type: 'cross'
          // }
        },
        color:['#254B77'],
        legend: {
          data: ['Costs you would pay without blip'],
          selectedMode: false,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          axisLine: {onZero: false},
          boundaryGap: false,
          data: ['3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Costs you would pay without blip',
          data: [1, 1, 2, 1.7, 2, 5, 2, 1],
          type: 'line',
          symbol: 'circle',
          smooth: true,
          itemStyle:{
            normal:{
              lineStyle:{
                color:'#254B77'
              }
            }
          }
        }],
        hover: {
          filter: {
            type: 'none',
          }
        },
      })

    },

    drawChartTwo(id){
      this.charts = echarts.init(document.getElementById(id))
      // this.charts.setOption({
      this.charts.setOption({
        tooltip: {
          // enabled: false,
          // trigger: 'item',
          trigger: 'axis',
          show: false,
        },
        color:['#183B56','#4F9BC1'],
        legend: {
          data: ['Costs you would pay without blip', 'Costs you would pay with blip'],
          selectedMode: false,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Costs you would pay without blip',
            data: [1, 1, 2, 1.7, 2, 5, 2, 1],
            type: 'line',
            symbol: 'circle',
            smooth: true,
            itemStyle:{
              normal:{
                lineStyle:{
                  color: '#183B56'
                }
              }
            }
          },
          {
            name: 'Costs you would pay with blip',
            data: [1.5, 1.5, 2, 1.7, 2, 2.5, 2, 1.5],
            type: 'line',
            symbol: 'circle',
            smooth: true,
            itemStyle:{
              normal:{
                lineStyle:{
                  color: '#4F9BC1'
                }
              }
            }
          }
        ]
      })
    }

  },
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_product.scss";
</style>


