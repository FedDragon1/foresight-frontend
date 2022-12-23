<template>
  <img id="blob" src="../assets/homelayout/gradient-blob.webp" alt="blob" draggable="false"/>
  <img id="ribbon" src="../assets/homelayout/ribbon.webp" alt="ribbon" draggable="false"/>
</template>

<script>
export default {
  name: "GradientBlob"
}
</script>

<style lang="stylus" scoped>
@keyframes from_bottom_right
  0%
  25%
    transform translateX(100%) translateY(100%)
  100%
    transform translateX(0) translateY(0)

@keyframes from_top_right
  0%
  10%
    transform translateX(100%) translateY(-100%)
  80%
    transform translateX(0) translateY(0)

#blob
  animation 2s ease-in-out 0s 1 from_bottom_right
  z-index 500
  position absolute
  right 0
  bottom 0
  max-height 40vh
  max-width 30vw
  transition transform ease-in-out 0.5s

  &:hover
    transform scale(1.1)

#ribbon
  animation 2s ease-in-out 0s 1 from_top_right
  z-index 500
  position absolute
  right 0
  top 0
  max-width 45vw
  transition transform ease-in-out 0.5s

  &:hover
    transform rotate(2deg)
</style>