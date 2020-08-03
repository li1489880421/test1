import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/login.vue'
import Password from '../views/login/password.vue'
import Layout from '../views/layout/Index.vue'
Vue.use(VueRouter)

 export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component:Layout,
    redirect:"/home",
    children:[{
      path:"/home",
      name:"Home",
      meta:{
        title:"首页",
        icon:"fa fa-home"
      },
      component:() => import( '../views/Home.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  // {
  //   path: '/baseset',
  //   name: 'Baseset',
  //   component: Layout,
  //   redirect:"/bankcust"
  // },

{
    path: '/baseset',
    name: 'Baseset',
    meta:{
      title:"基本设置",
      icon:"fa fa-home"
    },
    component: Layout,
    redirect:"/bankcustomer",
    children:[
      {path:"/bankcustomer",
       name:"Bankcustomer",
       meta:{
        title:"客户管理",
        icon:"fa fa-home"
      },
       component: () => import('@/views/baseset/BankCustomers.vue')
    },
      {path:"/depositRate",
       name:"DepositRate",
       meta:{
        title:"设置利率",
        icon:"fa fa-home"
      },
       component: () => import('@/views/baseset/DepositRate.vue')
    },
    {path:"/rateManagement",
       name:"RateManagement",
       meta:{
        title:"利率管理",
        icon:"fa fa-home"
      },
       component: () => import('@/views/baseset/RateManagement.vue')
    },
    {path:"/systemParam",
       name:"SystemParam",
       meta:{
        title:"系统参数",
        icon:"fa fa-home"
      },
       component: () => import('@/views/baseset/SystemParam.vue')
    }
    ]
  },


{
    path: 'siness',
    name: 'business',
    meta:{
      title:"业务管理",
      icon:"fa fa-home"
    },
    component: Layout,
    redirect:"/bankcustomer",
    children:[
      {path:"/currentDeposit",
       name:"CurrentDeposit",
       meta:{
        title:"办理存款",
        icon:"fa fa-home"
      },
       component: () => import('@/views/business/CurrentDeposit.vue')
    },
      {path:"/drawMoney",
       name:"DrawMoney",
       meta:{
        title:"办理取款",
        icon:"fa fa-home"
      },
       component: () => import('@/views/business/DrawMoney.vue')
    },
    ]
  },


  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/password',
    name: 'password',
    component: Password
  },
  {
    path: '/404',
    name: 'error',
    component: ()=>import("../views/404.vue")
  },
  {
    path:"*",
    redirect:"/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})
router.beforeEach((to:any,from:any,next:any)=>{
  const isLogin = localStorage.getItem("myToken")?true:false
  if(to.path=="/login"||to.path=="/password"){
    next();
  }else{
    isLogin?next():next("/login")
  }
})

export default router
