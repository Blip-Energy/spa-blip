<template>
  <div class="all">
    <b-container class="zipcode_container t-left m-l-0 p-0" v-if="seen" >

      <b-row class = "w-100p m-l-0 p-l-0 m-b-50" >
        <h1 class="h1point5 c-254B77 t-left see">See how blip can save you money</h1>
        <p class="p3 c-254B77 t-left m-l-0 how" style="margin-left: 0">
          When paired with an energy dense appliance like a window AC, blip can save you money on your electricity bill.
          <br><br>
          Fill in your zipcode to get started
        </p>
        <b-row class="zipcode_input t-left w-100p m-l-0">
          <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="t-left m-tb-a p-l-0">
            <b-form-input
                class="zip-input absolute-mid"
                v-model="zipcode"
                placeholder="enter zipcode"
                @keyup.enter="checkZipcode()">
            </b-form-input>
          </b-col>
          <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="i-a-c p-0">
            <b-button
                class = "submit search-button m-l-0"
                variant="outline-primary"
                v-on:click="checkZipcode()"
                :disabled="isDisabled"
            >Search</b-button>
          </b-col>
        </b-row>
        <b-row class = "w-100p m-l-0 p-l-0" >
          <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-center m-tb-a p-l-0">
          <p v-show="!showValidZipcodeError" class="validZipcodeError p4 c-FF0000 t-center">Please enter a valid zip code</p>
          </b-col>
        </b-row>
      </b-row>

      <b-row v-show="notNYorCA" class="headsUp t-left w-100p m-l-0">
        <b-col  xs="5" sm="5" md="5" lg="5" xl="5" class ="headsUp_left">
          <img src="../assets/Savings Calculator Graphic/Heads Up Location Graphic/1.png">
        </b-col>
        <b-col  xs="7" sm="7" md="7" lg="7" xl="7" class ="headsUp_right">
          <h3 class="h3 c-254B77 t-left">Heads up!</h3>
          <p class="p3 c-254B77 t-left" style="line-height: 20px;">
            The blip savings calculator is not yet available for your area.
          </p>
          <p class="p4 c-4F9BC1 t-left">
            Check back soon, we are expanding fast!
          </p>
        </b-col>
        <b-button class="submit NYCresult m-lr-a" v-on:click="oneOOOnine()">
          <span>Click here to see our calculator at work in New York City</span>
        </b-button>
      </b-row>

    </b-container>



    <div  v-if ="showNoData === false">
      <b-row class="utility_container t-left m-l-0" v-if="!seen">
        <div class="h2point5 c-254B77 t-left m-l-0 seeAfterNotSeen">See how blip can save you money</div>
        <b-row class="zipcode_input t-left m-l-0 p-l-0">
          <b-col xs="7" sm="7" md="7" lg="7" xl="7" class="h-52px t-left m-l-0 p-l-0">
            <b-form-input
                v-model="zipcode"
                class = "input_not_seen absolute-mid"
                placeholder="Enter your zipcode"
                @keyup.enter="checkZipcodeAfter()"
            ></b-form-input>
          </b-col>

          <b-col xs="5" sm="5" md="5" lg="5" xl="5" class="t-center i-a-c">
            <b-button variant="outline-primary" v-on:click="checkZipcodeAfter()" class="enter_button submit">
              Enter
              <!--            <font-awesome-icon icon="search"/>-->
            </b-button>
          </b-col>

          <b-row class="t-left w-100p m-l-0 p-l-0">
<!--            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="h-52px t-left m-l-0 p-l-0">-->
            <p v-show="!showValidZipcodeError" class="validZipcodeError p4 c-FF0000 t-center" style="">
              <span v-if="showErrorMsgExpNYCA">We'll be serving your area soon!</span>
              <span v-else>Please enter a valid zip code</span>
            </p>
<!--            </b-col>-->
          </b-row>
        </b-row>

        <b-row class="utility_provider t-left w-100p m-l-0 p-l-0">
          <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="t-left m-l-0 p-l-0">
            <h4 class = "h-40px c-254B77">Choose your energy provider:</h4>
            <b-row class="utility_select w-100p m-l-0 p-l-0" v-if="posts && posts.length">
              <!--            Start: add-->
              <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="t-left p-l-0" v-for="post of posts">
                <div class="card" id="tooltip-target-1">
                  <img v-if="post.logo !== ''" :src= "'http://'+post.logo" class = "utilityLogo">
                  <b-button
                      class="utilityProviderPic"
                      :id="onlyOneProvider"
                      variant="outline-primary"
                      v-if="post.logo !== ''"
                      v-on:click="disableButton($event); list(post); sendUtility(post); countOverallPlan(post); provider = true;"
                      v-b-tooltip.hover.bottom="{variant: 'light',customClass: 'myTooltipClass', title: post.utilityName}"
                  >
