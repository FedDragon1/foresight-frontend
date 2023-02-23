<template>
  <NavigationBar/>
  <router-view/>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style lang="stylus">
@import "assets/css/global.styl"

:root
  --nav-height 100px
  --passing-green #32a850
  --error-red #C30015
  --btn-purple rgb(#3D2AB1)
  --btn-purple-trans rgba(#3D2AB1, 75%)
  --link-pink rgb(#eaaba7)
  --link-pink-trans rgba(#eaaba7, 75%)

*
  margin 0
  padding 0
  color whitesmoke
  font-family adamina, fangsong, Georgia, serif;
  overflow hidden

body
  min-width 100vw
  min-height 100vh
  background linear-gradient(to bottom, #141414 30%, #15162b)

#content
  #wrapper
    animation 1s cubic-bezier(0.42, 0, 0.12, 1.01) 0s 1 shift-left, 1s ease-in-out fade-in-blur

</style>
