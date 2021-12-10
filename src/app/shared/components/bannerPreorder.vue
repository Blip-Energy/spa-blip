<template>
  <div class="main" v-if="close === false">
    <div class="inside">
      blipOne is available on <a href="https://www.kickstarter.com/projects/blipone/blipone-the-greenest-and-most-affordable-smart-home-battery" target="_blank">Kickstarter</a>. Pre-order now!
    </div>
    <div class="closeX">
      <button @click="close = true"><img src="../../../assets/Union.png"></button>
<!--      ×-->
<!--      <div class="close" style="height: 100px; width: 100px; border: 1px solid black; position: relative;"></div>-->
<!--      <font-awesome-icon icon="times" style="font-size: 16px; margin-bottom: -1px;"/>-->
    </div>
  </div>
</template>


<script>
// import logo from '../../../assets/images/blip_logo.png'

export default {
  name: "banner",
  data() {
    return {
      close: false,
    };
  },
  created() {},

  methods: {
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

.main{
  font-family: 'Montserrat', Avenir;

  background-color: #CFFF94;
  height: 50px !important;
  //box-shadow: 0px 2px 50px -5px rgba(0, 0, 0, 0.09);
  //box-shadow: 0px 1px 4px rgba(0,0,0,0.3);, 0px 0px 20px rgba(0,0,0,0.1) inset;

  display: flex;
  align-items: center;
  text-align: center;

  .inside{
    margin-left: auto;
    margin-right: auto;
    color: #254B77;
    //background: #00b8d9;
  }
  a{
    color: #254B77;
    text-decoration: underline;
    text-underline-offset: 1px;
    //padding-bottom: 3px;
    //div{border-bottom: 1px solid #254B77;}
  }
  ///////////////////////////////////////////////////////////////////////////////new-start
  a:hover{
    text-decoration: underline;
    text-underline-offset: 1px;
    //text-decoration: none;
    font-weight: 500;
  }
  ///////////////////////////////////////////////////////////////////////////////new-end
  .closeX{
    margin-right: 53px;
    button{
      background: transparent;
      border: none;
      img{
        height: 13px;
        width: 13px;
      }
    }


    //border: 1px solid #254B77;
    //transform: rotate(90deg);
    //border: 1px solid #254B77;
    //transform: rotate(-90deg);

    //font-size: 34px;
    //content: "\2716";
    //.close{
    //  background: orange;
    //  color: red;
    //  border-radius: 12px;
    //  line-height: 20px;
    //  text-align: center;
    //  height: 20px;
    //  width: 20px;
    //  font-size: 18px;
    //  padding: 1px;
    //}
    //.close::before {
    //  content: "\2716";
    //}
    //.close {
    //  top: -10px;
    //  right: -10px;
    //  position: absolute;
    //}
  }
}

</style>