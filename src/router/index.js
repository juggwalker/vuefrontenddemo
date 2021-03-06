import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout'

// 全加载
// import Index from '../components/Index'
// 懒加载
//const Index = () => import('../components/Index')

Vue.use(VueRouter)


const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('../views/error-page/404.vue')
}

const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('../views/error-page/500.vue')
};

const demo = {
    path: '/demo',
    component: () => import('../views/main/components/HeaderBar')
};

const dashboard = {
    path: '/dashboard',
    component: Layout,
    //redirect: '/dashboard',
    name: 'Dashboard',
    //hidden: true,
    children: [
      {
        path: 'index', title: '仪表盘', component: () => import('../views/dashboard/index')
      },
      {
        path: 'dashboard', title: '仪表盘', component: () => import('../views/dashboard/index')
      },
    ]
};

const routers = [
  {
    path: '/',
    component: () => import('../components/Index')
  },
  demo,
  page404,
  page500,
  dashboard
]
// 路由配置
const RouterConfig = {
  mode: 'history', // 访问路径不带井号
  routes: routers
}

export default new VueRouter(RouterConfig)
