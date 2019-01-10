import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueChatScroll from 'vue-chat-scroll'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import Login from './components/Login'
import Chat from './components/Chat'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueChatScroll)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next()
        } else {
          next({name: 'Login'})
        }
      }
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
