import Vue from 'vue'
import Router from 'vue-router'
// 插入模板
import Home from '@/components/home'
import MusicList from '@/components/musicList'
import NewSong from '@/components/newSong'
import ChartSong from '@/components/chartSong'
import CollectSong from '@/components/collectSong'
import ArtistSong from '@/components/artistSong'
import SearchSong from '@/components/searchSong'

Vue.use(Router)

export default new Router({
    routes: [
        {
          
          path: '/',
          name: 'home',
          component: Home ,//首页
          children:[
            {
              path:'/new',
              component:NewSong
            }, {
              path:'/chart',
              component:ChartSong
            }, {
              path:'/collect',
              component:CollectSong
            }, {
              path:'/artist',
              component:ArtistSong
            },{
              path:'/search',
              component:SearchSong
            }
          ]
        },
        {
          path:'/musicList',
          name:'MusicList',
          component:MusicList
        }
    ]
})
