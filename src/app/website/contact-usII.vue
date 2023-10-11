<template>
  <div style="background: #FFFFFF; overflow:auto; clear:both;">
    <banner></banner>
    
    <div class="w-90p t-center m-t-0 insider">

      <b-row class="others w-100p t-center i-a-c">
        <b-col xs="12" sm="12" md="12" lg="12" xl="5" class="left t-left m-l-0 p-l-0">
          <img src="../../assets/webPages/contact/contact-illo-v02.png" style="width: 100%;" v-if="ismOrpc === 'PCoperation'">
          <img src="../../assets/webPages/contact/contact-illo-v02.png" style="width: 70%; margin-left:15%; margin-top: 40px" v-if="ismOrpc === 'Moperation'">
        </b-col>

        <b-col xs="12" sm="12" md="12" lg="12" xl="7" class="right t-left m-r-0 p-l-0 p-r-0 i-a-c" style="padding: 0 0;">
          <b-row class="we t-center m-t-0 w-90p">
            <!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
            <h2 class="h2 w-100p c-254B77 t-left wed">We’d love to hear from you</h2>
            <b-row class="w-100p m-l-0 p-l-0 names">
              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="first m-l-0 m-r-0">
                <p class="p4 t-left c-1F4065" style="margin-bottom: 8px;">First Name*</p>
                <b-form-input
                    class="input"
                    type="string"
                    v-model="firstName"
                    placeholder=""
                ></b-form-input>
              </b-col>
              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="last m-l-0 m-r-0">
                <p class="p4 t-left c-1F4065" style="margin-bottom: 8px;">Last Name*</p>
                <b-form-input
                    class="input m-l-0"
                    type="string"
                    v-model="lastName"
                    placeholder=""
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row class="w-100p m-l-0 m-b-32 m-l-0 m-r-0 email">
              <p class="p4 t-left c-1F4065" style="margin-bottom: 8px;">Email*</p>
              <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0" style="padding-right: 0">
                <b-form-input
                    novalidate="true"
                    class="input"
                    v-model="email"
                    @keyup.enter="submitMessage()"
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row class="w-100p m-l-0 m-r-0 message">
              <p class="p4 t-left c-1F4065" style="margin-bottom: 8px;">Message*</p>
              <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0" style="padding-right: 0">
                <b-form-textarea
                    class="input message"
                    type="string"
                    v-model="messages"
                    @keyup.enter="submitMessage()"
                    style="height: 266px"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row class="w-100p m-b-12 buttonLine">
              <a class="m-l-0 p-l-0" :data-email="email" :href="emailContent" target="_blank">
                <b-button
                    class = "submit m-l-0"
                    variant="outline-primary"
                    v-on:click="submitMessage()"
                    :disabled="!submitButton"
                >Submit</b-button>
              </a>
            </b-row>
            <b-row class="t-center error">
              <p class="p3 c-FF0000 t-center" style="margin-left: auto; margin-right: auto">{{errorMsg}}</p>
            </b-row>

            <!--        </b-col>-->
          </b-row>
        </b-col>
      </b-row>
    </div>

<!--    <KlaviyoSignUp :formID="formID"></KlaviyoSignUp>-->
    <Footer></Footer>

  </div>
</template>

<script>
import banner from "../shared/components/bannerII.vue";
import bannerPreorder from "./../shared/components/bannerPreorder.vue";
import Footer from "../shared/components/FooterII.vue";
import KlaviyoSignUp from "./../shared/components/FooterIIISignUpKlaviyo.vue";
// import Footer from "./../shared/components/FooterIIWOSignUp.vue";

