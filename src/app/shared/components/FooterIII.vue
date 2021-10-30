<template>
  <div class="navbar-nav" style="background: #FFFFFF;">
    <section class="DEF5FF launching"  id="sign-up">
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div class="content text-center">
                <div class="klaviyo-form-WS8Ncp" id="klaviyoForm" style="font-weight: 300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--start:Contact-->
    <div class="hero" style="">
<!--      <div class="container" style="height: 536px;background: #7A7979;width: 100%">-->
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 offset-lg-12 col-xl-12" >
            <div class="content text-center">
              <b-row class="onLine" style="">
                <b-col xs="4" sm="5" md="6" lg="7" xl="7" class="t-left logoOnLeft" style="padding-left: 0px;">
                  <img src="../../../assets/blip_logo.png" onclick="window.location.href='../'" class="logo"/>
                </b-col>
                <b-col xs="8" sm="7" md="6" lg="5" xl="5" class = "textOnRight" style="padding-right: 0px">
                  <b-row class="txt">
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "txtIn t-left p-l-0">
                      <p class="h5 two54B77 m-l-0 title ">Company</p>
                      <router-link class="h5 two54B77 link" :to="'../about'">About</router-link><br>
                      <router-link class="h5 two54B77 link" :to="'../contact-us'">Contact us</router-link><br>
                      <router-link class="h5 two54B77 link" :to="'../faqs'">FAQs</router-link><br>
                    </b-col>
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "txtIn t-left">
                      <p class="h5 two54B77 title ">blipOne</p>
<!--                      <router-link class="h5 two54B77 link" :to="'../blip-one'">blip One</router-link><br>-->
                      <router-link class="h5 two54B77 link" :to="'../product'">Product</router-link><br>
                      <router-link class="h5 two54B77 link" :to="'../utilities'">Utilities</router-link><br>
                    </b-col>
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "txtIn t-left">
                      <p class="h5 two54B77 title">Legal</p>
                      <router-link class="h5 two54B77 link" :to="'privacy-policy'">Privacy Policy</router-link><br>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="underLine">
                <b-col xs="5" sm="6" md="7" lg="8" xl="8" class="t-left rightsOnLeft" style="padding-left: 0px;">
                  <p class="h5 two54B77 t-left p-l-0 m-l-0"><strong>© blip, LLC. 2021</strong></p>
                </b-col>
                <b-col xs="7" sm="6" md="5" lg="4" xl="4" class = "logoOnRight">
                  <b-row style="padding: 0 0 0 0;">
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="FFFFFF">
                      <p class="h5 two54B77 t-left p-l-0 m-l-0 title">Follow us:</p>
                    </b-col>

                    <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="FFFFFF t-right logosOnRight" style="padding: 0px; margin-right:0;">
                      <a href="https://twitter.com/BlipEnergy" target="_blank"><img src="../../../assets/LogoinFooter/twitter.png" class="logos"/></a>
                      <a href="https://www.facebook.com/blipenergy/" target="_blank"><img src="../../../assets/LogoinFooter/facebook.png" class="logos mar"/></a>
                      <a href="https://www.linkedin.com/company/blip-energy" target="_blank"><img src="../../../assets/LogoinFooter/linkedin.png" class="logos mar"/></a>
                      <a href="https://www.instagram.com/blipenergy/" target="_blank"><img src="../../../assets/LogoinFooter/instagram.png" class="logos mar"/></a>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
<!--    </div>-->
    <!--end:Contact-->
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
// import GoogleLogin from "vue-google-login";

