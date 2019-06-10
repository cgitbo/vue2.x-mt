<template>
  <div class="search-bar">
    <el-row class="search-wrap">
      <el-col :span="3"
        class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
      </el-col>
      <el-col :span="15"
        class="right">
        <div class="inp-wrap">
          <el-input v-model="searchWord"
            placeholder="请输入内容"
            class="inp"
            @focus="onInputFocus"
            @blur="onInputBlur"></el-input>
          <el-button type="primary"
            icon="el-icon-search"></el-button>

          <div class="hot-wrap"
            v-show="isHotPlace">
            <div class="search-history"
              v-show="isSearchHistory">
              <div class="history-wrap">
                <div class="hot">最近搜索</div>
                <div class="del-hot">删除搜索历史</div>
              </div>
              <div class="word-wrap">
                <router-link :to="{name: 'goods', params: { name: item}}"
                  class="word"
                  v-for="(item, index) in hotPlaceList"
                  :key="index">
                  {{item}}
                </router-link>
              </div>
            </div>
            <div class="hot-word">
              <div class="hot">热门搜索</div>
              <div class="word-wrap">
                <router-link to="/s"
                  class="word"
                  v-for="(item, index) in hotPlaceList"
                  :key="index">
                  {{item}}
                </router-link>
              </div>
            </div>
          </div>

          <div class="hot-wrap"
            v-show="isSearchList">
            <div class="search-list">
              <router-link :to="{name: 'goods', params: { name: item}}"
                class="item"
                v-for="(item, index) in searchList"
                :key="index">
                {{item}}
              </router-link>
            </div>
          </div>
        </div>

        <div class="suggest">
          <router-link v-for="(item,index) in suggestList"
            :key="index"
            :to="{name: 'goods', params: { name: item}}">
            {{item}}
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchWord: '',
      isInputFocus: false,
      hotPlaceList: ['多乐岛蹦床公园', '杭州乐园', '宝寿山景区', '杭州失恋博物馆'],
      searchList: ['火锅', '火锅自助餐', '火锅好吃'],
      suggestList: ['多乐岛蹦床公园', '杭州乐园', '宝寿山景区', '杭州失恋博物馆', '杭州开元森泊度假乐园', '小美KTV']
    }
  },
  methods: {
    onInputFocus () {
      this.isInputFocus = true
    },
    onInputBlur () {
      setTimeout(() => {
        this.isInputFocus = false
      }, 200)
    }
  },
  computed: {
    isHotPlace () {
      return this.isInputFocus && !this.searchWord
    },
    isSearchHistory () {
      return this.isInputFocus
    },
    isSearchList () {
      return this.isInputFocus && this.searchWord
    }
  }
}
</script>

<style lang="stylus">
.search-bar
  .inp-wrap
    .inp
      width 462px
      .el-input__inner
        border-radius 4px
        border-width 0px
    .el-button
      border-radius unset
      border-color #13D1BE
      background-color #13d1be
      width 88px
</style>

<style lang="stylus" scoped>
.search-bar
  background-color #fff
  box-shadow 0 2px 27px 0 rgba(0, 0, 0, 0.1)
  .search-wrap
    width 1190px
    margin 0 auto
    .left
      min-width 280px
      padding 28px 60px 40px 0
      box-sizing border-box
      img
        width 126px
        height 46px
    .right
      padding-top 28px
      .inp-wrap
        display flex
        width 550px
        border 1px solid #13d18e
        border-radius 4px
        position relative
        .hot-wrap
          position absolute
          top 42px
          width 462px
          border 1px solid #e5e5e5
          border-top none
          background #fff
          z-index 999
          box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
          border-bottom-left-radius 4px
          border-bottom-right-radius 4px
          color #999
          font-size 12px
          box-sizing border-box
          padding 10px
          overflow hidden
          .search-history
            margin-bottom 10px
            .history-wrap
              display flex
              justify-content space-between
              align-items center
          .search-list
            margin-top -5px
            .item
              display block
              color #333
              &:not(:last-child)
                margin-bottom 10px
          .hot
            font-weight 700
          .word-wrap
            display flex
            padding-top 5px
            .word
              margin-right 10px
              color #999
              &:hover
                color #13d18e
      .suggest
        width 462px
        height 25px
        line-height 25px
        padding-top 8px
        font-size 12px
        overflow hidden
        padding-left 12px
        a
          color #999
          margin-right 10px
          margin-bottom 3px
          &:hover
            color #13d18e
</style>
