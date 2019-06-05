<template>
  <div class="nav">
    <ul>
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的商城</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list mobile-app">
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list">
        <router-link to="/">商家中心</router-link>
        <dl class="biger">
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机没法开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">美团规则</router-link>
        <dl>
          <dd>
            <router-link to="/">规则中心</router-link>
          </dd>
          <dd>
            <router-link to="/">规则目录</router-link>
          </dd>
          <dd>
            <router-link to="/">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="list second-nav">
        <router-link to="/">网站导航</router-link>
        <dl class="sub">
          <div class="item hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>榛果民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
            <dd>公寓</dd>
            <dd>豪华酒店</dd>
            <dd>客栈</dd>
            <dd>青年旅社</dd>
            <dd>度假酒店</dd>
            <dd>别墅</dd>
            <dd>农家院</dd>
          </div>
          <div class="item food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>火锅</dd>
            <dd>代金券</dd>
          </div>
          <div class="item movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>北美票房榜</dd>
            <dd>电影排行榜</dd>
          </div>
          <div class="item app">
            <dt>手机应用</dt>
            <dd>
              <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png">
            </dd>
            <dd>
              <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png">
            </dd>
            <dd>
              <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png">
            </dd>
            <dd>
              <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png">
            </dd>
            <dd>
              <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png">
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.nav
  ul
    display flex
    justify-content flex-end
    .list
      font-size 12px
      padding 0 14px
      position relative
      border-left 1px solid transparent
      border-right 1px solid transparent
      &.second-nav
        .sub
          width 1200px
          padding 30px 36px 47px
          display none
          justify-content space-around
          background-color #fff
          .item
            position relative
            display flex
            flex-wrap wrap
            margin-right 47px
            padding-top 60px
            &.hotel
              width 234px
              height 100px
            &.food
              width 156px
              height 80px
            &.movie
              width 90px
              dd
                width 90px
            &.app
              flex 1
              margin-right 0
              justify-content center
              dd
                width 60px
                height 60px
                margin 0 10px
                img
                  width 60px
                  height 60px
            dt
              font-size 14px
              color #31bbac
              position absolute
              top 0
              left 50%
              transform translateX(-55%)
            dd
              width 78px
              height 26px
              line-height 26px
      &:hover
        background-color #fff
        border-color #e5e5e5
        &.second-nav
          .sub
            display flex
        &.mobile-app
          background-color unset
          border-color transparent
        >a
          color #31bbac
        dl
          display block
      a
        color #999
      dl
        width 100%
        position absolute
        top 95%
        right -1px
        box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
        border-bottom-left-radius 4px
        border-bottom-right-radius 4px
        display none
        z-index 1024
        text-align center
        &.biger
          width 140%
          border-top-left-radius 4px
        a
          dd
            height 35px
            line-height 35px
</style>
