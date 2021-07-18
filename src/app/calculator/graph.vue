<template>
  <div>
    <b-container class="saving_container t-center m-r-0 p-l-0" v-if="seen">

      <b-row id="topButtonBackground" class="topButton p-0" :style='dollarSignBackground'>
        <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
          <b-button
              class="buttonIn b-F9F9F9 c-254B77 m-l-0"
              v-on:click="showResiliency(); b254B77()"
              :disabled="dollarSign"
          ><img src="../../assets/Savings Calculator Graphic/blip-icon-savingscalc-billsavings.png">
            Bill Savings
          </b-button>
        </b-col>
        <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
          <b-button
              class="buttonIn b-254B77 c-FFFFFF m-r-0"
              v-on:click="showResiliency(); bF9F9F9()"
              :disabled="!dollarSign"
          ><img src="../../assets/Savings Calculator Graphic/blip-icon-savingscalc-backuppower.png">
            Backup power
          </b-button>
        </b-col>
      </b-row>

      <b-container v-if="dollarSign" class = "shadow b-F9F9F9 t-center w-100p">
        <b-container v-if="!hasMaxSaving">
          <b-row class="notBiggest_box t-center">
            <p class="current p4 t-center c-FFFFFF">
              You won't see any savings with this energy provider.
            </p>
            <p class = "currentBottom t-center c-FFFFFF">
              All plans provided are 0 savings.
            </p>
            <b-button class="contactUtilityProvider">
              <a :href="'http://' + this.pickedUtility.website" target="_blank" class="about C-4F9BC1 w-100p p4">
                <p class = "p4 C-4F9BC1 t-center">Contact Your Provider</p>
              </a>
            </b-button>
          </b-row>
        </b-container>

        <b-container v-else>
          <b-container v-if="checkMaxSaving">
            <b-row class="withBlip_box t-center">
<!--              <router-link :to="'/home'" class="logo w-100p">-->
<!--                <img src="../../assets/blip_logo.png"/>-->
<!--              </router-link>-->
              <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
              <p class="blip-area p1point8 t-center c-FFFFFF w-100p">Your savings with blip</p>
              <p v-if="savePerYear === 0" class = "savePerYear t-center c-B0E7FF w-100p">$0</p>
              <p v-else class = "savePerYear t-center c-B0E7FF w-100p">${{ninetyPercent}}-{{oneHundredAndTenPercent}}</p>
              <p class = "perYear t-center c-B0E7FF w-100p">per year*</p>
              <p class = "p5 c-B0E7FF t-center about">
                * estimated savings when pairing our device with an energy dense appliance
                <span id="tooltip-target-2" class="infoMark" v-b-tooltip.hover.bottomright="{variant: 'light', customClass: 'myTooltipClass'}"
                      title="Savings estimated based on utility specific rate plan information and average monthly consumption of 800kWh"
                ><font-awesome-icon icon="info-circle"/></span>
              </p>
            </b-row>

            <b-row class="congrs" style="font-weight: 200;">
              <p class = "p2 c-254B77 t-center" v-if="this.model == 'A'">
                Congratulations! With your time of use plan, you are on track to having the biggest savings.
              </p>
              <p class = "p2 c-254B77 t-center hoverUnderlined" v-if="this.model == 'C'" v-on:click="sendSwitchTOU()">
                You’re already saving big, but switching to a time of use plan would allow for maximum savings.
              </p>
              <p class = "p2 c-254B77 t-center hoverUnderlined" v-if="this.model == 'D'" v-on:click="sendSwitchTOU()">
                Switching to a time of use plan would allow for maximum savings.
              </p>
              <p class = "p2 c-254B77 t-center" v-if="this.model == 'E'">
                These are the savings you can expect if you are on a Time Of Use plan.
              </p>
            </b-row>
          </b-container>

          <b-container v-else>
            <b-container v-if="checkSaving">
              <b-container v-if="zeroSaving">
                <b-row class="notBiggest_box t-center">
                  <p class="current p4 t-center c-FFFFFF">
                    You won't see any savings with this plan.
                  </p>
                  <p class = "currentBottom t-center c-FFFFFF">
                    Please check other plan.
                  </p>
                  <b-button class="contactUtilityProvider" :to="'http://' + this.pickedUtility.website">
