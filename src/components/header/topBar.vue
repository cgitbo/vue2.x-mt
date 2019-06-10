<template>
  <el-row class="top-bar">
    <el-col :span="10">
      <my-geo />
    </el-col>
    <el-col :span="14">
      <my-nav />
    </el-col>
  </el-row>
</template>

<script>
import myGeo from './geo'
import myNav from './nav'
export default {
  components: {
    myGeo,
    myNav
  }
}
</script>

<style lang="stylus" scoped>
.top-bar
  width 1180px
  height 40px
  line-height 40px
  margin 0 auto
  color #999
</style>
