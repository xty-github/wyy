<template>
  <div>
    <Whead></Whead>
    <router-view></router-view>
    <div class="footer">
      <myFoot></myFoot>
    </div>
    <!-- <myScroll></myScroll> -->
    </div>
  
</template>

<script>
import Whead from "./components/Whead"
import foot from "./components/foot"
import BS from "./components/scroll"
  export default {
    
    components:{
      Whead,
      myFoot:foot,
      myScroll:BS,
    },
    
  }
</script>

<style>
  *{margin: 0;padding: 0;}
  a{text-decoration: none;}
  img{display: block;}
  ul{list-style: none;}
  .footer{background: #f2f2f2;}
</style>