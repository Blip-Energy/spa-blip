<template>
  <div>
    <banner></banner>
    <div class="main">
      <!--start: Coming Soon-->
      <section class="coming b-FFFFFF i-a-c">
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="5" lg="5" xl="5" class="leftText t-left">
            <p class="p1point5 c-4F9BC1" style="margin-bottom: 12px">WE'RE ON IT</p>
            <h2 class="h2point8 c-254B77 f-weight-400 m-l-0 p-l-0" style="margin-bottom: 50px">Coming Soon!</h2>
            <p class="p3 c-183B56 m-l-0 p-l-0">
              The BlipOne dashboard is on it's way!
              <br>
              Sign up for updates to be notified of our upcoming release.
            </p>
            <button type="button" class="btn submit" onclick="window.location.href='/coming-soon#sign-up'">
              Sign Up for Updates
            </button>
          </b-col>
          <b-col  xs="12" sm="12" md="7" lg="7" xl="7" class="rightImg">
            <img src="../../assets/webPages/coming/myblip-dashboard.png" alt="" class="">
          </b-col>
        </b-row>
      </section>
      <!--end: blip and the Grid-->

<!--      <p>-->
<!--        Click <a href="#" @click.prevent="disableTracking">here</a>,-->
<!--        to disable the tracking through Google Analytics.-->
<!--      </p>-->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import banner from "./../shared/components/banner.vue";
import Footer from "./../shared/components/FooterII.vue";
// import Footer from "./Footer.vue";

export default {
  name: "coming",
  data() {
    return {
    };
  },
  head() {
    return {
      title: 'Coming Soon Page',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'coming soon',
          name: 'coming-soon',
          content: 'The most accessible smart battery and Demand Response resource that works for any customer in any home.'
        }
      ]
    }
  },
  mounted() {
    this.$ga.page('/coming-soon');
    this.print();
  },
  methods: {
    disableTracking: function() {
      this.$ga.disable();
      alert('Tracking disabled');
    },
    click: function() {
      this.$ga.event('category', 'action', 'label', 123)
    },
  },
  computed: {
  },
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/common";
@import "src/scss/pages/comingSoon";
</style>


