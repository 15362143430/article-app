import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import articleList from './components/articleList.vue'
import articleMsg from './components/articleMsg.vue'
import search from './components/Search.vue'
import user from './components/User.vue'
import login from './components/Login.vue'
import register from './components/Register.vue'
import usermsg from './components/userMsg.vue'


let router = new Router({
    routes: [
       { path: '/', component: articleList },
       { path: '/article/:id', component: articleMsg },
       { path: '/search', component: search },
       { path: '/user', component: user,children:[
           { path: '', component: login },
           { path: 'register', component: register },
           { path: 'usermsg/:name', component: usermsg }
       ] }
    ]
  })

  //路由守卫
// 导航钩子有3个参数：

//   1、to:即将要进入的目标路由对象；

//   2、from:当前导航即将要离开的路由对象；

//   3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。

// next()直接进to 所指路由
// next(false) 中断当前路由
// next('route') 跳转指定路由
// next('error') 跳转错误路由
router.beforeEach((to, from, next) => {
    // const isLogin = localStorage.eleToken ? true : false;
    if (to.path == "/user" || to.path == "/user/register") {
      localStorage.removeItem("eleToken");
      localStorage.removeItem("eleName");
      next();
    }else{
        next()
    }
  
  })
  

  export default router;
  