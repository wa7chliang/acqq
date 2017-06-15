import Vue from 'vue'
import Router from 'vue-router'
import Bpp from '@/components/acIndex/Bpp'
import Comic from '@/components/comic/comic1'
import dev from '@/components/comic/dev'
import menu from '@/components/comic/menu'
import tall from '@/components/comic/tall'
import login from '@/components/login/login'
import mymsg from '@/components/mymsg/mymsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bpp',
      component: Bpp
    },
    {
      path:'/comic/3',
      component: Comic,
      children:[
        {
          path:'/comic/:num/dev',
          component:dev
        },
        {
          path:'/comic/:num/menu',
          component:menu
        },
        {
          path:'/comic/:num/tall',
          component:tall
        }
      ]
    },
    {
      path:'/comic/2',
      component: Comic,
      children:[
        {
          path:'/comic/:num/dev',
          component:dev
        },
        {
          path:'/comic/:num/menu',
          component:menu
        },
        {
          path:'/comic/:num/tall',
          component:tall
        }
      ]
    },
    {
      path:'/comic/1',
      component: Comic,
      children:[
        {
          path:'/comic/:num/dev',
          component:dev
        },
        {
          path:'/comic/:num/menu',
          component:menu
        },
        {
          path:'/comic/:num/tall',
          component:tall
        }
      ]
    },
    {
      path:'/comic/0',
      component: Comic,
      children:[
        {
          path:'/comic/:num/dev',
          component:dev
        },
        {
          path:'/comic/:num/menu',
          component:menu
        },
        {
          path:'/comic/:num/tall',
          component:tall
        }
      ]
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/mymsg',
      component:mymsg
    }
  ],
  linkActiveClass: 'active'
})
