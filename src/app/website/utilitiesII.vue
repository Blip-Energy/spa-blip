<template>
  <div>
    <banner></banner>
    <bannerPreorder></bannerPreorder>
    <div class="main">
      <!--start: blip and the Grid-->
      <section class="blip b-FFFFFF i-a-c">
        <b-row class="w-85p insider">
          <b-col  xs="12" sm="12" md="12" lg="5" xl="5" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">A NEW KIND OF PARTNER</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">blip and the Grid</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              At blip energy, we're on a mission to make energy storage accessible to everyone. At scale, this distributed resource will reduce the need for expensive (and dirty) peaker plant generation and accelerate the transition to renewable energy by flattening demand.
              <br><br>
              Leveraging blip units at scale, utilities and other grid stakeholders can reach a new endpoint for load balancing. Blip eliminates barriers to distributed energy storage adoption by creating the most accessible smart home, battery - one that doesn’t require professional installation or infrastructure upgrades.
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="7" xl="7" class="rightImg">
            <img src="../../assets/webPages/utilities/blip-article-texas.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: blip and the Grid-->

      <!--start: Distributed energy storage for your hard-to-reach customers-->
      <section class="distributed b-FFFFFF i-a-c" v-if="ismOrpc === 'PCoperation'">
        <b-row class="insider w-85p">
          <b-col  xs="12" sm="12" md="12" lg="7" xl="7" class="leftImg p-l-0">
            <img src="../../assets/webPages/utilities/cool-graphic-for-blip-house-longer.png" alt="" class="">
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="5" xl="5" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">MARKET</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Distributed energy storage for your hard-to-reach customers</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              Utility companies can expand their market of energy saving consumers. As utility companies move into Time of Use pricing, more people can benefit from saving energy - even if they don’t have solar panels
            </p>
          </b-col>
        </b-row>
      </section>
      <section class="distributed b-FFFFFF i-a-c" v-if="ismOrpc === 'Moperation'">
        <b-row class="insider w-85p">
          <b-col  xs="12" sm="12" md="12" lg="5" xl="5" class="rightText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">MARKET</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Distributed energy storage for your hard-to-reach customers</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              Utility companies can expand their market of energy saving consumers. As utility companies move into Time of Use pricing, more people can benefit from saving energy - even if they don’t have solar panels
            </p>
          </b-col>
          <b-col  xs="12" sm="12" md="12" lg="7" xl="7" class="leftImg p-l-0">
            <img src="../../assets/webPages/utilities/cool-graphic-for-blip-house-longer.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: Distributed energy storage for your hard-to-reach customers-->

      <!--start: Utilities and customers save money - it’s a rare win-win-->
      <section class="utilities b-FFFFFF i-a-c">
        <b-row class="w-85p insider">
          <b-col  xs="12" sm="12" md="10" lg="8" xl="6" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">HOW BLIP CAN HELP</p>
            <h2 class="h2point8 c-254B77 f-weight-400 t-left m-l-0 p-l-0 w-100p" style="margin-bottom: 50px">Utilities and customers save money - it’s a rare win-win</h2>
          </b-col>
          <b-col  xs="0" sm="0" md="2" lg="4" xl="6" class="rightBlc t-left">
          </b-col>
          <b-row class="whole w-100p">
            <b-col xs="12" sm="12" md="12" lg="4" xl="4" class="t-center oneThird">
              <img src="../../assets/webPages/utilities/Vector1.png" style="width: 44px; margin-left: -22px">
              <p class="p1point5 c-4F9BC1 t-center" style="">Perfect for Time of Use plans</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                Reduce the need for peaker plants - by shifting demand, blip reduces volatile demand spikes and reduces total operating cost              </p>
            </b-col>
            <b-col xs="12" sm="12" md="12" lg="4" xl="4" class="t-center oneThird">
              <img src="../../assets/webPages/utilities/Vector3.png" style="width: 86px; margin-left: -43px">
              <p class="p1point5 c-4F9BC1 t-center" style="">Bill savings for end customers</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                By using cheaply stored power during peak or surge windows, customers save money on their electric bill and reduce the summer bill shock when the AC kicks on
              </p>
            </b-col>
            <b-col xs="12" sm="12" md="12" lg="4" xl="4" class="t-center oneThird">
              <img src="../../assets/webPages/utilities/Frame.png" style="width: 72px; margin-left: -36px">
              <p class="p1point5 c-4F9BC1 t-center" style="">Resilience</p>
              <p class="p3 c-183B56 m-l-0 p-l-0">
                blip provides peace of mind for utility customers by providing 2.2KWh of backup power - households are more resilient to power outages and can continue to run critical devices
              </p>
            </b-col>
          </b-row>
        </b-row>
      </section>
      <!--end: Utilities and customers save money - it’s a rare win-win-->

<!--      <p>-->
<!--        Click <a href="#" @click.prevent="disableTracking">here</a>,-->
<!--        to disable the tracking through Google Analytics.-->
<!--      </p>-->
<!--      <KlaviyoSignUp :formID="formID"></KlaviyoSignUp>-->
      <!--      <KlaviyoSignUp></KlaviyoSignUp>-->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import banner from "./../shared/components/banner.vue";
import bannerPreorder from "./../shared/components/bannerPreorder.vue";
import KlaviyoSignUp from "./../shared/components/FooterIIISignUpKlaviyo.vue";
// import Footer from "./../shared/components/FooterIIWOSignUp.vue";
import Footer from "./../shared/components/FooterII.vue";
// import Footer from "./Footer.vue";

export default {
  name: "utilities",
  data() {
    return {
      formID: 'email_signup_utilites',
      ismOrpc: ''
    };
  },
  head() {
    return {
      title: 'Utilities Page',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'utilities',
          name: 'utilities',
          content: 'The most accessible smart battery and Demand Response resource that works for any customer in any home.'
        }
      ]
    }
  },
  mounted() {
    this.$ga.page('/utilities');
    this.print();
  },
  created(){
    if (this._isMobile()) {
      //手机端
      this.ismOrpc = 'Moperation'
      //设置rem
      window.onload = function(){
        this.getRem(750,100)
      };
      window.onresize = function(){
        this.getRem(750,100)
      };
    } else {
      //pc端
      this.ismOrpc = 'PCoperation'
    }
  },
  methods: {
    disableTracking: function() {
      this.$ga.disable();
      alert('Tracking disabled');
    },
    click: function() {
      this.$ga.event('category', 'action', 'label', 123)
    },
    getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  computed: {
  },
  components: {
    banner,
    bannerPreorder,
    KlaviyoSignUp,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/common";
@import "src/scss/pages/utilitiesII";
</style>


