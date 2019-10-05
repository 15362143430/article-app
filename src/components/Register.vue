<template>
  <div>
    <van-cell-group style="margin-top:46px">
      <van-field
        v-model="user.name"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field
        v-model="user.email"
        required
        clearable
        label="邮箱"
        placeholder="请输入邮箱"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="user.password"
        clearable
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-radio-group v-model="radio">
        <van-radio name="1">游客</van-radio>
      </van-radio-group>
      <van-button @click="register" plain type="primary" size="large">注册</van-button>
      <router-link style="color:red" to="/user">拥有账号？赶紧去登录！</router-link>
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      //   username: "",
      //   password: "",
      user: {
        identity: "employee",
        freeze:1
      },
      radio: "1"
    };
  },
  methods: {
    register() {
      if (
        this.user.name == "" ||
        this.user.email == "" ||
        this.user.password == "" ||
        !this.user.name ||
        !this.user.email ||
        !this.user.password
      ) {
        Dialog.alert({
          message: "请输入必要的信息！！！"
        });
      } else {
        this.axios
          .post("http://47.100.137.31:3003/user/register", this.user)
          .then(res => {
            console.log(res);
            Dialog.alert({
              message: res.data
            }).then(() => {
              this.$router.push("/user")
            });
          })
          .catch(err => {
            console.log(err.response);
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