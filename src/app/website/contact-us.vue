<template>
  <div style="background: #FFFFFF; overflow:auto; clear:both;">
    <banner></banner>
    <b-container class="t-center m-t-0">

      <b-row class="others w-100p t-center">
        <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="left t-left m-l-0 p-l-0">
          <img src="../../assets/contact-illo-v02.png" style="width: 110%; margin-top: 18%; margin-left: -9%;">
        </b-col>

        <b-col xs="12" sm="12" md="12" lg="6" xl="6" class="t-left m-l-0 p-l-0">
          <b-row class="we t-center m-t-0">
            <!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
            <h2 class="h2 w-100p c-254B77 wed">We’d love to hear from you</h2>
            <b-row class="w-100p m-l-0 m-b-12 p-l-0">
              <p class="p3 t-left c-000000">Name*</p>
            </b-row>
            <b-row class="w-100p m-l-0 m-b-32 p-l-0">
              <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="first p-l-0">
                <b-form-input
                    class="input"
                    type="string"
                    v-model="firstName"
                    placeholder="First"
                >
                </b-form-input>
              </b-col>
              <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="last p-r-0">
                <b-form-input
                    class="input m-l-0"
                    type="string"
                    v-model="lastName"
                    placeholder="Last"
                >
                </b-form-input>
              </b-col>
            </b-row>

            <b-row class="w-100p m-l-0 m-b-12 p-l-0">
              <p class="p3 t-left c-000000">Email*</p>
            </b-row>
            <b-row class="w-100p m-l-0 m-b-32 p-l-0">
              <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
                <b-form-input
                    novalidate="true"
                    class="input"
                    v-model="email"
                    @keyup.enter="submitMessage()"
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row class="w-100p m-l-0 m-b-12 p-l-0">
              <p class="p3 t-left c-000000">Message*</p>
            </b-row>
            <b-row class="w-100p m-l-0 m-b-58 p-l-0">
              <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
                <b-form-textarea
                    class="input message"
                    type="string"
                    v-model="messages"
                    @keyup.enter="submitMessage()"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row class="w-100p m-l-0 m-b-12 p-l-0">
              <b-col xs="5" sm="5" md="5" lg="5" xl="5" class="w-100p m-l-0 p-l-0">
                <a class="m-l-0 p-l-0" :data-email="email" :href="emailContent" target="_blank">
                  <b-button
                      class = "submitButton m-l-0"
                      variant="outline-primary"
                      v-on:click="submitMessage()"
                      :disabled="!submitButton"
                  >
                    Submit
                  </b-button>
                </a>
              </b-col>
              <b-col xs="7" sm="7" md="7" lg="7" xl="7" class="errorMsg p-l-0 p-r-0">
                <p class="p3 c-FF0000 p-l-0 absolute-mid">{{errorMsg}}</p>
              </b-col>
            </b-row>


            <!--        </b-col>-->
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/noneInputFooter.vue";

export default {
  name: "contact-us",
  data() {
    return {
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

  },
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_contact_us.scss";
</style>


