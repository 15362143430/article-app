<template>
  <div style="margin-top:46px;text-align: center">
    <p style="font-weight:700;font-size:30px;">欢迎您</p>
    <p style="font-weight:700;font-size:50px;color:hotpink">{{username}}</p>
    <br />
    <br />
    <van-button plain @click="zhuxiao" type="primary" size="large">注销</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      username: this.$route.params.name
    };
  },
  methods: {
    zhuxiao() {
      Dialog.confirm({
        title: "注销",
        message: "确定注销吗？？？"
      })
        .then(() => {
          this.$router.push("/user")
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scoped>
</style>