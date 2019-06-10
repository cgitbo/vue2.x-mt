<template>
  <div class="header">
    <el-row class="top-bar">
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
.top-bar
  background-color #F8F8F8
</style>
