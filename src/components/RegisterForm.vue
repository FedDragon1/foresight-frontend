<template>
  <form id="form">
    <div>
      <input type="email" v-model="form.email" placeholder="email" id="email"/>
      <Transition>
        <span v-if="formInfo.emailErrMsg" class="errmsg"><font-awesome-icon icon="fa-solid fa-circle-exclamation"/>&nbsp;{{formInfo.emailErrMsg}}</span>
      </Transition>
    </div>
    <div>
      <input type="text" v-model="form.username" placeholder="username" id="username"/>
      <span v-if="formInfo.usernameErrMsg" class="errmsg"><font-awesome-icon icon="fa-solid fa-circle-exclamation"/>&nbsp;{{formInfo.usernameErrMsg}}</span>
    </div>
    <div>
      <input type="password" v-model="form.password" placeholder="password" id="password"/>
      <span v-if="formInfo.passwordErrMsg" class="errmsg"><font-awesome-icon icon="fa-solid fa-circle-exclamation"/>&nbsp;{{formInfo.passwordErrMsg}}</span>
    </div>
    <div>
      <input type="password" v-model="formInfo.retypePassword" placeholder="repeat password" id="repeatPassword"/>
      <span v-if="formInfo.retypeErr" class="errmsg"><font-awesome-icon icon="fa-solid fa-circle-exclamation"/>&nbsp;Two passwords does not match</span>
    </div>
    <div id="verification">
      <input type="text" v-model="formInfo.verificationCode" placeholder="verification code" id="code-input"/>
      <VerificationCode id="code" :content-height=75 :content-width=100 :identify-code="identificationCode" @click="reload"/>
    </div>
    <button type="button" @click="onSubmit">Register</button>
  </form>
</template>

<script>
import VerificationCode from "@/components/VerificationCode.vue";

export default {
  name: "RegisterForm",
  components: {VerificationCode},
  data() {
    return {
      identificationCode: "1234567890abcdefghijklmnopqrstuvwxyzABDEFGHJKLMNQRTYZ".split("").sort(() => 0.5 - Math.random()).slice(0, 4),
      form: {
        email: new URLSearchParams(window.location.search).get("email") ?? "",
        username: "",
        password: ""
      },
      formInfo: {
        verificationCode: "",
        retypeErr: false,
        passwordErrMsg: "",
        retypePassword: "",
        usernameErrMsg: "",
        emailErrMsg: ""
      },
      debug: true
    }
  },
  methods: {
    reload() {
      this.identificationCode = "1234567890abcdefghijklmnopqrstuvwxyzABDEFGHJKLMNQRTYZ".split("").sort(() => 0.5 - Math.random()).slice(0, 4)
    },
    onSubmit() {
      if (this.formInfo.verificationCode !== this.identificationCode.join("")) {
        document.getElementById("code-input").style.border = "var(--error-red) 1px solid"
        return;
      } else {
        document.getElementById("code-input").style.border = "var(--passing-green) 1px solid"
      }

      let [validity, errMsg] = this.validateEmail()
      if (!validity) {
        document.getElementById("email").style.border = "var(--error-red) 1px solid"
        this.formInfo.emailErrMsg = errMsg
        return
      } else {
        document.getElementById("email").style.border = "var(--passing-green) 1px solid"
        this.formInfo.emailErrMsg = ""
      }

      [validity, errMsg] = this.validateUsername()
      if (!validity) {
        document.getElementById("username").style.border = "var(--error-red) 1px solid"
        this.formInfo.usernameErrMsg = errMsg
        return
      } else {
        document.getElementById("username").style.border = "var(--passing-green) 1px solid"
        this.formInfo.usernameErrMsg = ""
      }

      [validity, errMsg] = this.validatePassword()
      if (!validity) {
        document.getElementById("password").style.border = "var(--error-red) 1px solid"
        this.formInfo.passwordErrMsg = errMsg
        return
      } else {
        document.getElementById("password").style.border = "var(--passing-green) 1px solid"
        this.formInfo.passwordErrMsg = ""
      }

      this.formInfo.retypeErr = !(this.form.password === this.formInfo.retypePassword)
      if (this.formInfo.retypeErr) {
        document.getElementById("repeatPassword").style.border = "var(--error-red) 1px solid"
        return
      } else {
        document.getElementById("repeatPassword").style.border = "var(--passing-green) 1px solid"
      }

      this.axios.post("http://localhost:3312/users/register", this.form).then((resp) => {
        let data = resp.data;
        console.log(resp)
        if (data.success) {
          this.form = {}
          this.formInfo = {}
          this.identificationCode = []
          alert("pass")
        } else {
          this.formInfo.emailErrMsg = data.message
          document.getElementById("email").style.border = "var(--error-red) 1px solid"
        }

      }).catch((err) => console.log(err))

      this.$router.push(`/register-otp`)
    },
    validateEmail() {
      if (!this.form.email.includes("@"))
        return [false, 'Email must include "@" symbol']
      if (!this.form.email.match(/\S+@/))
        return [false, 'Missing email name before "@"']
      if (!this.form.email.match(/@\S+/))
        return [false, 'Missing domain after "@"']
      if (this.form.email.endsWith("."))
        return [false, 'Emails cannot end with "."']
      if (/\p{Extended_Pictographic}/u.test(this.form.email))
        return [false, "Emails cannot contain emojis"]
      return [true, ""]
    },
    validateUsername() {
      if (!this.form.username.trim())
        return [false, "Username cannot be empty"]
      if (Array.from(this.form.username).length > 20)
        return [false, "Username too long (max 20 characters)"]
      return [true, ""]
    },
    validatePassword() {
      if (!/[A-Z]/.test(this.form.password))
        return [false, "Password must contain at least 1 uppercase letter"]
      if (!/[a-z]/.test(this.form.password))
        return [false, "Password must contain at least 1 lowercase letter"]
      if (!/[0-9]/.test(this.form.password))
        return [false, "Password must contain at least 1 number"]
      if (!/[^A-Za-z0-9]/.test(this.form.password))
        return [false, "Password must contain at least 1 special character"]
      if (Array.from(this.form.password).length < 8)
        return [false, "Password too short (minimum 8 characters)"]
      if (Array.from(this.form.password) > 75)
        return [false, "Password too long (max 75 characters)"]
      return [true, ""]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/form.styl"
formify(400px, true)
</style>