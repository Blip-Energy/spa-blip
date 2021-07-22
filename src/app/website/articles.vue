<template>
  <div>
    <banner></banner>
    <b-container>
      <!-- Start embed -->
      <div id="retainable-rss-embed"
           data-rss="https://medium.com/feed/@blipenergy"
           data-maxcols="3"
           data-layout="slider"
           data-poststyle="external"
           data-readmore="..."
           data-buttonclass="moreButton"
           data-offset="-200">&#160;</div>
      <br>

      <!--      <div id="retainable-rss-embed"-->
      <!--           data-rss="https://medium.com/feed/@xiushiwang09"-->
      <!--           data-maxcols="3"-->
      <!--           data-layout="slider"-->
      <!--           data-poststyle="modal"-->
      <!--           data-readmore="Read the rest"-->
      <!--           data-buttonclass="btn btn-outline-secondary"-->
      <!--           data-offset="-200">&#160;</div>-->

      <!-- End embed -->
    </b-container>
    <!--    <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>-->
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
        title: 'Articles Page',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'articles',
            name: 'articles',
            content: 'Everyone deserves access to energy storage, so we’re building blipOne - the world’s most accessible smart home battery. Compact, portable and affordable with a modern design.'
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
//@import "src/scss/pages/_about.scss";
//@import "src/scss/animate";


button.submit{
  background: #B0E7FF;
  border-radius: 50px;
  border: none;

  //font-family: FF Mark Pro;
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  color: #254B77;
}
button.submit:hover {
  background: #254B77;
  color: #FFFFFF;
}

.btn{
  background: #B0E7FF;
  border-radius: 50px;
  border: none;

  //font-family: FF Mark Pro;
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  color: #254B77;
}
.btn:hover {
  background: #254B77;
  color: #FFFFFF;
}
</style>