<!--                    <img :src= "'http://'+post.logo" class = "utilityLogo">-->
                  </b-button>

                  <b-button
                      class="utilityProviderLetter"
                      :id="onlyOneProvider"
                      variant="outline-primary"
                      v-if="post.logo === ''"
                      v-on:click="disableButton($event); list(post); sendUtility(post); countOverallPlan(post); provider = true;"
                  >
                    {{post.utilityName}}
                  </b-button>
                </div>
              </b-col>
              <!--            End: add-->
            </b-row>
          </b-col>
        </b-row>

        <b-row class="rate_plan t-left w-100p m-l-0 p-l-0" v-if="provider">
          <!--        <b-col xs="12" sm="12" md="12" lg="12" xl="12" >-->
          <h4 class="c-254B77">Choose your rate plan:</h4>
          <b-button
              v-on:click="doTOU()"
              class="iDont"
          >
            <p class="inIDont p4 c-4F9BC1 t-left">(I don’t know my rate plan)</p>
          </b-button> <!--!!!!!!!!!!!!!!!!!!!Empty!!!!!!!!!!!!!!!!!!-->
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
<!--            <vue-dropdown :config="config"></vue-dropdown>-->

            <select name="planDropdown" class="m-l-0 sdropdown" v-model="model" v-on:change="planSelected($event)">
<!--              <option selected>Click me to choose</option>-->
              <option :value="''" disabled selected>Please select...</option>
              <option
                  class="dropdown-item"
                  v-for="(plan, index) of utilityPicked.planList"
                  :value="index"
              >{{plan.planName}}</option>
            </select>
            <!--            </b-col>-->
          </b-row>
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
            <b-button
                class="submit seeSavings"
                variant="outline-primary"
                @click="savings = !savings; displaySavings(); "
                :disabled = noRatePlan
            >
              See Your Savings
            </b-button>
            <!--              add: savings = !savings-->
          </b-row>
          <!--        </b-col>-->
        </b-row>
      </b-row>
    </div>

    <div v-else class="dontSupport p-l-0 t-left">
      <button @click="refresh()" class="goBack w-100p">
        <p class="p4 c-254B77 t-left m-l-0">&lt; Go back</p>
      </button>

      <h2 class="h2 c-254B77 t-left m-l-0">We currently do not support that zip code.</h2>
      <h4 class="h4 c-254B77 t-left m-l-0">blip is expanding fast, please check back soon!</h4>
      <button class="btn btn-outline-254B77">Sign up for Updates</button>

      <h4 class="h4 c-254B77 t-left m-l-0">Not sure if blip is the right fit for you? </h4>
      <p class="weCanHelp p4 c-254B77 t-left m-l-0">We can help you figure that out. </p>

      <b-button
          @click="contactUs()"
          class="sendUsANote submit m-l-0"
      >Send us a note</b-button>
    </div>




  </div>
</template>

<script>
import axios from 'axios'; //add
// import VueDropdown from 'vue-dynamic-dropdown'; //add

