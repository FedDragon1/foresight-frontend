<template>
  <HomeDecoration/>
  <div id="content">
    <div id="wrapper">
      <VueWriterModified id="title" :array="['Future is now', 'Join Foresight']" :delay="5000"/>
      <span id="subtitle">Harnessed for productivity,<br>Designed for learning.<br>Welcome to the personalized planner.</span>
    </div>
    <CodeBranch/>
    <form @submit.stop.prevent="toRegister">
      <input id="email" placeholder="Email address" maxlength="75" v-model="email">
      <input id="sign-up" type="submit" value="Sign up">
    </form>
  </div>
</template>

<script>
import CodeBranch from "@/components/CodeBranch";
import HomeDecoration from "@/components/HomeDecoration";
import VueWriterModified from "@/components/VueWriterModified";
export default {
  name: "HomeLayout",
  components: {CodeBranch, HomeDecoration, VueWriterModified},
  data() {
    return {
      email: ""
    }
  },
  methods: {
    toRegister() {
      this.$router.push(`/register?email=${this.email}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
#content
  min-width 100vw
  min-height 100vh
  animation 0.75s ease-out 0s 1 brighten

  #wrapper
    padding-top calc(var(--nav-height) + 10px)
    display flex
    flex-direction column
    position relative
    left 15%
    top 28vh

    #title
      font-size 128px
      text-shadow 5px 5px #00000077
      z-index 700

    #subtitle
      font-size 36px
      color #a0a0a0
      z-index 700

  form
    animation 1s cubic-bezier(0.42, 0, 0.12, 1.01) 0s 1 shift-left
    position absolute
    bottom calc(15vh - 70px / 2)
    left 15vw
    display flex
    width 767px
    height 76px
    justify-content space-between
    z-index 700

    #email
      font-family lato
      width 420px
      line-height 76px
      color black
      font-size 30px
      padding-left 20px
      background: #CCCCCC;
      border: 2px solid #FFFFFF;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transition border 0.2s ease-in-out

    #email:focus
      outline none
      border: 2px solid rgba(61, 42, 177, 0.75);

    #sign-up
      font-family lato
      font-weight 700
      font-size 30px
      width 292px
      color white
      background: rgba(61, 42, 177, 0.75);
      border: 2px solid #FFFFFF;
      box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transition background-color 0.2s ease-in-out

    #sign-up:hover
      background-color var(--link-pink)

</style>