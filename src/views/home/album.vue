<template>
    <div>   
        <div class="new container">
            <h1>热门新碟</h1>
            <ul>
                <li v-for="(item,key) of hot_list" :key="key">
                    <div>
                        <router-link :to="{path:'/album',query:{id:item.id}}"><img :src="item.blurPicUrl" alt=""></router-link>
                    </div>
                    <router-link :to="{path:'/album',query:{id:item.id}}"><h4>{{item.name}}</h4></router-link>
                    <router-link :to="{path:'/album',query:{id:item.id}}"><span>{{item.artist.name}}</span></router-link>
                </li>
            </ul>
        </div>
        <div class="all container">
            
            <ul class="title">
                <li><h2>全部新碟</h2></li>
                <li v-for="(item,key) of area_list" :key="key">
                    <router-link :to="{path:'/discover/album',query:{area:item}}">{{item}}</router-link>
                </li>
            </ul>
            <ul class="content">
                <li v-for="(item,key) of all_list" :key="key">
                    <div>
                        <img :src="item.cover" alt="">
                    </div>
                    <h4>{{item.name}}</h4>
                    <span>{{item.artistName}}</span>
                </li>
            </ul>
            <el-pagination
            :current-page="page"
            background
            layout="prev, pager, next"
            :total="1000"
            @current-change="change"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {new_topic,hot_album,all_mv} from "../../api"
    export default {
        data(){
            return {
                limit:20,
                page:0,
                hot_list:[],
                all_list:[],
                area_list:["全部","华语","欧美","日本","韩国"]
            }
        },
        watch:{
            $route(){
                window.location.reload();
            }
        },
        methods:{
            change(data){
                this.page=data;
                all_mv(this.$route.query.area,this.limit,this.page).then(res=>{
                console.log(res)
                this.all_list=res.data.data
            })
            }
        },
        mounted(){
            hot_album("华语").then(res=>{
                console.log(res)
                this.hot_list=res.data.albums.slice(0,10)
            })
            all_mv(this.$route.query.area,this.limit,this.page).then(res=>{
                console.log(res)
                this.all_list=res.data.data
            })

        }
    }
</script>

<style scoped>
    .container{position:relative;margin: 0 auto;width: 1100px;}
    .new h1{font-size: 24px;font-weight: normal;border-bottom: 1px solid red;margin: 20px;padding-bottom: 20px;}
    .new ul{width: 100%;}
    .new ul:after{content: "";clear: both;display: block;}
    .new ul li{float: left;overflow: hidden;margin: 10px;width: 173px;height: 162px;}
    .new ul li div{width: 173px;background: url('../../assets/1.jpg') no-repeat center right;}
    .new ul li img{width: 153px;height: 130px;}
    .new ul li a{color: #666;}
    .all{}
    .all h2{font-size: 24px;font-weight: normal;margin-right: 30px;}
    .all .title{border-bottom: 1px solid red;padding: 20px 0;}
    .all .title:after{content: "";display: block;clear: both;}
    .all .title li{float: left;height: 30px;line-height: 30px;margin: 0 20px;}
    .all .content{width: 100%;}
    .all .content:after{content: "";clear: both;display: block;}
    .all .content li{float: left;overflow: hidden;margin: 10px;width: 173px;height: 162px;}
    .all .content li div{width: 173px;background: url('../../assets/1.jpg') no-repeat center right;}
    .all .content li img{width: 153px;height: 130px;}
</style>