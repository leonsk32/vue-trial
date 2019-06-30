import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Play from '@/components/Play'
import RockScissorsPaper from '@/components/RockScissorsPaper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/play',
      component: Play,
      props: { rockScissorsPaper: new RockScissorsPaper() }
    }
  ]
})