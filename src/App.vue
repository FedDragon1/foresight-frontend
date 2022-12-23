<template>
  <HomeLayout/>
</template>

<script>
import HomeLayout from "@/components/HomeLayout";

export default {
  name: 'App',
  components: {
    HomeLayout
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Adamina&family=Lato:wght@300&display=swap&family=Lato:wght@700&display=swap');

:root
  --nav-height 100px

*
  margin 0
  padding 0
  color whitesmoke
  font-family adamina, fangsong, Georgia, serif;
  overflow hidden

body
  min-width 100vw
  min-height 100vh
</style>