<!--                    <a :href="'http://' + this.pickedUtility.website" target="_blank" class="contactYourP p4 c-4F9BC1 w-100p">-->
                      <p class = "p4 C-4F9BC1 t-center">
                        Contact Your Provider to Switch
                    </p>
<!--                    </a>-->
                  </b-button>
                </b-row>
              </b-container>
              <b-container v-else>
                <b-row class="notBiggest_box t-center">
                  <!--          <router-link :to="'/home'" class="logo w-100p">-->
                  <!--            <img src="../../assets/blip_logo.png"/>-->
                  <!--          </router-link>-->
                  <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
                  <p class="current p4 t-center c-FFFFFF">
                    You are currently not on the plan that can get you the biggest savings.
                  </p>
                  <p class = "currentBottom t-center c-FFFFFF">
                    We recommend the {{maxSavingPlan}} plan
                    <b-button @click="askWhy = true; drawChartTwo()" class="iDont">(here’s why)</b-button>.
                    <br><br>
                    ———————————————
                    <br><br>
                    It’s easy to switch! Contact your provider below!
                  </p>

                  <b-button class="contactUtilityProvider">
                    <a :href="'http://' + this.pickedUtility.website" target="_blank" class="about C-4F9BC1 w-100p p4">
                      <p class = "p4 C-4F9BC1 t-center">Contact Your Provider to Switch</p>
                    </a>
                  </b-button>
                </b-row>

                <b-row class="inBetween t-center" style="margin-bottom: 40px">
                  <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="t-right">
                    <router-link :to="'/home'" class="logoInBtw">
                      <img src="../../assets/blip_logo.png"/>
                    </router-link>
                  </b-col>
                  <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="rightInBtw t-left m-tb-a">
                    <p class="p4 c-254B77">Your savings with blip:</p>
                    <h4 class="c-4F9BC1">${{ninetyPercent}}-{{oneHundredAndTenPercent}}/year</h4>
                  </b-col>
                </b-row>
              </b-container>
            </b-container>

            <b-container v-show="!askWhy">
              <b-row class="thisIs c-4F9BC1">
                <h4>This is what you would save with the {{maxSavingPlan}} plan:</h4>
              </b-row>


              <b-row class="withBlip_box t-center">
                <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
                <p class="yourSaving p4 t-center c-FFFFFF w-100p">Your savings with blip</p>
                <p class = "savePerYear t-center c-B0E7FF w-100p">${{ninetyPercentMaxSaving}}-{{oneHundredAndTenPercentMaxSaving}}</p>
                <p class = "perYear t-center c-B0E7FF w-100p">per year</p>
                <router-link :to="'/about'" class="about C-4F9BC1 w-100p">
                  <p class = "p4 C-4F9BC1 t-center">Learn more how you can save money with blip</p>
                </router-link>
              </b-row>
            </b-container>

          </b-container>
        </b-container>

        <b-container v-show="checkMaxSaving || askWhy">
          <b-row class="graph w-100p t-center">
            <b-row class="graphButton w-100p t-center p-0">
              <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
                <b-button
                    variant="outline-primary"
                    v-on:click="drawSeasonalSavings('chartOne')"
                    :disabled="!showOverallSavings"
                >Monthly Savings
                </b-button>
              </b-col>
              <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
                <b-button
                    variant="outline-primary"
                    v-on:click="drawOverallSavings('chartOne')"
                    :disabled="showOverallSavings"
                >Total Savings
                </b-button>
              </b-col>
            </b-row>

            <b-row class="graphSaving">
              <div v-if="planClickd" id="chartOne" class="chart" style="width: 520px; height: 423px;"></div>
            </b-row>
          </b-row>
        </b-container>
      </b-container>

      <b-container v-else class="shadow b-254B77 t-center w-100p">

        <h4 class="ourDevice c-FFFFFF w-75p t-center m-lr-a">
          Our device provides 2.2 kWh of backup power, enough to power your fridge for 1-2 days, or run your WiFi router for weeks
          <span id="tooltip-target-3" class="infoMarkI c-D3D3D3" v-b-tooltip.hover.bottom="{variant: 'light', customClass: 'myTooltipClass', color: '#254B77'}"
                title="Based on U.S. Energy Information Administration, Annual Electric Power Industry Report (2019 data. Only outages > 5 minutes are included)"
          ><font-awesome-icon icon="info-circle"/></span>
        </h4>
        <b-row class="outage t-center">
          <div class="outageTimes c-FFFFFF t-center w-100p m-tb-a">
            <!--              <p class="outageTimes c-FFFFFF t-left w-100p m-tb-a">-->
            <p class="p1point5">{{pickedUtility.utilityName}} users in your area lost</p>
            <p class = "lostToBlackouts">{{computeHours(pickedUtility.outage.saidi)}}</p>
            <p class="p1point5">of power to blackouts this year</p>
          </div>
          <div class="outageTimes c-FFFFFF t-center w-100p m-tb-a">
            <p class="p1point5">This provider has had an average of</p>
            <p class = "emf c-B0E7FF">{{pickedUtility.outage.saifi}} blackouts</p>
            <p class="p1point5">this year</p>
          </div>

          <div class="outageTimesLast c-FFFFFF t-center w-100p m-tb-a">
            <p class="p1point5">Each blackout lasted</p>
            <p class = "emf c-B0E7FF">{{computeHours(pickedUtility.outage.caidi)}}</p>
            <p class="p1point5">on average</p>
          </div>
        </b-row>

      </b-container>

      <b-row v-if="dollarSign" class="signUpForUpdates w-100p t-center">
        <b-button class="submit" variant="outline-primary" @click="sendSubscription()">
          <a ref="">Get notified when we launch</a>
        </b-button>
      </b-row>

      <b-row v-else class="signUpForUpdates w-100p t-center">
        <b-button class="submit outline" variant="outline-primary" onclick="window.location.href='../product'" style="width: 223px">
          <a ref="">Learn more</a>
        </b-button>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import echarts from "echarts";
