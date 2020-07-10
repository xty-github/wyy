<template>
    <div class="container">
        <div class="left ">
            <ul >
                <li>
                     <img :src="topic_list.coverImgUrl" alt="">
                    <div class="introduce">
                        <span>歌单</span>
                        <span style="position: absolute;left: 40px;top: 0;border:12px solid red;border-bottom: 12px solid transparent;border-top: 12px solid transparent;border-right: 12px solid transparent;"></span>
                        <h2>{{topic_list.name}}</h2>
                        <div class="author">
                            <img :src="topic_list.creator.avatarUrl" alt="">
                            <span>{{topic_list.creator.nickname}}</span>
                            <b>{{$day(topic_list.createTime)}}</b>
                        </div>
                        <div class="tag">
                            <span>标签：</span>
                            <ul>
                                <li v-for="(item,key) of topic_list.creator.expertTags" :key="key"><span>{{item}}</span></li>
                            </ul>
                        </div>
                        
                        <div class="content" v-text="topic_list.description" style="white-space:pre-line"></div>
                    </div>
                </li>
            </ul>
            <h4>歌曲列表</h4>
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>歌名</td>
                        <td>时长</td>
                        <td>歌手</td>
                        <td>专辑</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,key) of song_list" :key="key">
                        <td>{{item.index}}<audio :src="item.url" controls></audio></td>
                        <td>{{item.name}}</td>
                        <td>{{item.dt}}</td>
                        <td>{{item.ar[0].name}}</td>
                        <td>{{item.al.name}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="comment">
                <h3>评论<span>共{{topic_list.commentCount}}条评论</span></h3>
               <h4>精彩评论</h4>
                <ul class="hot">
                    <li v-for="(item,key) of new_list1.hotComments" :key="key"><img :src="item.user.avatarUrl" alt="">
                        <p><a href="javascript:;">{{item.user.nickname}}</a>:<span v-html="item.content"></span></p>
                    </li>
                </ul>
               <h4>最新评论</h4>
                <ul class="hot">
                    <li v-for="(item,key) of new_list2" :key="key"><img :src="item.user.avatarUrl" alt="">
                        <p><a href="javascript:;">{{item.user.nickname}}</a>:<span v-html="item.content"></span></p>
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
        <div  class="right">
            <h2>喜欢这个歌单的人</h2>
        </div>

    </div>
</template>

<script>
import {get_topic1, get_topic,get_topic2,song_topic} from "../../api"
    export default {
        data(){
            return {
                topic_list:{},
                new_list1:{},
                new_list2:[],
                song_list:[],
                newSong_list:[],
                page:0,
                limit:20
            }
        },
        methods:{
            change(data){
                this.page=data
            },
            show(){
                console.log(11111)
            //     song_topic(id).then(res=>{
                    
            //     this.newSong_list=res.data.data
            //     this.song_list.forEach((item,index)=>{
            //         if(item.id==id){
            //             item.is_show=true
            //         }
            //     })
            // })
            }
        },
        watch:{
            page:{
                handler(){
                     get_topic2(this.$route.query.id,this.limit,this.page).then(res=>{
                    console.log(res)
                    this.new_list1=res.data
                    this.new_list2=res.data.comments
                    })
                }
            },
        },
        mounted(){
            get_topic1(this.$route.query.id).then(res=>{
                console.log(res.data.playlist)
                this.topic_list=res.data.playlist
                this.song_list=res.data.playlist.tracks
                this.song_list.forEach((item,key)=>{
                    item['index']=key+1
                    item.dt=this.$dt(item.dt)
                    song_topic(item.id).then(res=>{
                        item.url=res.data.data[0].url
            })
                })
                console.log(this.song_list)
            });
            get_topic2(this.$route.query.id,this.limit,this.page).then(res=>{
            // console.log(res)
            this.new_list1=res.data
            this.new_list2=res.data.comments
            })
            
        }
    }
</script>

<style scoped>
.container{position:relative;margin: 0 auto;width: 1100px;}
.left{width: 669px;float: left;padding: 20px;}
ul li{display: flex;}
ul li>img{width: 208px;height: 208px;margin-right: 20px;}
.introduce{position: relative;}
.introduce h2{font-weight: normal;padding-left: 60px;}
.introduce img{width: 35px;height: 35px;}
.introduce .tag{display:flex;}
.introduce ul:after{content:"";display:block;clear: both;}
.introduce ul li{float: left;width: 40px;height: 24px;border: 1px solid black;border-radius: 10px;line-height: 24px;margin-right: 10px;}
.introduce ul li span{text-align: center;display: inline-block;width: 100%;}
.introduce>span:first-child{color:white;line-height:24px;text-align:center;position: absolute;left: 0;top: 0;width: 40px;height: 24px;background: red;}
.right{width: 391px;background: pink;float: right;}
.right h2{border-bottom: 1px solid black;}
.author{display: flex;margin-top: 20px;}
.comment h3{font-weight: normal;font-size: 18px;border-bottom: 3px solid red;}
.comment h3 span{margin-left: 10px;color: #ccc;font-size: 12px;}
.comment h4{font-size: 14px;border-bottom: 3px solid black;}
.comment .hot img{width: 50px;height: 50px;}
.comment ul li{margin-top: 20px;}
.left table{border-collapse: collapse;}
.left td{width: 100px;height: 30px;border: 1px solid black;line-height: 30px;text-align: center;}
.left td:first-child{width: 200px;}
</style>