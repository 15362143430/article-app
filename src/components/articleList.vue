<template>
  <div id="articleList">
    <van-nav-bar style="background:rgb(205, 37, 37);" title="前端小能手" fixed  z-index="-10" />
    <van-tabs style="margin-top:46px;margin-bottom:50px" swipeable sticky>
      <van-tab title="首页">
        <Home></Home>
      </van-tab>
      <van-tab title="HTML">
       <HTML></HTML>
      </van-tab>
      <van-tab title="CSS">
        <CSS></CSS>
      </van-tab>
      <van-tab title="JavaScript">
       <JavaScript></JavaScript>
      </van-tab>
      <van-tab title="Vue">
       <Vue></Vue>
      </van-tab>
      <van-tab title="Nodejs">
       <Nodejs></Nodejs>
      </van-tab>
      <van-tab title="书籍推荐">
       <Books></Books>
      </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
// import { Button } from 'vant'
import Home from "../components/home";
import HTML from '../components/HTML';
import CSS from '../components/CSS';
import JavaScript from '../components/JavaScript';
import Vue from '../components/Vue';
import Nodejs from '../components/Nodejs';
import Books from '../components/书籍推荐'

export default {
  data () {
    return {
     active:0 
    }
  },
  methods: {
    user(){
      alert(666)
      this.$router.push("/user")
    }
  },
  name: "app",
  components: {
    // [Button.name]: Button
    Home,HTML,CSS,Vue,JavaScript,Nodejs,Books
  }
};
</script>

<style>
#articleList{
    box-sizing: border-box;
    width: 100%;
    /* border: 1px solid black; */
}
.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: white;
    font-weight: 500;
    font-size: 16px;
}
</style>
