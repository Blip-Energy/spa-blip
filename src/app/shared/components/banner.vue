<template>
  <b-navbar class="navbar">
    <b-navbar-brand class="bene-logo">
      <router-link :to="'/'" :active='$route.name =="/"'>
        <img src="../../../assets/blip_logo.png"/>
      </router-link>
    </b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="navigation" right>
        <router-link :to="'product'" :active='$route.name =="product"'>
          <div>Product</div>
        </router-link>
      </b-nav-item>
      <b-nav-item class="navigation" right>
        <router-link :to="'utilities'" :active='$route.name =="utilities"'>
          <div>Utilities</div>
        </router-link>
      </b-nav-item>
      <b-nav-item class="navigation" right>
        <router-link :to="'about'" :active='$route.name =="about"'>
          <div>About</div>
        </router-link>
      </b-nav-item>
<!--      <b-nav-item class="navigation" right>-->
<!--        <router-link :to="'articles'" :active='$route.name =="articles"'>-->
<!--          <div>Articles</div>-->
<!--        </router-link>-->
<!--      </b-nav-item>-->
      <b-nav-item class="navigation" right>
        <router-link :to="'contact-us'" :active='$route.name =="contact-us"'>
          <div>Contact Us</div>
        </router-link>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
<!--      <b-nav-item class="navigation" right>-->
<!--        <router-link :to="'my-blip'" :active='$route.name =="my-blip"'>-->
<!--          <div>My account</div>-->
<!--        </router-link>-->
<!--      </b-nav-item>-->
      <b-nav-item class="navigation button" right>
        <router-link :to="'calculator'" :active='$route.name =="calculator"'>
          <div>Savings Calculator</div>
        </router-link>
      </b-nav-item>

      <b-nav-item class="navigation" right>
        <div class="google-logout">
          <!-- <router-link :to="'keyPhrases'"> -->
          <!-- <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin> -->
        </div>
        <!-- </router-link> -->
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>


<script>
// import logo from '../../../assets/images/blip_logo.png'

export default {
  name: "banner",
  data() {
    return {};
  },
  created() {},

  methods: {
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

.navbar {
  font-family: 'Montserrat', Avenir;

  background-color: #ffffff;
  height:
      //100px;
      4em !important;
  box-shadow: 0px 2px 50px -5px rgba(0, 0, 0, 0.09);
  //box-shadow: 0px 1px 4px rgba(0,0,0,0.3);, 0px 0px 20px rgba(0,0,0,0.1) inset;
  .bene-logo {
    margin-left: 30px;
    //padding-bottom: 0.5em;
    a {
      display: flex;
      align-items: center;
    }
  }
  img {
    height: 60%;
    width: 50%;
  }
  .navigation div {
    font-family: 'Montserrat', Avenir;
    color: #254B77;
    margin-left: 10px;
    margin-right: 10px;
  }
  .router-link-active{
    color: #254B77;
    //text-decoration: underline;
    //text-underline-offset: 3px;
    padding-bottom: 3px;
    font-weight: 500;
    //div{border-bottom: 1px solid #254B77;}
  }
  ///////////////////////////////////////////////////////////////////////////////new-start
  a:hover{
    //text-decoration: underline;
    //text-underline-offset: 3px;
    text-decoration: none;
    font-weight: 500;
  }
  ///////////////////////////////////////////////////////////////////////////////new-end
  .button{
    width: 200px;
    //height: 40px;
    margin-left: 10px;
    margin-right: 0px;
    //border: 1px solid #254B77;
    //box-sizing: border-box;
    //border-radius: 25px;
    ///////////////////////////////////////////////////////////////////////////////new-start
    background: #B0E7FF;
    border-radius: 30px;
    //border: 1px solid #B0E7FF;
    ///////////////////////////////////////////////////////////////////////////////new-end
    color: #254B77;
  }
  /////////////////////////////////////////////////////////////////////////////////new-start
  .button:hover{
    border: 1px solid #254B77;
    //text-decoration:
  }
  /////////////////////////////////////////////////////////////////////////////////new-end
  .typewriter {
    font-family: 'Montserrat', Avenir;
    margin: 1em 0 0 0;
  }
  .typewriter-text {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 2s steps(60, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-family: 'Montserrat', Avenir;
    font-size: 18px;
    font-weight: 300;
    color: white;
    // border-right: 4px solid orange;
    box-sizing: border-box;
  }
  @keyframes typing {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
}
/* DEMO-SPECIFIC STYLES */
::selection {
  background: black;
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1400px) {
  img {
    position: relative;
    // margin-left: -80px !important; /* 50% of your logo width */
    display: block;
    // height: 60%;
    // width: 50%;
  }
  .typewriter-text {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 2s steps(60, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 300;
    color: white;
    // border-right: 4px solid orange;
    box-sizing: border-box;
  }
  #google-signin-btn-0 {
    input,
    button,
    submit {
      border: none !important;
    }
  }
}
</style>