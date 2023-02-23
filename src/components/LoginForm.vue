<template>
  <form id="form">
    <input type="email" placeholder="email" v-model="form.email"/>
    <input type="password" placeholder="password" v-model="form.password"/>
    <div id="anchors">
      <div id="remember">
        <label for="remember-checkbox">Remember me</label>
        <input type="checkbox" v-model="form.remember" id="remember-checkbox"/>
      </div>
      <router-link to="/reset_password">Forgot password?</router-link>
    </div>
    <button type="button" @click="onSubmit">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
    }
  },
  methods: {
    onSubmit() {
      this.axios.post('users/login', this.form, ).then((resp) => {
        let data = resp.data;
        if (data.success) {
          this.form = {}
        }
        console.log("login success!", data)
      }).catch(() => alert("login failed"))
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/form.styl"
formify(400px)
</style>