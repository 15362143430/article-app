<template>
    <div>
        <div class="article" v-for="(item,index) in cssArticles" :key="index">
      <img src="../assets/blogger.png" alt />
      <ul>
        <h3>
          <router-link style="color:black" :to="'/article/'+item.id">{{item.title}}</router-link>
        </h3>
        <div><van-tag type="primary">{{item.type}}</van-tag><p>{{item.addtime}}</p></div>
        <!-- <p
          class="neirong"
        >{{item.body}}</p> -->
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
           cssArticles:[] 
        }
    },
    methods: {
        
    },
    mounted () {
        this.axios.get('http://47.100.137.31:3003/article/css').then(res=>{
          console.log(res);
          var reg1 = new RegExp("T", "g");
          var reg2 = new RegExp(".000Z", "g");
          this.cssArticles = res.data;
          for(var i =0;i<this.cssArticles.length;i++){
              this.cssArticles[i].addtime = this.cssArticles[i].addtime.replace(reg1, " ").replace(reg2, "");
          }
      })
    }
}
</script>

<style scoped>
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
.article>img{
    width: 120px;
    height: 120px;
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/* .neirong {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
} */
</style>