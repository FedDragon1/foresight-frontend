<template>
  <HomeDecoration/>
  <NavigationBar/>
  <div id="content">
    <div id="wrapper">
      <span id="title">Future is now</span>
      <span id="subtitle">Harnessed for productivity,<br>Designed for learning.<br>Welcome to the personalized planner.</span>
    </div>
    <CodeBranch/>
    <form action='javascript:alert("Not Implemented");'>
      <input id="email" type="email" placeholder="Email address">
      <input id="sign-up" type="submit" value="Sign up">
    </form>
  </div>
</template>

<script>
import CodeBranch from "@/components/CodeBranch";
import HomeDecoration from "@/components/HomeDecoration";
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "HomeLayout",
  components: {CodeBranch, HomeDecoration, NavigationBar}
}
</script>

<style lang="stylus" scoped>
@keyframes blur_on_load
  0%
    transform translateX(300px)
    filter blur(20px)
    opacity 0
  100%
    opacity 100%
    transform translateX(0px)
    filter blur(0px)

@keyframes brighten
  0%
    filter brightness(50%)
  100%
    filter brightness(100%)

#content
  background linear-gradient(to bottom, #242424 30%, #15162b)
  min-width 100vw
  min-height 100vh
  animation 0.75s ease-out 0s 1 brighten

  #wrapper
    animation 1s cubic-bezier(0.42, 0, 0.12, 1.01) 0s 1 blur_on_load
    padding-top calc(var(--nav-height) + 10px)
    display flex
    flex-direction column
    position relative
    left 15%
    top 28vh

    #title
      font-size 128px
      text-shadow 5px 5px #00000077a
      z-index 700

    #subtitle
      font-size 36px
      color #a0a0a0
      z-index 700

  form
    animation 1s cubic-bezier(0.42, 0, 0.12, 1.01) 0s 1 blur_on_load
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
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      background-color #eaaba7

</style>