export default {
  name: "contact-us",
  data() {
    return {
      formID: 'email_signup_contact_us',
      center: {lat: 42.056432, lng: -87.674835},
      markers: [{
        position: {lat: 42.056432, lng: -87.674835}
      }],
      firstName: "",
      firstNameExists: false,
      lastName: "",
      namesExist: false,
      email: "",
      emailValid: false,
      messages: "",
      submitButton: false,
      emailBody: "",
      emailContent: "",
      errorMsg: "",
      ismOrpc: ''
    };
  },
   head() {
      return {
        title: 'Contact Us Page',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'contact',
            name: 'about',
            content: 'Contact us hello@blipenergy.com'
          }
       ]
    }
  },
  computed: {
    // submitButton: function (){
    //   if (this.firstName !== "" && this.lastName !== "" && this.email !== "" && this.validEmail(this.email) && this.messages !== ""){
    //     return true
    //   }
    //   return false
    // }
  },
  created(){
    if (this._isMobile() || this.isUnderXL()) {
      //手机端
      this.ismOrpc = 'Moperation'
      //设置rem
      window.onload = function(){
        this.getRem(750,100)
      };
      window.onresize = function(){
        this.getRem(750,100)
      };
    } else {
      //pc端
      this.ismOrpc = 'PCoperation'
    }
  },
  mounted() {
  },
  watch:{
    firstName:{
      handler (newVal, oldVal){
        if (newVal.length > 30){
          this.submitButton = false
          this.errorMsg = "Please don't use more than 30 characters in first name"
        }else if (oldVal.length > 30 && newVal.length <= 30){this.errorMsg = ""}
        if (newVal === ""){
          this.submitButton = false
          this.errorMsg = "Please don't forget your first name"
        }
        if (newVal !== "" && this.errorMsg === ("Oops, you forgot your first name" || "Please don't forget your first name")){
          this.errorMsg = ""
        }
        if (newVal !== "" && this.lastName !== "" && this.validEmail(this.email) && this.messages !== "") {
          this.errorMsg = ""
          this.submitButton = true
        }else{
          this.submitButton = false
        }
      },
    },
    lastName:{
      handler (newVal, oldVal){
        if (this.firstName === "") {
          this.submitButton = false
          this.errorMsg = "Oops, you forgot your first name"
        }else if (this.firstName === "" && this.errorMsg === ("Oops, you forgot your first name" || "Please don't forget your first name")){
          this.errorMsg = ""
        }
        if (newVal.length > 30){
          this.submitButton = false
          this.errorMsg = "Please don't use more than 30 characters in last name"
        }else if (oldVal.length > 30 && newVal.length <= 30){this.errorMsg = ""}
        if (newVal === ""){
          this.submitButton = false
          this.errorMsg = "Please don't forget your last name"
        }
        if (newVal !== "" && this.errorMsg === ("Oops, you forgot your last name" || "Please don't forget your last name")){
          this.errorMsg = ""
        }
        if (this.firstName !== "" && newVal !== "" && this.validEmail(this.email) && this.messages !== "") {
          this.errorMsg = ""
          this.submitButton = true
        }else{
          this.submitButton = false
        }
      },
    },
    email:{
      handler (newVal, oldVal) {
        if (this.lastName === "") {
          this.errorMsg = "Oops, you forgot your last name"
        }else if(this.lastName !== "" && (this.errorMsg === ("Oops, you forgot your last name" || "Please don't forget your last name"))) {
          this.errorMsg = ""
        }
        if ((this.validEmail(oldVal) && !this.validEmail(newVal))){
          this.submitButton = false
          this.errorMsg = "Please enter a valid email address"
        }
        if (this.validEmail(newVal) && this.errorMsg === "Please enter a valid email address") {
          this.errorMsg = ""
        }
        if (this.firstName !== "" && this.lastName !== "" && this.validEmail(newVal) && this.messages !== "") {
          this.errorMsg = ""
          this.submitButton = true
        }else{
          this.submitButton = false
        }
      },
    },
    messages:{
      handler (newVal, oldVal){
        // if (this.namesExist && this.email !== "" && this.validEmail(this.email)){
        //   this.submitButton = true
        //   document.getElementsByClassName("isDisabled").className = "sendEmail";
        //   // this.emailBody = "First Name: " + this.firstName + "%0aLast Name: " + this.lastName + "%0aEmail: " + this.email + "%0aMessage: %0a" + this.messages
        //   // this.emailContent = "mailto:hello@blipenergy.com?subject=Comment&body=" + this.emailBody
        // }else{
        //   this.submitButton = false
        //   alert("Please enter a valid email address")
        // }

        // if(oldVal === "" && newVal !== "") {
          // alert("im here")
          if (this.firstName !== ""){
            if (this.lastName !== ""){
              if (this.validEmail(this.email)){
                this.errorMsg = ""
                this.submitButton = true
                // document.getElementsByClassName("isDisabled").className = "sendEmail";
                  // this.emailBody = "First Name: " + this.firstName + "%0aLast Name: " + this.lastName + "%0aEmail: " + this.email + "%0aMessage: %0a" + this.messages
                  // this.emailContent = "mailto:hello@blipenergy.com?subject=Comment&body=" + this.emailBody
              }else{
                this.submitButton = false
                this.errorMsg = "Please enter a valid email address"
              }
            }else{
              this.submitButton = false
              this.errorMsg = "Oops, you forgot your last name"
            }
          }else{
            this.submitButton = false
            this.errorMsg = "Oops, you forgot your first name"
          }
        // }
      },
      // immediate: true
    },
  },

  methods: {
    adjustAlertMsg(){
      if (this.messages === ""){
        this.errorMsg = "Please tell us something"
      }
      if (!this.validEmail(this.email)){
        this.errorMsg = "Please enter a valid email address"
      }
      if (this.lastName === ""){
        this.errorMsg = "Oops, you forget your last name"
      }
      if (this.firstName === ""){
        this.errorMsg = "Oops, you forget your first name"
      }
    },
    submitMessage(){
      if (this.firstName !== ""){
        if (this.lastName !== ""){
          if (this.validEmail(this.email)){
            if (this.messages !== ""){
              // this.submitButton = true
              // document.getElementsByTagName('a').className = "sendEmail";
              this.emailBody = "First Name: " + this.firstName + "%0aLast Name: " + this.lastName + "%0aEmail: " + this.email + "%0a%0aMessage: %0a" + this.messages
              this.emailContent = "mailto:hello@blipenergy.com?subject=Hello! Blip Team&body=" + this.emailBody
            }else{
              this.errorMsg = "Please leave your message"
            }
          }else{
            this.errorMsg = "Please enter a valid email address"
          }
        }else{
          this.errorMsg = "Oops, you forgot your last name"
        }
      }else{
        this.errorMsg = "Oops, you forgot your first name"
      }
    },
    validFirst(name){
      if (name.length > 0 && name.length <= 30){
        return true
      }
      return false
    },
    validLast(name){
      if (name.length > 0 && name.length <= 30){
        return true
      }
      return false
    },
    validEmail(email) {
      var re = /^([a-z0-9A-Z]+[-_|.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    isUnderXL(){
      if (document.body.clientWidth < 1200){
        return true
      }
      return false
    },
  },
  components: {
    banner,
    bannerPreorder,
    KlaviyoSignUp,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/common";
@import "src/scss/pages/contact_usII";
</style>


