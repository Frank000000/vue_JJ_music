import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend'
import My from '../components/My'
import Rank from '../components/Rank'
import Singer from '../components/Singer'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/my',
            component:My
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/singer',
            component:Singer
        },
        {
            path:'/',
            redirect:'/recommend'
        }
    ]
})

export default router