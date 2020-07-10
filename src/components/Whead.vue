<template>
<div>
    <div class="head">
        <div class="container">
            <div class="logo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wangyiyunyinle"></use>
                </svg>
            </div>
                <span>网易云音乐</span>
            <div class="choice">
                <router-link activeClass="active" tag="span" exact to="/">发现音乐 </router-link>
                <router-link activeClass="active" tag="span" exact to="/my">我的音乐</router-link>
                <router-link activeClass="active" tag="span" exact to="/friends">朋友</router-link>
                <router-link activeClass="active" tag="span" exact to="/store">商城</router-link>
                <router-link activeClass="active" tag="span" exact to="/musician">音乐人</router-link>
                <router-link activeClass="active" tag="span" exact to="/downLoad">下载客户端</router-link>
            </div>
            <input type="text" placeholder="音乐/视频/电台/用户">
            <b>创作者中心</b>
            <a href="javaScript:;" @click="show()">登录</a>
        </div>
      </div>  
    <div class="login" v-show="is_show">
            <myLogin></myLogin>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Login from "./login"
import $ from "jquery"
    export default {
        data(){
            return {
                is_show:false
            }
        },
        components:{
            myLogin:Login
        },
        methods:{
            show(e){
               this.is_show=true
            }
        }
    }
</script>

<style scoped>
    .icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 30px;
}
.head{height: 70px;background: #242424;overflow: hidden;}
.container{width: 1100px;margin: 0 auto;height: 70px;}
.container .logo{float: left;line-height: 70px;padding: 5px;}
.container span{float: left;font-size: 14px;line-height: 70px;color: white;}
.head .choice{float: left;margin-left: 10px;}
.head .choice span{color: #ccc;line-height: 70px;font-size: 14px;padding: 0 19px;}
.head .choice .active{background: #000;color: #fff;}
.head .choice span:hover{color: #fff;background: #000;cursor: pointer;}
.container input{height: 30px;margin: 20px;width: 150px;font-size: 12px;border-radius: 15px;outline: none;border: none;float: left;margin-left: 100px;margin-right: 20px;text-align: center;}
.container b{float:left;margin-top:19px;font-weight: normal;color:#ccc;width: 90px;height: 32px;border: 1px solid #4F4F4F;display:inline-block;line-height: 32px;text-align: center;border-radius: 20px;}
.container b:hover{border-color: #fff;color: #fff;}
.container a{color: #787878;float: right;font-size: 14px;margin-top: 25px;margin-left: 10px;margin-right: 10px;}
.container a:hover{color: #666;text-decoration: underline;}
.login{position:absolute;left: 0;top: 0;width: 100%;height: 100%;background:rgba(0,0,0,.5);z-index: 200;}
</style>