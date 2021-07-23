<template>
  <div style="padding-left: 0px; padding-right: 0px; width: 100%;">
    <banner></banner>
    <b-container style="">
      <b-row>
      <b-col  xs="12" sm="12" md="12" lg="5" xl="5" class = "">
        <savings
            @display-savings="displaySavings"
            v-on:iDontKnow="getIDontKnow"
            v-on:noData="getNoData"
            v-on:pickedUtility="getUtility"
            v-on:planPicked="getPlan"
            v-on:overAllSavings="getOverAllSavings"
            v-on:planClickd="getPlanClicked"
            v-on:savePerYear="getSaving"
            :switchTOU="switchTOU"
            @refreshGraph = "refreshGraph"
        ></savings>
      </b-col>

      <b-col xs="12" sm="12" md="12" lg="7" xl="7" class = "">
        <div  v-if='savings' class="mainPic">
          <img class="blip-pig" src="../../assets/Savings Calculator Graphic/Main Graphic/blip-savings-calculator-graphic-F-taller.png" >
        </div>
        <div v-else>
          <graph
              :pickedUtility = "pickedUtility"
              :iDontKnow = "iDontKnow"
              :planPicked = "planPicked"
              :planClickd = "planClickd"
              :save-per-year="savePerYear"
              :ac="ac"
              :overAllSavings="overAllSavings"
              v-on:switchTOU="getSwitch"
              v-on:subscription="getSubscription"
              ref = "graphContainer"
          ></graph>
        </div>
      </b-col>
      </b-row>

    </b-container>

    <section v-show = "subscription" class="fog">
      <b-button
          class="clickToClose"
          @click="closeWindow()"
      ></b-button>
      <b-row class = "window absolute-mid" style="">
        <signUp
            v-if="subscription"
            v-on:subscriptionEnd="getSubscriptionEnd"
        ></signUp>
      </b-row>
    </section>

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import savings from "../savings.vue";
import graph from "./graph.vue";
import signUp from "@/app/shared/components/signUp.vue";
import utility from "./utility.vue"
import noneInputFooter from "@/app/shared/components/noneInputFooter";

export default {
  name: "calculator",
  data() {
    return {
      savings: true,
      noData: false,
      iDontKnow: false,
      pickedUtility: [],
      overAllSavings: [],
      planPicked: [],
      planClickd: false,
      savePerYear: 0,
      numOfGraphLoaded: 0,
      ac: true,
      switchTOU: false,
      subscription: false,
      subscriptionEnd: false,
    };
  },
  computed: {
  },
  watch: {
    subscriptionEnd: {
      handler(newVal, oldVal) {
        if (newVal === true) {
          this.subscription = false
        }
      },
      // immediate: true
    },
  },

  mounted() {
  },

  methods: {
    displaySavings(value) {
      // console.log('waht', value);
      this.savings = false;
      // console.log('plan',this.planPicked)
    },
//add start
    getIDontKnow(e){
      this.iDontKnow = e
      // console.log('IDooooooooont',this.iDontKnow)
    },
    getNoData(nData){
      this.noData = nData
      // console.log('NNNNNNNNNNNNNdata',this.noData)
      this.savings = true
    },
    getUtility(utility){
      this.pickedUtility = utility
      // this.savings = true////////////////////////////////////////////////command it back if hope to load image again when choose utility again
      // console.log('hhhhhhhh',this.pickedUtility)
      this.switchTOU = false
    },
    getOverAllSavings(allSavings){
      this.overAllSavings = allSavings
      // console.log('here',this.overAllSavings)
    },
    getPlan(plan){
      this.planPicked = plan
      // console.log('hhhhhhhh',this.planPicked)
      this.switchTOU = false
    },
    getPlanClicked(planClicked){
      this.planClickd = planClicked
    },
    getSaving(saving){
      this.savePerYear = saving
      // console.log('saving in father', this.savePerYear)
      if (this.savePerYear < 39){
        this.ac = false
      }
      // console.log('AAAAACCCCCC in parent', this.ac)
      // console.log(this.numOfGraphLoaded)
      // this.numOfGraphLoaded = this.numOfGraphLoaded + 1
    },
    getSwitch(swi){
      // alert(this.switchTOU)
      this.switchTOU = swi
      // alert(this.switchTOU)
      // this.switchTOU = false
    },
    refreshGraph(){
      // if (this.numOfGraphLoaded > 0){
      //   console.log("ha")
      this.$refs.graphContainer.reDrawChart();
      // }
    },
    getSubscription(subs){
      this.subscription = subs
      this.subscriptionEnd = false
    },
    closeWindow(){
      this.subscription = false
    },
    getSubscriptionEnd(end){
      this.subscriptionEnd = end
    }
//add end
  },
  components: {
    banner,
    savings,
    graph,
    signUp,
    noneInputFooter,
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";
</style>


