<template>
  <img src="../assets/login/greenblob.svg" alt="blob" id="login-blob"/>
  <div id="circle"/>
  <div id="particles-js">
    <div id="content">
      <div id="wrapper">
        <div id="inner">
          <span id="form-title">Welcome</span>
          <div id="form-container">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <component :is="'script'">
    particlesJS.load('particles-js', '/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });
  </component>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "LoginPage",
  components: {LoginForm}
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/global.styl"

@keyframes shift-upper-left
  0%
    transform translate(100px, 100px)
  100%
    transform none

@keyframes shift-lower-right
  0%
    transform translate(-100px, -75px)
  100%
    transform none

@keyframes hue-rotate
  0%
    filter hue-rotate(0)
  100%
    filter hue-rotate(360deg)

@keyframes hue-rotate-drop-shadow
  0%
    filter hue-rotate(0) drop-shadow(2px 4px 10px #00000077)
  100%
    filter hue-rotate(360deg) drop-shadow(2px 4px 10px #00000077)

#login-blob
  animation 1s ease-in-out fade-in-blur, 0.75s ease-out shift-upper-left, 30s linear 0s infinite hue-rotate-drop-shadow
  position absolute
  width 300px
  max-width 20vw
  top calc(50% + 300px - max(300px, 20vw) / 2 * (270/314))
  left calc(50% + 250px - max(300px, 20vw) / 2)
  transition transform ease-in-out 0.5s, filter ease-in-out 0.5s

  &:hover
    transform scale(1.1) rotate(5deg)
    filter hue-rotate(20deg)

#content
  position absolute
  width 515px
  height 620px
  left calc(50% - 300px)
  top calc(50% - 300px)

  #wrapper
    width 500px
    height 600px
    cardilize()
    overflow visible

    #inner
      display flex
      flex-direction column
      justify-content space-between
      padding 20px
      width calc(100% - 40px)
      height calc(100% - 100px)

      #form-title
        padding-top 20px
        font-size 36px
        display inline-block
        width 100%
        text-align center
        line-height 100px

      #form-container
        height 350px

#circle
  content ""
  position absolute
  background: linear-gradient(180deg, #A18CD1 0%, #FBC2EB 98.44%);
  border: 3px solid #FFFFFF;
  display inline-block
  height 250px
  width 250px
  border-radius 125px
  left calc(50% - 425px)
  top calc(50% - 375px)
  max-width 20vw
  animation 1s ease-in-out fade-in-blur, 0.75s ease-out shift-lower-right, 30s linear 0s infinite hue-rotate
  transition transform ease-in-out 0.5s
  box-shadow 2px 4px 10px #00000077

  &:hover
    transform scale(1.1)

</style>