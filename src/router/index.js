import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import goodsList from '@/page/goodsList'
import defaultIndex from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }, {
        path: 'index',
        name: 'index',
        component: defaultIndex
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
