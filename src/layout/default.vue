<template>
  <div class="default-page">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer height="">
        <my-footer />
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header'
import myFooter from '@/components/footer'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="stylus" scoped>
.el-header,
.el-footer
  padding 0
</style>
