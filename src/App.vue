<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">查找</van-tabbar-item>
      <van-tabbar-item @click="user" icon="friends-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Button } from 'vant'
// import Home from "./components/home";
// import User from './components/user';
export default {
  data () {
    return {
     active:0 
    }
  },
  methods: {
    user(){
      const isLogin = localStorage.eleToken ? true : false;
      // alert(666)
      if(isLogin){
        this.$router.push("/user/usermsg/"+localStorage.eleName)
      }else{
        this.$router.push("/user")
      }
      
    }
  },
  name: "app",
  components: {
    // [Button.name]: Button
    // Home,User
  }
};
</script>

<style>

*{
  margin:0;
  padding:0;
}
#app {
  width: 100%;
}
</style>
