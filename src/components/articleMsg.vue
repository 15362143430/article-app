<template>
    <div id="articleMsg">
        <van-nav-bar title="文章详情" fixed left-text="<返回" @click-left="onClickLeft" />
        <p style="font-weight:700;font-size:25px;text-aligh;text-align: center">{{title}}</p>
        <div id="article" ref="articleBody"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
           id:this.$route.params.id,
           title:{}
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/');
        }
    },
    mounted () {
        console.log(this.id);
        this.axios.get('http://47.100.137.31:3003/article/watch/'+this.id).then(res=>{
            console.log(res)
            this.title = res.data[0].title;
        })
        this.axios.get('http://47.100.137.31:3003/article/get/'+this.id).then(res=>{
            console.log(res.data);
            this.$refs.articleBody.innerHTML = res.data;
        })
    }
}
</script>

<style scoped>
#articleMsg{
    box-sizing: border-box;
    margin-top: 55px;
    width: 100%;
    /* border: 1px solid black; */
}
#article{
    WORD-WRAP:break-word;TABLE-LAYOUT:fixed;word-break:break-all;

}
.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: black;
    font-weight: 700;
    font-size: 16px;
}
</style>