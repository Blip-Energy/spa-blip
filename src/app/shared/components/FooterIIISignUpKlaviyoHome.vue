<template>
  <div class="navbar-nav" style="background: #FFFFFF;">
    <section class="DEF5FF launching"  id="sign-up">
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div class="content text-center">
<!--                <iframe src="http://eepurl.com/hBxMj5" height="650" width="600" title="Iframe Example" style="margin: auto; border: none"></iframe>-->
                <h2 class="h2 two54B77 t-center" style="margin-bottom: 80px">blip is launching soon</h2>
<!--                <form id="email_signup" class="klaviyo_styling klaviyo_standard_embed_XEbFhQ klaviyo-form-WS8Ncp" action="//manage.kmail-lists.com/subscriptions/subscribe" data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank" novalidate="novalidate">-->
                <form id="email_signup_home" class="klaviyo_styling klaviyo_standard_embed_XEbFhQ klaviyo-form-WS8Ncp" action="//manage.kmail-lists.com/subscriptions/subscribe" data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank" novalidate="novalidate">
                  <input type="hidden" name="g" value="XEbFhQ">
                  <input type="hidden" name="$fields" value="first_name,last_name,zip_code"/>
<!--                  <input type="hidden" name="$fields" value="$consent">-->
<!--                  <input type="hidden" name="$list_fields" value="$consent">-->
                  <div class="klaviyo_field_group">
                    <b-row>
                      <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="" style="height:100%; padding-left: 0; padding-right: 17px;">
                        <label for="klaviyo_form_first_name" class="p3 two54B77 t-left w-100p">First Name*</label>
                        <input id="klaviyo_form_first_name" type="text" name="first_name" value="" class="w-100p"/>
                      </b-col>

                      <b-col xs="6" sm="6" md="6" lg="6" xl="6"  class="" style="height:100%; padding-left: 17px; padding-right: 0; ">
                        <label for="klaviyo_form_last_name" class="p3 two54B77 t-left w-100p">Last Name*</label>
                        <input id="klaviyo_form_last_name" type="text" name="last_name" value="" class="w-100p"/>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="" style="height:100%; padding-left: 0; padding-right: 17px; ">
                        <label for="k_id_email" class="p3 two54B77 t-left w-100p">Email*</label>
                        <input class="w-100p" type="email" value="" name="email" id="k_id_email" placeholder="" />
                      </b-col>

                      <b-col xs="4" sm="4" md="4" lg="4" xl="4"  class="" style="height:100%; padding-left: 17px; padding-right: 0; ">
                        <label for="klaviyo_form_zip_code" class="p3 two54B77 t-left w-100p">Zip Code*</label>
                        <input id="klaviyo_form_zip_code" type="text" name="zip_code" value="" class="w-100p" />
                      </b-col>
                    </b-row>

                    <div class="klaviyo_form_actions clear mb-0 mt-80 t-center" style="padding-top: 0">
                      <button type="submit" class="klaviyo_submit_button button btn btn-B0E7FF">{{submitButtonMsg}}</button>
                    </div>

                    <div class="klaviyo_messages">
                      <div class="success_message" style="display:none;"></div>
                      <div class="error_message" style="display:none;"></div>
                    </div>

<!--                        <p class="thank_you two54B77 m-t-0" >Thank you for signing up! Check your email for a confirmation message.</p>-->

                    <p class="two54B77 t-center preOrder">
                      blipOne is available on <a href="https://www.indiegogo.com/project/preview/17de3d24" target="_blank">InDemand</a>. Pre-order now!
                    </p>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
// import GoogleLogin from "vue-google-login";

import axios from "axios";
// import KlaviyoSignupForm from '@eucalyptusvc/klaviyo-signup-form';

export default {
  name: "footerSignUpKlaviyo",
  data() {
    return {
      submitButtonMsg: "Sign Up for Updates",
    };
  },
  created() {},
  mounted() {
    // let klaviyoScript = document.createElement('script')
    // klaviyoScript.setAttribute('type', 'text/javascript')
    // klaviyoScript.setAttribute('src', '//www.klaviyo.com/media/js/public/klaviyo_subscribe.js')
    // document.head.appendChild(klaviyoScript)
  },
  watch: {
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
  width: 235px;
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
  font-weight: 400;
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
  height: 694px;
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
.klaviyo_styling{
  max-width: 100%;

  font-family: 'Montserrat', Avenir;

  label{
    margin: 0 0 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  input{
    height: 44px;
    background: #FFFFFF;
    border: 2px solid #D3D3D3;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    margin-top: 4px;
    margin-right:0px;
    margin-bottom: 25px;
    padding-left: 20px;
    padding-top: 2%;
    padding-bottom: 2%;
    color: #254B77;
  }
  input::placeholder{
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 111%;
    color: #8E8E8E;
  }
  .klaviyo_submit_button{
    padding: 0 0;
    margin-top: -30px;
  }
  .klaviyo_submit_button:hover {
    background-color: #254B77;
    color: #B0E7FF;
  }
  .success_message{
    margin: 26px auto 10px auto;
    text-align: center;

    font-size: 16px;
    font-weight: 300;
    color: #254B77;
  }
  .error_message{
    margin: 4px auto 10px auto;
    text-align: center;

    font-size: 16px;
    font-weight: 300;
    color: #FF0000;
  }
}
.takeTheSurvey{
  margin-bottom: 50px;
}

.thank_you{
  //margin-top: -40px;

  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
}

.preOrder{
  margin-top: 30px;

  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  a{
    color: #254B77;
    text-decoration: underline;
  }
  a:hover{
    color: #254B77;
    text-decoration: underline;
    font-weight: 500;
  }
}

.navbar-nav{
  justify-content: center;
  text-decoration: none;
  width: 100%;
}
</style>
