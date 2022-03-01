<template>
  <div class="menu-item" @click="isOpen = !isOpen" >
<!--    <a href ='#'>-->
      <font-awesome-icon icon="bars" style="font-size: 18px; color: #254B77; cursor: pointer"/>
<!--    </a>-->
<!--    <svg viewBox="0 0 1030 638" width="10">-->
<!--      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>-->
<!--    </svg>-->
    <transition name="fade" apear>
      <div class="sub-menu" v-if="isOpen">
        <b-nav vertical class="w-30p t-left">
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
          <!--        <b-nav-item class="navigation" right>Another Link</b-nav-item>-->
          <b-nav-item class="navigation" right>
            <router-link :to="'about'" :active='$route.name =="about"'>
              <div>About</div>
            </router-link>
          </b-nav-item>
          <b-nav-item class="navigation" right>
            <router-link :to="'news'" :active='$route.name =="news"'>
              <div>News</div>
            </router-link>
          </b-nav-item>
          <b-nav-item class="navigation" right>
            <router-link :to="'contact-us'" :active='$route.name =="contact-us"'>
              <div>Contact Us</div>
            </router-link>
          </b-nav-item>
          <b-nav-item class="navigation" right>
            <router-link :to="'calculator'" :active='$route.name =="calculator"'>
              <div>Savings Calculator</div>
            </router-link>
          </b-nav-item>
        </b-nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "bannerDropdown",
  // props: ['title'],
  data () {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

.navbar {
  font-family: 'Montserrat', Avenir;

  background-color: #ffffff;
  height:
      //100px;
      14em !important;
  //box-shadow: 0px 2px 50px -5px rgba(0, 0, 0, 0.09);
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
    //height: 60%;
    width:
        80px;
    //50%;
    margin-top: 3px;
    //display: flex;
    //align-items: center;

  }
  .navigation div {
    font-family: 'Montserrat', Avenir;
    color: #254B77;
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
  }
  .router-link-active{
    color: #254B77;
    //text-decoration: underline;
    //text-underline-offset: 3px;
    padding-bottom: 3px;
    font-weight: 700;
    //div{border-bottom: 1px solid #254B77;}
  }
  ///////////////////////////////////////////////////////////////////////////////new-start
  a:hover{
    //text-decoration: underline;
    //text-underline-offset: 3px;
    text-decoration: none;
    font-weight: 700;
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
  //.button:hover{
  //  border: 1px solid #254B77;
  //  //text-decoration:
  //}
  .button:hover{
    background: #FFFFFF;
    border: 1px solid #254B77;
    //text-decoration:
  }
  .router-link-active.button{
    background: #FFFFFF;
    border: 1px solid #254B77;
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

nav .menu-item svg {
  //width: 10px;
  margin-left: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 57px;
}
nav .menu-item .sub-menu {
  position: absolute;
  z-index:9999;
  background-color: #FFFFFF;
  top: calc(100%);
  right: 0;
  //transform: translateX(-50%);
  width: max-content;
  border-radius: 0;
  padding: 18px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sub-menu {
  cursor: pointer;
}
</style>
