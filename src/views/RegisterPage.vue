<template>
  <div id="particles-js">
    <img src="../assets/login/star.webp" alt="star" id="star-decoration" draggable="false"/>
    <div id="content">
      <div id="wrapper">
        <div id="inner">
          <span id="form-title">Welcome</span>
          <div id="form-container">
            <RegisterForm/>
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
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "RegisterPage",
  components: {RegisterForm},
  methods: {


  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/global.styl"

@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

@keyframes shift-lower-right-spin
  0%
    transform translate(-100px, -75px) rotate(0deg)
  100%
    transform none rotate(360deg)

#star-decoration
  position absolute
  width 250px
  left calc(50% - 400px)
  top calc(45% - 400px)
  animation spin 10s infinite linear, 0.75s ease-out shift-lower-right-spin, 1s ease-in-out fade-in-blur
  transition all ease-in-out 0.5s

  &:hover
    filter hue-rotate(20deg)


#content
  position absolute
  width 515px
  height 800px
  left calc(50% - 300px)
  top calc(45% - 300px)

  #wrapper
    width 500px
    height 780px
    cardilize()
    overflow visible

    #inner
      display flex
      flex-direction column
      justify-content space-between
      padding 10px
      width calc(100% - 40px)
      height calc(100% - 80px)

      #form-title
        padding-top 20px
        font-size 36px
        display inline-block
        width 100%
        text-align center
        line-height 100px
        padding-bottom 10px

      #form-container
        justify-content center
        height 580px
</style>