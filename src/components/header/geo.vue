<template>
  <div class="geo">
    <div class="position">
      <i class="el-icon-location" />
      北京
      <router-link class="change-city" :to="{name: 'changeCity'}">
      切换城市
      </router-link>
      [
      <a href="#" class="city-guess">富阳</a>
      <a href="#" class="city-guess">德清</a>
      <a href="#" class="city-guess">临安</a>
      ]
    </div>
    <div class="user">
      <router-link class="login" :to="{name: 'login'}">
        立即登录
      </router-link>
      <router-link class="register" :to="{name: 'register'}">
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.geo
  font-size 12px
  display flex
  .position
    .change-city
      color #666
      background-color #f4f4f4
      margin 0 4px
    .city-guess
      color #999
      margin 0 4px
  .user
    .login
      color #31BBAC
      margin-left 10px
    .register
      margin-left 6px
</style>
