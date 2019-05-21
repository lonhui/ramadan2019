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
      component: () => import("@/views/Home/index"),
      meta: {title: "Ramadan"}
    },
    {
      path: '/list',
      name: "List",
      component: () => import("@/views/Topic/list"),
      meta: {title: "QUIZ"}
    },
    {
      path: '/rule',
      name: "Rule",
      component: () => import("@/views/Rule/index"),
      meta: {title: "Syarat dan Ketentuan"}
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
    },
    {
      path: '/turntable',
      name: "Turntable",
      component: () => import("@/views/Turntable/index"),
      meta: {title: "THR Caping"}
    }
  ]
})
