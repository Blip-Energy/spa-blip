<template>
  <div class="">
    <banner></banner>
    <bannerPreorder></bannerPreorder>
    <div class="b-FFFFFF">
      <section class="news b-F9F9F9">
        <div class="w-80p m-lr-a">
          <h2 class="h2point8 c-254B77 t-left m-l-0">In the News</h2>

          <b-row class="topline p-l-0 bottomline">
            <b-col xs="12" sm="12" md="4" lg="4" xl="3" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/northwestern.png" alt="" style="width: 99px">
            </b-col>
            <b-col xs="12" sm="12" md="8" lg="8" xl="9" class="rightTxt t-left i-a-c">
              <b-row>
                <a href="https://magazine.northwestern.edu/innovation/invention-blip-energy-startup-blipone-affordable-portable-electricity/" target="_blank">
                  <p class="p2 c-4F9BC1 t-left">Blip Energy Makes Power More Affordable </p>
                  <p class="p3 c-4F9BC1 t-left" style="">Northwestern Magazine - Fall 2021</p>
                </a>
                <p class="p3 c-254B77 t-left w-100p">The blipOne device allows users to store electricity when it is cheap and discharge power when it is expensive.</p>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="12" sm="12" md="4" lg="4" xl="3" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/energysage_logo_logo-removebg-preview.png" alt="" style="width: 203px">
            </b-col>
            <b-col xs="12" sm="12" md="8" lg="8" xl="9" class="rightTxt t-left i-a-c">
              <b-row>
                <a href="https://news.energysage.com/plug-in-home-batteries/" target="_blank">
                  <p class="p2 c-4F9BC1 t-left">Home Batteries for Renters</p>
                  <p class="p3 c-4F9BC1 t-left" style="">EnergySage - Dec 2021</p>
                </a>
                <p class="p3 c-254B77 t-left w-100p">"Whether you’re looking to lower your electricity usage during peak electricity hours or have a backup power supply in the case of an outage, home batteries..."</p>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="12" sm="12" md="4" lg="4" xl="3" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/unc_kenan-flagler-removebg-preview.png" alt="" style="width: 141px">
            </b-col>
            <b-col xs="12" sm="12" md="8" lg="8" xl="9" class="rightTxt t-left i-a-c">
              <b-row>
                <a href="https://www.kenan-flagler.unc.edu/news/finding-sustainable-energy-solutions/" target="_blank">
                  <p class="p2 c-4F9BC1 t-left">Finding Sustainable Energy Solutions</p>
                  <p class="p3 c-4F9BC1 t-left" style="">UNC Kenan-Flagler - Dec 2021</p>
                </a>
                <p class="p3 c-254B77 t-left w-100p">Profile of Chance Cobb with information about how blip works as a company.</p>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="12" sm="12" md="4" lg="4" xl="3" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/garage.png" alt="" style="width: 138px">
            </b-col>
            <b-col xs="12" sm="12" md="8" lg="8" xl="9" class="rightTxt t-left i-a-c">
              <b-row style="margin-left: 0">
                <a href="https://thegarage.northwestern.edu/news/the-garage-gift-guide-2021/" target="_blank">
                  <p class="p2 c-4F9BC1 t-left">Garage Gift Guide</p>
                  <p class="p3 c-4F9BC1 t-left" style="">The Garage - Fall 2021</p>
                </a>
                <p class="p3 c-254B77 t-left w-100p">Northwestern’s Garage featured blip in their 2021 gift guide. </p>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="12" sm="12" md="4" lg="4" xl="3" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/forbes30.png" alt="" style="width: 154px">
            </b-col>
            <b-col xs="12" sm="12" md="8" lg="8" xl="9" class="rightTxt t-left i-a-c">
              <b-row>
                <a href="https://www.forbes.com/profile/sophia-wennstedt/?list=30under30-energy" target="_blank">
                  <p class="p2 c-4F9BC1 t-left">Forbes 30 Under 30 2022 Energy</p>
                  <p class="p3 c-4F9BC1 t-left" style="">Forbes - Dec 2021</p>
                </a>
                <p class="p3 c-254B77 t-left w-100p">"At Blip, Wennstedt has set out to achieve lower-cost, accessible home battery systems that leverage repurposed Li-Ion batteries..."</p>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import bannerPreorder from "./../shared/components/bannerPreorder.vue";
import Footer from "../shared/components/FooterII.vue";

export default {
  name: "news",
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
  components: {
    banner,
    bannerPreorder,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/common";
@import "src/scss/pages/_news.scss";
</style>


