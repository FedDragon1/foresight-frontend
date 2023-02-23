<template>
  <nav>
    <div id="icon-container">
      <router-link to="/">
        <img src="../assets/foresight.svg" alt="icon" id="site-icon"/>
      </router-link>
      <span id="site-name" >Foresight</span>
    </div>
    <div id="links">
      <router-link to="/register" class="link" attr="Register">Register</router-link>
      <router-link to="/login" class="link" attr="Login">Login</router-link>
      <router-link to="/about" class="link" attr="About">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style lang="stylus" scoped>
@keyframes slide-from-top
  0%
  25%
    filter blur(20px)
    backdrop-filter none
    transform: translateY(-100%)
  100%
    transform translateY(0)
    backdrop-filter blur(15px)
    filter none

nav
  --item-height 60px
  z-index 1000
  display flex
  position absolute
  width 100vw
  left 0
  top 0
  height var(--nav-height)
  vertical-align center
  backdrop-filter blur(5px) saturate(50%)
  background-image radial-gradient(transparent, #141414);
  background-size 5px 5px
  animation 0.5s ease-out 0s 1 slide-from-top

  #icon-container
    margin-top auto
    margin-bottom auto
    padding-left 20px
    min-width 400px
    float left
    height var(--item-height)
    display flex
    vertical-align center
    justify-items center

    #site-icon
      padding-left 20px
      display inline
      width var(--item-height)

    #site-name
      padding-left 20px
      font-size 36px
      line-height var(--item-height)
      user-select none

      &:before
        position absolute
        content ""
        background transparent
        border-left whitesmoke solid 4px
        overflow hidden
        opacity 0
        color transparent
        transform translateX(-10px)
        transition all ease-in-out 0.5s
        display inline-block
        width 0
        height var(--item-height)

      &:hover:before
        transform translateX(170px)
        opacity 100
        width 100%

  #links
    display flex
    float right
    font-size 24px
    justify-content space-around
    height var(--item-height)
    margin-top auto
    margin-bottom auto
    margin-left auto
    width 400px
    padding-right 20px

    a
      line-height var(--item-height)
      text-decoration none

    a:before
      overflow hidden
      position absolute
      content attr(attr)
      display inline-block
      text-decoration underline
      text-decoration-color #eaaba7
      color #f9d7b1
      width 0
      transition all 0.2s ease-in-out

    a:hover:before
      transition all 0.2s ease-in-out
      width 100px
</style>