export default {
  name: "savings",
  props:['switchTOU'],
  data: function() {
    return {
      dataHere:'display this!',
      seen: true,
      zipcode:
          // '10009',
          "",
//Start: add
      showValidZipcodeError: true,
      showErrorMsgExpNYCA: false,
      nonNYCA: false,
      showNoData: false,
      notNYorCA: false,
      posts: [],
      onlyOneProvider: "",
      errors: [],
      utilityPicked: [],
      planNum: 0,
      address: 'https://www.api.blipenergy.com/plan/get_savings_by_zip_code/',
      localAddress: './src/assets/JSONforTesting/',
      overallPlan:[],
      noRatePlan: true,
      selectedPlan: '',
      model:'',
      planClickd: true,
      capacity: 2.2,
      numOfGraphLoaded: 0,
      provider: false,
      // switchTOU: false,
      config: {
        options: [
          {
            value: "Time of Use"
          },
          {
            value: "Default Residential"
          },
          {
            value: "option 3"
          },
        ],
        prefix: "",
        backgroundColor: "#FFFFFF"
      }
//End: add
    };
  },
  created() {

  },
  computed: {
    isDisabled: function() {
      return !this.zipcode;
    },
    // noRatePlan: function (){
    //   if (this.selectedPlan === ''){
    //     return true
    //   }
    //   return false
    // },
  },

  mounted() {
    console.log('switchTOU', this.switchTOU)
  },
  watch:{
    switchTOU: {
      handler (newVal, oldVal){
        if(newVal === true && oldVal === false) {
          this.doTOU()
          // this.switchTOU = false;
        }
        // this.switchTOU = false;
      },
      immediate: true
    },

    selectedPlan: {
      handler (newVal, oldVal){
        if(newVal !== '' && oldVal === '') {
          this.noRatePlan = false
        }
      },
      immediate: true
    }
  },

  methods: {
    entered_zipcode(zipcode) {
      // console.log(zipcode);
    },

    displaySavings() {
      const data = this.dataHere;
       this.$emit('display-savings', data)
       // console.log('data', data);
       this.numOfGraphLoaded = 1
    },

//Start: add
    checkZipcode(){
      // console.log(this.zipcode.length)
      var split = this.zipcode.split("")
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var allNum = true;
      for(var i=0; i<5; i++){
        if(!numbers.includes(split[i])){
          allNum = false;
          break;
        }
      }
      // console.log('sppppppppppp', split)
      if (this.zipcode.length === 5 && allNum){
        //where this.seen = !this.seen; use to be
        this.showValidZipcodeError = true;
        this.loadJSON();
      }else{
        // alert(this.zipcode.length)
        // alert('!!!');
        this.showValidZipcodeError = false;
        this.notNYorCA = false;
      }
    },

    checkZipcodeAfter(){
      var split = this.zipcode.split("")
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var allNum = true;
      for(var i=0; i<5; i++){
        if(!numbers.includes(split[i])){
          allNum = false;
          break;
        }
      }
      if (this.zipcode.length === 5 && allNum){
        // this.seen = !this.seen;
        this.showValidZipcodeError = true;
        this.selectedPlan = '';
        // this.loadJSON();
        var address = this.address + this.zipcode
        axios.get(address)
            .then(resp => {
                  // JSON responses are automatically parsed.
                  // console.log('hhhhhhhhhhhh', response.data.data)
                  if (resp.data.data){
                  this.loadJSON();
                  }else{
                    this.showErrorMsgExpNYCA = true;
                    this.showValidZipcodeError = false;
                  }
            })
            .catch(e => {
              this.errors.push(e)
            })
      }else{
        // alert('!!!');
        this.showErrorMsgExpNYCA = false
        this.showValidZipcodeError = false;
      }
    },

    loadJSON(){
      this.provider = false;
      this.address = this.address + this.zipcode //un-command-out me to link to Zhen1///////////////////////////////////////////////////////
      // const address = './src/assets/JSONforTesting/' /////////////////////////////////////////////////////////command-out me to run locally
      // this.address = address + this.zipcode + '.json' /////////////////////////////////////////////////////////command-out me to run locally
      axios.get(this.address)
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data.data
            if (response.data.data){
              this.sendNoData(false)
              this.seen = false;//////////////////////////////////
              this.showErrorMsgExpNYCA = false;
              // for (var i = 0; i < response.data.data.length; i++){
              //   // alert(response.data.data.logo)
              //   if (response.data.data.logo !== undefined){
              //     response.data.data[i].logo = "http://" + response.data.data[i].logo
              //   }
              // }
              this.onlyOneProvider = "";
              this.noRatePlan = true;
              // console.log('hhhhhhhhhhhh', response.data.data)
              if (response.data.data.length === 1){
                this.onlyOneProvider = "chosen";
                this.list(response.data.data[0]);
                this.sendUtility(response.data.data[0]);
                this.countOverallPlan(response.data.data[0]);
                this.provider = true;
              }else if (response.data.data.length === 0) {
                this.showNoData = true
                this.sendNoData(true)
              }
            }else{
              // alert('!!!')
              this.notNYorCA = true
            }
          })
          .catch(e => {
            this.errors.push(e)
            // this.showValidZipcodeError = false;
          })
      this.address =
          'https://www.api.blipenergy.com/plan/get_savings_by_zip_code/' //un-command-out me to link to Zhen////////////////////////////////////////
          // './src/assets/JSONforTesting/' /////////////////////////////////////////////////////////command-out me to run locally
    },

    list(utility) {
      // const utilityPlans = '{{post.utilities.' + utility + '.plans.plan_name}}'
      // document.getElementsByClassName('hahah').className += " " + "chosen";
      // $(utility).addClass("chosen")
      this.utilityPicked = utility
      this.planNum = this.utilityPicked.planList.length
      this.model = ''
      this.selectedPlan = ''
      this.noRatePlan = true
      this.sendPlan(this.selectedPlan)
      this.countPlan(this.selectedPlan)
      if (this.nonNYCA){
        this.doTOU()
      }
    },

    countOverallPlan(provider){
      this.overallPlan = [];
      for ( var i=0; i<provider.planList.length; i++ ){
        this.overallPlan.push(provider.planList[i].saving)
            // ((provider.planList[i].highPrice - provider.planList[i].lowPrice)*this.capacity*365).toFixed(2))
      }
      // console.log(this.overallPlan)
      this.$emit('overAllSavings', this.overallPlan)
    },

    doTOU(){
      // for (var i = 0; i < this.overallPlan.length; i++) {
      //   // if (this.overallPlan[i] === Math.max(...this.overallPlan)){
      //   //   break;
      //   // }
      // }
      for (var i = 0; i < this.utilityPicked.length; i++){
        if (this.utilityPicked[i].planType === 1){
          break;
        }
      }
      var plan = this.utilityPicked.planList[i]
      // alert('!!')
      // var plan = this.utilityPicked.planList[0]
      // console.log("I donnnnnnnnt", plan)
      this.selectedPlan = plan.planName;
      this.model = i;
      // console.log("I donnnnnnnnt", this.model)
      // this.pleaseSelect = plan.planName;

      this.$emit('iDontKnow', true)
      this.countPlan(plan);
      this.sendPlan(plan);
      this.savings = !this.savings;
      this.displaySavings();
    },

    sendNoData(nData){
      this.$emit('noData', nData)
    },

    sendUtility(utility){
      // console.log('hah', utility.utilities.utility_name)
      this.$emit('pickedUtility', utility)
    },

    planSelected(event){
      this.selectedPlan = this.utilityPicked.planList[event.target.value].planName
      this.$emit('iDontKnow', false)
      this.countPlan(this.utilityPicked.planList[event.target.value]);
      this.sendPlan(this.utilityPicked.planList[event.target.value]);
    },

    disableButton(event){
      // if (this.$refs.chosenButton){
      //   alert('hhhhhh')
      //   this.$refs.chosenButton.disabled = false
      //   this.$refs.chosenButton.ref = undefined
      // }
      if (document.getElementById("chosen") !== null){
        // console.log(document.getElementById("chosen").disabled)
        // document.getElementById("chosen").disabled = false
        // console.log(document.getElementById("chosen").disabled)
        document.getElementById("chosen").id -= "chosen"
      }
      // event.target.disabled = true
      // event.target.ref="chosenProvider"
      event.target.id = "chosen"
      // console.log(!document.getElementsByClassName("chosen"))
    },

    countPlan(plan){
      const saving = plan.saving
      this.$emit('savePerYear', saving)
      // console.log(savings, 'in Savings.vue')
    },

    sendPlan(plan){
      this.$emit('planPicked',plan)
      this.$emit('planClickd', this.planClickd)
      if (this.numOfGraphLoaded > 0) {
        this.$emit('refreshGraph')
      }
      // console.log('sendPlan', plan)
    },

    refresh(){
      this.$router.go(0)
    },

    contactUs(){
      this.$router.push({path: '/contact-us'})
    },

    oneOOOnine(){
      this.nonNYCA = true;
      this.zipcode = '10009';
      // this.checkZipcode();
      this.showValidZipcodeError = true;
      this.loadJSON();
      console.log(this.utilityPicked, this.utilityPicked.length)

      // this.doTOU();
      // this.savings = !this.savings;
      // this.displaySavings();

      //
      // for (var i = 0; i < this.utilityPicked.length; i++){
      //   if (this.utilityPicked[i].planType === 1){
      //     break;
      //   }
      // }
      // console.log(this.utilityPicked.planList[i])
      // var plan = this.utilityPicked.planList[i]
      //
      // // var plan = this.utilityPicked.planList[0]
      // this.selectedPlan = plan.planName;
      // this.model = i;
      // // this.pleaseSelect = plan.planName;
      // this.countPlan(plan);
      // this.sendPlan(plan)
      // console.log("oneOOOnine", this.selectedPlan)

    },
    // doTOU(){
    //
    // },

//End: add
  },
  components: {
    // VueDropdown
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";
</style>


