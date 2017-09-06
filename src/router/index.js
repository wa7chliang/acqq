import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bpp',
      component: (resolve) =>require(['@/components/acIndex/Bpp'],resolve)
    },
    {
      path:'/comic',
      component: (resolve) =>require(['@/components/comic/comic1'],resolve),
      children:[
        {
          path:'/comic/dev/:num',
          component:(resolve) =>require(['@/components/comic/dev'],resolve)
        },
        {
          path:'/comic/menu/:num',
          component:(resolve) =>require(['@/components/comic/menu'],resolve)
        },
        {
          path:'/comic/tall/:num',
          component:(resolve) =>require(['@/components/comic/tall'],resolve)
        }
      ]
    },
    {
      path:'/login',
      component: (resolve) =>require(['@/components/login/login'],resolve)
    },
    {
      path:'/mymsg',
      component: (resolve) =>require(['@/components/mymsg/mymsg'],resolve)
    }
  ],
  linkActiveClass: 'active'
})


