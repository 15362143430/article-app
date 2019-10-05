<template>
  <div style="margin-bottom:50px">
    <van-nav-bar style="background:rgb(205, 37, 37);" title="前端小能手" fixed />
    <van-sticky><form style="margin-top:46px" action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form></van-sticky>
    <div class="article" v-for="(item,index) in allArticles" :key="index">
      <img src="../assets/blogger.png" alt />
      <ul>
        <h3>
          <router-link style="color:black" :to="'/article/'+item.id">{{item.title}}</router-link>
        </h3>
        <div>
          <van-tag type="primary">{{item.type}}</van-tag>
          <p>{{item.addtime}}</p>
        </div>
        <!-- <p
          class="neirong"
        >{{item.body}}</p>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: "",
      allArticles: []
    };
  },
  mounted() {
    this.axios.get("http://47.100.137.31:3003/article").then(res => {
      console.log(res);
      var reg1 = new RegExp("T", "g");
      var reg2 = new RegExp(".000Z", "g");
      this.allArticles = res.data;
      for (var i = 0; i < this.allArticles.length; i++) {
        this.allArticles[i].addtime = this.allArticles[i].addtime
          .replace(reg1, " ")
          .replace(reg2, "");
      }
    });
  },
  methods: {
    onSearch() {
      this.axios.get("http://47.100.137.31:3003/article").then(res => {
        //   console.log(res);
        var reg1 = new RegExp("T", "g");
        var reg2 = new RegExp(".000Z", "g");
        this.allArticles = [];
        if (this.value == "") {
          this.allArticles = res.data;
          for (var k = 0; k < this.allArticles.length; k++) {
            this.allArticles[k].addtime = this.allArticles[k].addtime
              .replace(reg1, " ")
              .replace(reg2, "");
          }
          return;
        }
        //   this.allArticles = res.data;
        var value = this.value;
        for (var i = 0; i < res.data.length; i++) {
          //   console.log(res.data[i].title)
          if (res.data[i].title.indexOf(value) > -1) {
            this.allArticles.push(res.data[i]);
            //   this.allArticles[i].addtime = this.allArticles[i].addtime.replace(reg1, " ").replace(reg2, "");
            // alert(6666)
          }
        }
        if (this.allArticles.length == 0) {
          Dialog.alert({
            message: "抱歉，查找不到有关文章！！！"
          }).then(() => {
            // on close
          });
        }
        for (var j = 0; j < this.allArticles.length; j++) {
          this.allArticles[j].addtime = this.allArticles[j].addtime
            .replace(reg1, " ")
            .replace(reg2, "");
        }
      });
    },
    onCancel() {
      this.value = "";
      this.axios.get('http://47.100.137.31:3003/article').then(res=>{
          console.log(res);
          var reg1 = new RegExp("T", "g");
          var reg2 = new RegExp(".000Z", "g");
          this.allArticles = res.data;
          for(var i =0;i<this.allArticles.length;i++){
              this.allArticles[i].addtime = this.allArticles[i].addtime.replace(reg1, " ").replace(reg2, "");
          }
      })
    }
  }
};
</script>

<style scoped>
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: white;
  font-weight: 500;
  font-size: 16px;
}
#home {
  width: 100%;
  /* border: 1px solid black; */
  box-sizing: border-box;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.article {
  display: flex;
  /* align-items:center; */
  width: 100%;
  border-bottom: 1px solid rgb(212, 203, 203);
  padding-bottom: 15px;
  margin-top: 15px;
}
.article > img {
  width: 120px;
  height: 120px;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>