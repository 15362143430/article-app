<template>
  <div>
    <van-cell-group style="margin-top:46px">
      <van-field
        v-model="user.email"
        required
        clearable
        label="邮箱"
        placeholder="请输入邮箱"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
      <van-button plain @click="login" type="primary" size="large">登录</van-button>
      <router-link style="color:red" to="/user/register">还没账号？赶紧去注册！</router-link>
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
import jwt_decode from 'jwt-decode'
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.user.email == "" || this.user.password == "") {
        Dialog.alert({
          message: "请输入必要的信息！！！"
        });
      } else {
        this.axios
          .post("http://47.100.137.31:3003/user/login", this.user)
          .then(res => {
            if(res.status == 200){
              Dialog.alert({
              message: "登录成功！！！"
            }).then(()=>{
              const {token}=res.data;//解构赋值，取res.data里的token属性
              localStorage.setItem('eleToken',token);
              //解析token
              const decoded = jwt_decode(token);
              localStorage.setItem('eleName',decoded.name);
              console.log(decoded);
              this.$router.push('user/usermsg/'+decoded.name)
            })
            }
            
          })
          .catch(err => {
            Dialog.alert({
              message: err.response.data
            });
          });
      }
    }
  }
};
</script>

<style scoped>
</style>