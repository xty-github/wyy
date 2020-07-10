<template>
    <div>
        <div class="title">
            <span></span>
            <h4>热门推荐</h4>
            <ul>
                <li v-for="(item,key) of list" :key="key"><router-link :to="{path:'/discover/playlist',query:{cat:item.cat}}">{{item.name}}</router-link><span>|</span></li>
                <li><router-link to="/discover/playlist">更多</router-link></li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,key) of topic_list" :key="key">
                    <router-link :to="{path:'/playlist',query:{id:item.id}}"><img :src="item.picUrl" alt=""></router-link>
                    <h4><router-link :to="{path:'/playlist',query:{id:item.id}}">{{item.name}}</router-link></h4>
                    <p><span class="iconfont icon-erji"></span><b>{{$number(item.playCount)}}</b><span class="iconfont icon-bofang"></span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data(){
            return {
                list:[
                    {
                        cat:'华语',
                        name:"华语"
                    },
                    {
                        cat:'流行',
                        name:"流行"
                    },
                    {
                        cat:'摇滚',
                        name:"摇滚"
                    },
                    {
                        cat:'民谣',
                        name:"民谣"
                    },
                    {
                        cat:'电子',
                        name:"电子"
                    },
                ],
                topic_list:[]
            }  
        },
        mounted(){
            axios({
                url:"http://182.92.156.134:3000/personalized",
                params:{limit:8}
            }).then((res)=>{
                console.log(res)
                this.topic_list=res.data.result
            })
        }

    }
</script>

<style scoped>
.title>span{width: 8px;height: 8px;display: block;border-radius: 50%;background: #fff;border: 5px solid rgb(151, 3, 3);margin: 10px;}
.title{display: flex;border-bottom: 5px solid red;}
.title ul{margin-left: 20px;}
.title li{float: left;}
.title li:last-child{margin-left: 100px;}
.title li a{color: #666;font-size: 12px;padding: 20px;text-align: center;line-height: 40px;}
.title h4{line-height: 40px;font-size: 20px;font-weight: normal;}
.title li a:hover{text-decoration:underline}
.content{width: 731px;}
.content ul{width: 100%;display: flex;flex-wrap:wrap;}
.content ul li{width: 140px;height: 140px;margin-right: 20px;margin-top: 40px;position: relative;}
.content ul li>a img{width: 100%;height: 100%;}
.content ul li p{z-index: 10;display: flex;background: rgba(0,0,0,.5);position: absolute;left: 0;bottom: 0px;width: 100%;height: 30px;line-height: 30px;text-align: center;color: #ccc;}
.content ul li p span:first-child{width: 16px;height: 16px;;position: absolute;left: 0;top: 0;}
.content ul li p span:last-child{width: 16px;height: 16px;;position: absolute;right: 0;top: 0;}
.content ul li p b{margin-left: 40px;font-weight: normal;}
.content h4{font-weight: normal;}
.content h4 a{color: black;}
.content h4:hover{text-decoration: underline;cursor: pointer;}
</style>
