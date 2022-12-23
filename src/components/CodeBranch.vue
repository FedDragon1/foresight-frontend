<template>
  <div id="branch-root">
    <div id="branch_container">
      <img id="branch" src="../assets/homelayout/code_branch_curve.webp" alt="curve" draggable="false"/>
    </div>
    <div id="dots">
      <div id="colorful-dot"/>
      <div id="blue-dot"/>
      <div id="green-dot"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeBranch"
}
</script>

<style lang="stylus" scoped>
beautify-dot(color)
  position absolute
  width 30px
  height 30px
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius 15px
  background color
  overflow inherit
  transition all ease-in-out 0.2s
  &:before
    content ""
    background color
    filter: blur(10px);
    width 30px
    height 30px
    border-radius 15px
    display inline-block
  &:hover
    transform scale(1.1)
    filter brightness(1.1)

@keyframes branch_join
  0%
    width 3px
    height 0
  50%
    width 3px
  75%
    width 98%
  100%
    width 100%
    height calc(100vh - var(--nav-height) - 40px)

@keyframes display_dot_1
  0%
  50%
    opacity 0
  100%
    opacity 100

@keyframes display_dot_2
  0%
  60%
    opacity 0
  100%
    opacity 100

@keyframes display_dot_3
  0%
  70%
    opacity 0
  100%
    opacity 100

#branch-root
  position absolute
  left 7.5%
  top calc(var(--nav-height) + 40px)
  overflow visible
  user-select none
  #branch_container
    animation 1s ease-in-out 0s 1 branch_join
    height 10%
    #branch
      height calc(100vh - var(--nav-height) - 40px)

  #dots
    position: absolute;
    overflow inherit

    #colorful-dot
      bottom 15vh
      left -14px
      &::after
        content ""
        position relative
        width 15px
        height 15px
        left 7.5px
        bottom 28.5px   // 15 (dot/2) + 7.5 (after/2) + 5 (before blur) = 27.5
        border-radius 7.5px
        filter blur(5px)
        display inline-block
        background #4a52ff
      beautify-dot(conic-gradient(from 180deg at 50% 50%, #FA8792 -30deg, #70E6FB 56.25deg, #561BBE 198.75deg, #FA8792 330deg, #70E6FB 416.25deg))
      animation 2s ease-in-out 0s 1 display_dot_3

    #green-dot
      //344x906 image, 906=100vh - var(--nav-height) - 40px, 344=(100vh - var(--nav-height) - 40px) * asp
      left calc(-20px + (100vh - var(--nav-height) - 40px) * (344/906))
      bottom calc(100vh - var(--nav-height) - 55px)
      beautify-dot(conic-gradient(from 180deg at 50% 50%, #4DC024 -35.62deg, #ABBE76 37.5deg, #4DC024 324.38deg, #ABBE76 397.5deg))
      animation 2s ease-in-out 0s 1 display_dot_2

    #blue-dot
      left -14px
      bottom calc(100vh - var(--nav-height) - 55px)
      beautify-dot(conic-gradient(from 180deg at 50% 50%, #88B8FF -16.88deg, #4361FF 31.88deg, #88B8FF 343.12deg, #4361FF 391.87deg))
      animation 2s ease-in-out 0s 1 display_dot_1
</style>