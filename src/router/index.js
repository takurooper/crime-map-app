import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/App'

Vue.use(Router)

export default new Router({
  data: {
    todos: []
  },
  routes: [
    {
      path: '/',
      name: 'App',
      component: IndexPage
    }
  ]
})
