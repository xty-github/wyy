<template>
    <div class="song container">
        <div class="title">
                <h1>{{til_list.cat}}</h1>
                <el-dropdown>
                <el-button type="primary">
                    选择分类<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'华语'}}">华语</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'欧美'}}">欧美</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'日语'}}">日语</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'韩语'}}">韩语</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'粤语'}}">粤语</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'流行'}}">流行</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'摇滚'}}">摇滚</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'民谣'}}">民谣</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'电子'}}">电子</router-link></el-dropdown-item>
                    <el-dropdown-item><router-link :to="{path:'/discover/playlist',query:{cat:'舞曲'}}">舞曲</router-link></el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,key) of topic_list" :key="key">
                    <router-link :to="{path:'/playlist',query:{id:item.id}}"><img :src="item.coverImgUrl" alt=""></router-link>
                    <h4><router-link :to="{path:'/playlist',query:{id:item.id}}">{{item.name}}</router-link></h4>
                    <p><span class="iconfont icon-erji"></span><b>{{$number(item.playCount)}}</b><span class="iconfont icon-bofang"></span></p>
                </li>
            </ul>
        </div>
        <el-pagination
        :current-page="page"
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="change"
        >
        </el-pagination>
        
    </div>
</template>

<script>
import axios from "axios"
import {get_topic4} from "../../api"
    export default {
        data(){
            return {
                topic_list:[],
                til_list:{},
                page:0,
                limit:35
            }
        },
         methods: {
             handleClick() {
            alert('button click');
            },
            change(data){
                // console.log(data)
                this.page=data
                //  this.limit=this.page*this.limit;
                    get_topic4(this.limit,this.$route.query.cat,this.page).then((res)=>{
                        //截取每次获取的后面35条数据进行写入数组 再渲染页面
                        // this.topic_list=res.data.playlists.slice(this.limit-35,this.limit)
                        // this.limit=35;
                        // console.log(res.data.result)
                        this.topic_list=res.data.playlists
                        this.til_list=res.data
                    })
                
            }
        },
        watch:{
          $route(){
              window.location.reload()
          }
        },
       
        mounted(){
            // get_topic(this.limit).then((res)=>{
            //     console.log(res)
            //             this.topic_list=res.data.result
            //             // console.log(res.data.result)
            //         });
            // get_topic3().then(res=>{
            //     console.log(res)
            // });
            get_topic4(this.limit,this.$route.query.cat,this.page).then(res=>{
                console.log(res.data);
                this.topic_list=res.data.playlists
                this.til_list=res.data
                })
        }
    }
</script>

<style scoped>
    .container{position:relative;margin: 0 auto;width: 1100px;}
    .title{height: 40px;margin-top: 40px;border-bottom: 3px solid red;}
    .title h1{font-weight: normal;float: left;margin-right: 20px;}
      .el-dropdown {
    vertical-align: top;
    float:left;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
    .el-dropdown .el-button{background: white;color: blue;}
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .title{padding-bottom:10px;}
  .content{width: 980px;margin: 20px auto;}
    .content ul{width: 100%;display: flex;flex-wrap:wrap;height: 1500px;}
    .content ul li{width: 150px;height: 140px;margin-right: 20px;margin-top: 40px;position: relative;}
    .content ul li>a img{width: 100%;height: 100%;}
    .content ul li p{z-index: 10;display: flex;background: rgba(0,0,0,.5);position: absolute;left: 0;bottom: 0px;width: 100%;height: 30px;line-height: 30px;text-align: center;color: #ccc;}
    .content ul li p span:first-child{width: 16px;height: 16px;;position: absolute;left: 0;top: 0;}
    .content ul li p span:last-child{width: 16px;height: 16px;;position: absolute;right: 0;top: 0;}
    .content ul li p b{margin-left: 40px;font-weight: normal;}
    .content h4{font-weight: normal;}
    .content h4 a{color: black;}
    .content h4:hover{text-decoration: underline;cursor: pointer;}
</style>