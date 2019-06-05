<template>
  <div class="header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar'
import searchBar from './searchBar'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color #f8f8f8
  color #999
  width 100%
  height 40px
  line-height 40px
  .el-row
    width 1180px
    margin 0 auto
</style>
