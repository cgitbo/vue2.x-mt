<template>
  <div class="default-page">
    <el-container>
      <el-header height="40px">
        <my-header/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header'
export default {
  components: {
    myHeader
  }
}
</script>

<style lang="stylus" scoped>
.el-header
  padding 0
</style>
