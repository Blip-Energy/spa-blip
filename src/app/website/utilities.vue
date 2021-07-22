<template>
  <div>
    <banner style="margin-right: 0"></banner>
    <div class="main">
      <b-row class = "howDoes t-center">
        <b-row class="common m-tb-a">
          <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="t-right p-r-0" style="">
            <h1 class="h1 c-254B77 t-right" style="margin-right: 0px; ">How does blip help utility companies?</h1>
          </b-col>
          <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="t-left p-l-0" style="">
            <p class="p2 c-183B56 t-left">
              While your customers save money with blip, you save too.
              <br><br>
              Our goal is to make blip accessible to renters of all income. Utility companies lose millions every year powering extra peaker plants in order to meet demand. These are plants that run specifically to meet the demand during peak hours.
              <br><br>
              With enough blips shifting the time that energy is needed, utility companies won’t need to run peaker plants.
              <br><br>
              Utility companies save money. Your customers save money. It’s a win-win for everyone.
            </p>
          </b-col>
        </b-row>
      </b-row>

      <b-row class = "Homeowners t-center b-1D3755">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-left picOnLeft" >
<!--          <img class="w-100p" src="../../assets/Stock Images/night-glow-8BM107iOuys-unsplash.jpg">-->
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-left textOnRight">
          <b-row class="homeownnerInnner">
            <h2 class="h2 c-FFFFFF t-left">Homeowners with solar panels are no longer your only market.</h2>
            <p class="p2 c-FFFFFF t-left">
              Utility companies can expand their market of energy saving consumers. As utility companies move into Time of Use pricing, more people can benefit from saving energy - even if they don’t have solar panels.
            </p>
          </b-row>
        </b-col>
      </b-row>

      <b-row class = "trio t-center">
        <b-row class="common" >
          <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
            <h3 class="h3 c-254B77 t-left w-100p">Perfect for Time of Use Plans</h3>
          </b-col>
          <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
            <h3 class="h3 c-254B77 t-left">Your customers can sell back their energy</h3>
          </b-col>
          <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
            <h3 class="h3 c-254B77 t-left">Improved Experiences</h3>
          </b-col>
        </b-row>
        <b-row class="common">
          <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
<!--            <h3 class="h3 c-254B77 t-left w-100p">Perfect for Time of Use Plans</h3>-->
            <p class="p2 c-183B56 t-left w-100p m-l-0">
              Eliminate the need for peaker plants. Utility companies no longer have to lose money over running extra plants to keep up with demand.
            </p>
          </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
<!--              <h3 class="h3 c-254B77 t-left">Your customers can sell back their energy</h3>-->
              <p class="p2 c-183B56 t-left">Give your customers a choice. They can use their stored energy, saving you from having to meet demand. Or your customers can sell back that energy.</p>
            </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-center colOneThird">
<!--              <h3 class="h3 c-254B77 t-left">Improved Experiences</h3>-->
              <p class="p2 c-183B56 t-left">
                Your customers will appreciate the ability to see their energy savings in real time. With our app, they’ll have access to their savings right at their fingertips.
              </p>
            </b-col>
        </b-row>

      </b-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/Footer.vue";

export default {
  name: "articles",
  data() {
    return {
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
  components: {
    banner,
    Footer//added
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_utilities.scss";
</style>