export default {
  name: "footer",
  data() {
    return {
    };
  },
  created() {},
  watch: {
  },
  mounted() {
  },
  methods: {
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

section{
  width: 100%;
  font-family: 'Montserrat', Avenir;}
//.h-536{height: 536px;}

.E5E5E5{background: #E5E5E5;}
.FFFFFF{background: #FFFFFF;}
.DEF5FF{background: #DEF5FF;}
.oneD3755{background: #1D3755;}

.two54B77{color: #254B77;}
.one83B56{color: #183B56;}
.zero000000{color: #000000;}
.c-B0E7FF{color: #B0E7FF;}
.c-FF0000{color: #FF0000;}
.c-E5E5E5{color: #E5E5E5;}
.c-FFFFFF{color: #FFFFFF}

.t-center{text-align: center;}
.t-left{text-align: left;}
.text-center{text-align: center};
.upperCase{text-transform: uppercase;}
.mt-80{margin-top: 70px;}
.p-l-0{padding-left: 0px}
.w-100p{width: 100%}

h2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 62px;
  margin: 20px;
  /* identical to box height, or 129% */
}
h4{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
}
.h5{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  letter-spacing: -0.015em;
  margin: 0;
}

p.p1{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 125%;
  /* or 40px */
}
p.p2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  margin: 20px;
}
p.p3{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 111% */
}
p.p4{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 111% */
}

//img{background: #C4C4C4;}

button.btn.btn-outline-4F9BC1{
  font-family: 'Montserrat', Avenir;
  width: 250px;
  height: 59px;
  //left: 608px;
  //top: 263px;

  border: 2px solid #4F9BC1;
  box-sizing: border-box;
  border-radius: 24px;

  text-align: center;
  background-color:transparent;
  button:hover {
    background-color: #4F9BC1;
    //color: white;
  }

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #4F9BC1;
}
button.btn.btn-outline-254B77{
  font-family: 'Montserrat', Avenir;
  width: 167px;
  height: 59px;
  //left: 608px;
  //top: 263px;
  text-align: center;

  background-color:transparent;
  border: 2px solid #254B77;
  box-sizing: border-box;
  border-radius: 50px;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #254B77;
}
button.btn.btn-outline-254B77:hover {
  background-color: #254B77;
  color: #DEF5FF;
}

button.btn.btn-B0E7FF{
  font-family: 'Montserrat', Avenir;
  width: 215px;
  height: 44px;
  //left: 608px;
  //top: 263px;

  //border: 2px solid #B0E7FF;
  //box-sizing: border-box;
  //border-radius: 24px;
  border: none;
  border-radius: 30px;

  text-align: center;
  background-color: #B0E7FF;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  color: #254B77;
}
button.btn.btn-B0E7FF:hover {
  background-color: #254B77;
  color: #B0E7FF;
}

input{
  //width: ;
  height: 44px;
  //left: 318px;
  //top: 251px;
  background: #FFFFFF;
  //box-sizing: border-box;
  //border-radius: 30px;
  //border: transparent;
  border: 2px solid #D3D3D3;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  margin-right:0px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-top: 2%;
  padding-bottom: 2%;
  color: #254B77;
}
input::placeholder{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 111%;
  color: #8E8E8E;
}
//.full{width: 100%}

.hero{
  width: 100%;
  //background: #6f42c1;
  padding: 105px 5%;
  //.container{
  //  width: 100%;
  //  height: 536px;
  //  padding-right: 0;
  //  padding-left: 0;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    text-align: center;
    //background: #869791;
    .row {
      width: 100%;
      display: -ms-flexbox;
      //display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin:0 auto;
      //align-items: center;
      text-align: center;
      //background: #F2607B;
      .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        //padding-right: 15px;
        //padding-left: 15px;
        //background: #6f42c1;
        //border: #3cb582 0.2cm;
        .picOnLeft{
          text-align: center;
          //display: flex;
          //align-items: center;
          margin-left: auto;
          margin-right: auto;
          img{
            width: 470px;
            height: 373px;
            //position: absolute;
            //left: 15%;
          }
        }

        .textOnRight{
          width: 90%;
          //height: 444px;
          //background: #F2607B;
          text-align: center;
          display: flex;
          align-items: center;
          //flex-direction: column;
          .contentCenter{
            position: absolute;
            //width: 488px;
            //height: 186px;
            //left: 98px;
            //top: 78px;
            width: 70%;
            left: 10%;
            //background: #3cb582;
          }
        }
      }
      //.offset-lg-2{
      //  height: 536px;
      //}
      .content{
        //width: 940px;

      }
    }
  //}
}

.launching{
  //height: 694px;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  form{
    text-align: left;
    .form-group{
      //background: #faad13;
      //.leftEmail{
      //  padding-left: 0;
      //  padding-right: 17px;
      //}
      //.rightZipcode{
      //  padding-left: 17px;
      //  padding-right: 0;
      //}
      .form-row{
        display: flex;
        flex-direction: row;
        padding: 0;
        //background: #6f42c1;
        margin-bottom: -18px;
        .form-control-name-left{
          //position: absolute;
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        .form-control-name-right{
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        .form-control-email{
          //position: absolute;
          width: 100%;
          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .form-control-zipcode{
        width: 100%;
      }
      .mb-0{
        width: 100%;
        text-align: center;
      }
    }

  }

}
.takeTheSurvey{
  margin-bottom: 50px;
}

#submitMsg{
  margin-top: -40px;
}
.klaviyoForm{
  input{
    border-radius: 30px;
  }
}

//.logo{
//  background: url(../../../assets/blip_logo.png);
//}

.onLine{
  //background: #faad13;
  width: 82%;
  height: 172px;
  left: 130px;
  top: 292px;

  border-bottom: 1px solid #D3D3D3;

  .logoOnLeft{
    height: 100%;
    .logo{
      height: 55px;
      width: 88px;
      //left: 129px;
      //top: 105px;
      margin-left: 0px;
      border-radius: 0px;
    }
  }
  .textOnRight{
    height: 100%;
    .txt{
      height: 100%;
      .txtIn{
        //margin-top: 0px;
        padding: 0;
        .title{
          margin-bottom: 16px;
          font-weight: 500;
        }
        .link:hover{
          font-weight: 400;
        }
        a:hover{
          text-decoration: none;
        }
      }
    }
  }
}
.underLine{
  padding-top: 43px;
  .rightsOnLeft{
  }
  .logoOnRight{
    //background: #7A7979;
    padding: 0 0 0 0;
    margin-right: 0;
    text-align: right;
    .title{font-weight: 500}
    .logosOnRight{
      text-align: right;
      margin-right: 0px;
      .logos{
        height: 20px;
        //background: #FFFFFF;
      }
      .mar{
        margin-left: 30px;
        margin-right: 0;
      }
    }
  }
}

.copyright{
  position: absolute;
  height: 22px;
  //left: 45.35%;
  //right: 45.35%;
  left: 40%;
  right: 40%;
  top: calc(50% - 22px/2 + 150px);
  margin-top:-12px;
      //20px;
  text-align: center;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: #5A7184;
}



.navbar-nav{
  justify-content: center;
  text-decoration: none;
  width: 100%;
}
</style>
