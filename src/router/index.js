import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home/index")
    },
    {
      path: '/list',
      name: "List",
      component: () => import("@/views/Topic/list")
    },
    {
      path: '/rule',
      name: "Rule",
      component: () => import("@/views/Rule/index")
    },
    {
      path: '/answer',
      name: "Answer",
      component: () => import("@/views/Topic/answer")
    },
    {
      path: '/problem',
      name: "Problem",
      component: () => import("@/views/Topic/problem")
    }
  ]
})
