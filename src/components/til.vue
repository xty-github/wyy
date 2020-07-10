<template>
    <div class="title">
        <ul class="container">
            <li v-for="(item,key) of list" :key="key">
                <router-link activeClass="active" exact :to="'/'+item.id">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    {
                        id:"discover",
                        name:"推荐"
                    },
                    {
                        id:"discover/toplist",
                        name:"排行榜"
                    },
                    {
                        id:"discover/playlist",
                        name:"歌单"
                    },
                    {
                        id:"discover/djradio",
                        name:"主播电台"
                    },
                    {
                        id:"discover/artist",
                        name:"歌手"
                    },
                    {
                        id:"discover/album",
                        name:"新碟上架"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .title{height: 34px;background: red;}
    .container{ width: 1100px;margin: 0 auto;}
    .container li{float: left;margin-left: 20px;}
    .container li a{color: #fff;display: inline-block;height: 20px;padding: 0 13px;margin: 7px 17px 0;border-radius: 20px;line-height: 21px;}
    .container li a:hover{background: #333;}
    .title .container li .active{background: #333;}
</style>