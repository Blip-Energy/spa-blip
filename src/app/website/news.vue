<template>
  <div class="">
    <banner></banner>
    <bannerPreorder></bannerPreorder>
    <div class="b-FFFFFF">
      <section class="news b-F9F9F9">
        <div class="w-80p m-lr-a">
          <h2 class="h2point8 c-254B77 t-left m-l-0">In the News</h2>

          <b-row class="topline p-l-0">
            <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/nu.png" alt="">
            </b-col>
            <b-col xs="10" sm="10" md="10" lg="10" xl="10" class="rightTxt t-left i-a-c">
              <p class="p2 c-254B77 t-left" style="left: 0">
                Quick rundown of what blip does. Fall 2021.
                <br>
                <a href="./calculator" class=""><u>Invention: Blip Energy Makes Power More Affordable</u></a>
              </p>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/es.png" alt="">
            </b-col>
            <b-col xs="10" sm="10" md="10" lg="10" xl="10" class="rightTxt t-left i-a-c">
              <p class="p2 c-254B77 t-left" style="left: 0">
                “Whether you’re looking to lower your electricity usage during peak electricity hours or have a backup power supply in the case of an outage, home batteries...”
                <br>
                <a href="./calculator" class=""><u>EnergySage Home Batteries for Renters</u></a>
              </p>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/unc.png" alt="">
            </b-col>
            <b-col xs="10" sm="10" md="10" lg="10" xl="10" class="rightTxt t-left i-a-c">
              <p class="p2 c-254B77 t-left" style="left: 0">
                Profile of Chance Cobb with information about how blip works as a company. December 2021
                <br>
                <a href="./calculator" class=""><u>Finding Sustainable Energy Solutions</u></a>
              </p>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/nus.png" alt="" class="roundBorder">
            </b-col>
            <b-col xs="10" sm="10" md="10" lg="10" xl="10" class="rightTxt t-left i-a-c">
              <p class="p2 c-254B77 t-left" style="left: 0">
                Northwestern’s Garage featured blip in their 2021 gift guide.
                <br>
                <a href="./calculator" class=""><u>Garage Gift Guide 2021</u></a>
              </p>
            </b-col>
          </b-row>

          <b-row class="topline p-l-0">
            <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="leftImg t-left m-l-0 p-l-0 i-a-c">
              <img src="../../assets/webPages/news/30.png" alt="">
            </b-col>
            <b-col xs="10" sm="10" md="10" lg="10" xl="10" class="rightTxt t-left i-a-c">
              <p class="p2 c-254B77 t-left" style="left: 0">
                “At Blip, Wennstedt has set out to achieve lower-cost, accessible home battery systems that leverage repurposed Li-Ion batteries....”
                <br>
                <a href="./calculator" class=""><u>Forbes 30 Under 30 2022 Energy</u></a>
              </p>
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