// import axios from 'axios';
require('echarts/theme/shine');

export default {
  name: "graph",
  props:['pickedUtility','iDontKnow','overAllSavings','planPicked','planClickd','savePerYear','ac'],
  data: function() {
    return {
      data:'display this!',
      seen: true,
      zipcode: "",
//Start: add
      dollarSignNum: 0,
      dollarSign: this.ac,
//       seasonalSavings: null,
      checkMaxSaving: true,
      awaiting: false,
      askWhy: false,
      chartOne: null,
      overallSavingsButtonAbled: true,
      xAxisMark: ['Jan','','','Apr','','','Jul','','','Oct','',''],
      xAxisMark4Overall: ['Year 1', '', '', '', 'Year 5', '', '', '', '', 'Year 10'],
      xAxisMark4Seasonal: ['Jan','','','Apr','','','Jul','','','Oct','',''],
          // ['','','Spring','','','Summer','','','Fall','','','Winter'],
//End: add
    };
  },
  created() {

  },
  computed: {
    isDisabled: function() {
      return !this.zipcode;
    },
    zeroSaving: function (){
      if (this.savePerYear === 0){
        // this.askWhy = false;
        return true
      }
      return false
    },
    // checkMaxSaving: function(){
    //   if (this.savePerYear !== 0) {
    //     return true
    //   }
    //   return false
    //   // var max = Math.max(...this.overAllSavings)
    //   // var zero = 0
    //   // // console.log(max)
    //   // // console.log(this.savePerYear)
    //   // if (this.savePerYear === max && max !== zero){
    //   //   return true
    //   // }else{
    //   //   this.askWhy = false
    //   //   return false
    //   // }
    // },
    hasMaxSaving: function (){
      var max = Math.max(...this.overAllSavings)
      var zero = 0
      // console.log(max, zero)
      if (max !== zero){
        return true
      }else{
        return false
      }
    },
    checkSaving: function (){
      if (typeof(this.savePerYear) === "undefined"){
        return false
      }else{
        return true
      }
    },
    ninetyPercent: function (){
      // var ninetyP =
      return Math.round(0.9 * this.savePerYear)
    },
    oneHundredAndTenPercent: function (){
      return Math.round(1.1 * this.savePerYear)
    },
    showOverallSavings: function() {
      return !this.overallSavingsButtonAbled;
    },
    savingsForChart: function(){
      var savings = []
      for (var i = 0; i < 10; i++) {
        savings[i] = (this.savePerYear * (i + 1)).toFixed(2);
      }
      return savings;
    },
    overallSavings: function(){
      var savings = []
      for (var i = 0; i < 10; i++) {
        savings[i] = (this.savePerYear * (i + 1)).toFixed(0);
      }
      return savings;
    },
    seasonalSavings: function() {
      // var seasonal = [2, 3, 4, 6, 7, 8, 9, 8, 5, 4, 3, 2]
      // for (var i = 0; i < seasonal.length; i++) {
      //   seasonal[i] = (this.savePerYear * 3 * seasonal[i]).toFixed(2);
      // }
      var seasonal = []
      for (var i = 0; i < this.planPicked.savingList.length; i++) {
        seasonal.push(this.planPicked.savingList[i].toFixed(0))
      }
      return seasonal
    },
    maxSaving: function(){
      return Intl.NumberFormat().format(Math.max(...this.overAllSavings))
    },
    ninetyPercentMaxSaving: function(){
      return Math.round(0.9 * this.maxSaving)
    },
    oneHundredAndTenPercentMaxSaving: function(){
      return Math.round(1.1 * this.maxSaving)
    },
    maxSavingPlan: function(){
      var mark
      for (var i = 0; i < this.overAllSavings.length; i++) {
        if (this.overAllSavings[i] === Math.max(...this.overAllSavings)){
          mark = i;
          break;
        }
      }
      return this.pickedUtility.planList[mark].planName
    },
    model: function() {
      if (this.iDontKnow == false){
        if (this.planPicked.planType == 1) {
          if (this.savePerYear >= 39) {
            return 'A'
          } else {
            return 'B'
          }
        } else if (this.planPicked.planType == 0) {
          if (this.savePerYear >= 39) {
            return 'C'
          } else {
            return 'D'
          }
        }
      }else{
        return 'E'
      }
      return 'other'
    },
    dollarSignBackground: function(){
      if(this.dollarSign == true){
        return {background: '#254B77'}
      }else{
        return {background: '#F9F9F9'}
      }
    },
  },

  mounted() {
    this.print();
    this.$nextTick(function() {
      this.drawChartOne(this.seasonalSavings);
      // this.drawChartOne(this.overallSavings, 'chartTwo')
    })
  },

  watch:{
    // iDontKnow: {
    //     handler (newVal, oldVal){
    //       this.iDontKnow = newVal;
    //       if(this.iDontKnow  == true){
    //         this.model = 'E';
    //         this.dollarSign = true;
    //       }
    //       // this.iDontKnow = !newVal;
    //     },
    //     immediate: true
    //   },

    savePerYear: {////////////////////////////////command out to disable "This is what you would save with the Time of Use plan:" section
      handler (newVal, oldVal){
        if(typeof(newVal) === "undefined" && typeof(oldVal) !== "undefined") {
          this.checkMaxSaving = false
        }else{
          this.checkMaxSaving = true
        }
      },
      immediate: true
    },

    // dollarSign: function(){
    //   if(this.dollarSign == true) {
    //     this.b254B77()
    //   }else{
    //     this.bF9F9F9()
    //   }
    // },
    // ac: {
    //   handler (newVal, oldVal){
    //     this.ac = !newVal;
    //     if(this.dollarSignNum == 0){this.dollarSign = !this.ac;}
    //   },
    //   immediate: true,
    //   deep: true
    // },
    // ACHere: function (val){
    //   this.dollarSign = val
    //   // alert(val)
    // }
  },

  methods: {

//Start: add
    print(){
      // console.log("savePerYear", this.savePerYear)
      // console.log("In graph.vue after mounted",this.planPicked)
    },
    showResiliency(){
      // console.log(this.pickedUtility.utilityName)
      this.dollarSign = !this.dollarSign
      this.reDrawChart()
    },
    b254B77(){
      document.getElementById('topButtonBackground').style.background= "#254B77";
    },

    bF9F9F9(){
      document.getElementById('topButtonBackground').style.background= "#F9F9F9";
    },
    // setButton(){
    //   if(this.model == 'A' || this.model == 'C'){
    //     this.dollarSign = true
    //     this.b254B77()
    //   }else if(this.model == 'B' || this.model == 'D'){
    //     this.dollarSign = false
    //     this.bF9F9F9()
    //   }
    // },

    computeHours(mins){
      if(mins < 60){
        if (mins > 5){
          mins = Math.round(mins)
        }
        let output = String(mins) + ' mins'
        return output
      }else{
        let hours = Math.floor(mins / 60)
        let restMins = Math.round(mins - hours * 60)
        let output = String(hours) + ' hrs ' + String(restMins) + ' mins'
        return output
      }
    },

    sendSwitchTOU(){
      this.$emit('switchTOU', true)
    },

    drawChartOne(dataHere){
      // console.log('graph', this.planPicked)
      // console.log('graph: ', dataHere)
      // console.log('array', this.savingsForChart);
      // console.log('getElement',document.getElementById(id))
      // this.charts.clear();
      // console.log('ask', this.askWhy)
      // console.log('checkMax', this.checkMaxSaving)
      this.charts = echarts.init(document.getElementById('chartOne'))
      // this.charts.setOption({
      this.charts.setOption({
        color: ['#B0E7FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },

          formatter: "Saving: <br/> ${c}"
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisMark,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ccc",
                type: 'dashed',
              }
            },
            // splitLine: {
            //   show: true,
            //   lineStyle:{
            //     type:'dashed'
            //   }
            // },
            axisLabel: {
              interval: 0,
              rotate: 45, //If the label names are too long you can manage this by rotating the label.
              textStyle:{color: '#254B77'}
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle:{
                type:'dashed'
              }
            },
            axisLabel: {
              formatter: '${value}',
              textStyle:{color: '#254B77'}
            },
            axisLine: {
              lineStyle: {
                color: "#ccc",
                type: 'dashed',
              }
            },
          }
        ],
        series: [
          {
            name: 'Saving',
            type: 'bar',
            barWidth: '60%',
            data: dataHere,
            // textStyle:{fontFamily: 'Montserrat'}
            // this.savingsForChart
          }
        ],
        textStyle:{fontFamily: 'Montserrat'}
      }, {notMerge: true})
    },
    drawSeasonalSavings(){
      // this.overallSavings = this.savingsForChart

      // this.savingsForChart = []
      // console.log('here; ',this.overallSavings)
      // var seasonal = [2, 3, 4, 6, 7, 8, 9, 8, 5, 4, 3, 2]
      // for (var i = 0; i < seasonal.length; i++) {
      //   this.savingsForChart[i] = (this.savePerYear * 3 * seasonal[i]).toFixed(2);
      // }
      // console.log('here; ',this.seasonalSavings)
      this.xAxisMark = this.xAxisMark4Seasonal
      this.drawChartOne(this.seasonalSavings)
          // this.savingsForChart)
      // this.savingsForChart = []
      this.overallSavingsButtonAbled = true
    },
    drawOverallSavings(){
      // this.savingsForChart = []
      // this.savingsForChart = this.overallSavings
      // console.log(this.savingsForChart)
      this.xAxisMark = this.xAxisMark4Overall
      this.drawChartOne(this.overallSavings)
      this.overallSavingsButtonAbled = false
      // this.askWhy = false
    },
    reDrawChart(){
      // console.log('reDraw: ', this.savePerYear)
      this.$nextTick(function () {
        // console.log('reDraw: ', this.savePerYear)
        if (this.overallSavingsButtonAbled === false){
          this.drawChartOne(this.overallSavings)
        }else{
          this.drawSeasonalSavings()
        }
      })
    },
    drawChartTwo(){
      // console.log('gotHere')
      this.drawSeasonalSavings()
      // this.drawChartOne(this.overallSavings)
    },

    sendSubscription(){
      this.$emit('subscription', true)
    }
//End: add
  },
  components: {
    // echarts
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";
</style>