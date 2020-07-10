<template>
    <div class="banner">
        <!-- <h1>推荐</h1> -->
        <div>
            <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,key) of banner_list" :key="key"><img :src="item.imageUrl" alt=""></div>
                <!-- <div class="swiper-slide"><img src="http://p1.music.126.net/CVXGZd1Q3pq3b9qSJygdkg==/109951165082809818.jpg?imageView&quality=89" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/VG-oPbyUsRtYhPdyggwbKw==/109951165083050661.jpg?imageView&quality=89" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/v5E4A91u5IXUV2fRFXsMsA==/109951165082809618.jpg?imageView&quality=89" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/P--ZqfDqqh1OdjYQE83mjg==/109951165082803481.jpg?imageView&quality=89" alt=""></div> -->
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        </div>
       <div class="container">
            <Til1></Til1>
       </div>
        
    </div>
</template>

<script>
    import Til1 from "../../components/til1"
    import {banner_topic} from "../../api"
    import Swiper from "swiper"
    import "swiper/css/swiper.css";
    export default {
        data(){
            return {
                banner_list:[],
            }
        },
        components:{
            Til1
        },
       mounted(){
             this.swiper = new Swiper(".swiper-container", {
                autoplay: true,
                loop : true,
                effect : 'fade',
                speed:2000,
                 allowTouchMove: false,
                navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                pagination: {
                            el: '.swiper-pagination',
                            clickable :true,
                        },
                    });
                banner_topic().then((res)=>{
                    console.log(res.data.banners)
                    this.banner_list=res.data.banners
                })

                }
                
        
    }

</script>

<style scoped>
    .container{position:relative;margin: 0 auto;width: 1100px;}
    
    .swiper-container{width: 1100px;margin: 0 auto;}
    .swiper-button-prev{background: rgba(0,0,0,.5);padding: 10px;}
    .swiper-button-next{background: rgba(0,0,0,.5);padding: 10px;transform: translateX(-20px);}
    

</style>