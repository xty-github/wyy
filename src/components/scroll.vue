<template>
    <div class="scroll">
        <div class="wrapper">
            <ul>
                <li v-for="(item,key) of list" :key="key" :class="{active:index==key}" @click="change(key)">{{item}}</li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,key) of list" :key="key" :style="{height:h_topic[key]+'px'}" :class="'abc'+key">{{item}}</li>
            </ul>
        </div> 
    
    </div>
</template>

<script>
import BScroll from "better-scroll"
    export default {
        data(){
            return {
                index:0,
                list:["html","css","javaScript","vue","react","微信小程序"],
                h_topic:[633,622,645,635,634,634],
                h_sum:[],
                bool:true

            }
        },

      mounted(){
          this.scroll = new BScroll('.wrapper',{
            click: true
        })
          this.scroll_content = new BScroll('.content',{
            click: true,
            probeType:3
        })
        let sum=0;
            for(var i = 0;i<=this.h_topic.length-1;i++){
                sum+=this.h_topic[i]
                this.h_sum.push(sum)
            }
            console.log(this.h_sum)
        this.scroll_content.on("scroll",(data)=>{
            console.log(data)
            // for(var i = 0;i<=this.h_sum.length-1;i++){
            //     if(Math.abs(data.y)>=this.h_sum[i]&&Math.abs(data.y)<=this.h_sum[i+1]){
            //         this.index=i
            //         this.scroll.scrollToElement(".active",100)
            //     }
            // }
             
            if(this.bool){
           
                if(Math.abs(this.scroll_content.y)>=this.h_sum[this.index]){
               this.index+=1
               
           }
           if(Math.abs(data.y)<=this.h_sum[this.index-1]){
               this.index-=1
            
           } 
               
            }
            
            
           
        })
        this.scroll_content.on("scrollEnd",()=>{
            // console.log(1)
            this.bool = true
        })
      },
      methods:{
          change(key){  
              this.bool=false
            //    this.bool=false
         
                  this.index=key
              
              this.scroll_content.scrollToElement('.abc'+key,100)
           
              
          },
      }
    }
</script>

<style scoped>
    .scroll{display: flex;width: 100%;}
    .wrapper{height: 300px;overflow: hidden;flex: 1;}
    .wrapper ul li{height: 100px;border: 1px solid black;}
    .content{height: 100vh;flex:5;overflow: hidden;}
    .content ul li{border: 1px solid red;}
    .active{background: blue;color: white;}
</style>