import Vue from 'vue'
import Router from 'vue-router'
// 插入模板
import Home from '@/components/home'
import MusicList from '@/components/musicList'

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/',
      name: 'home',
      component: Home//首页
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/musicList',
      name: 'MusicList',
      component: MusicList
    }
  ]
})
