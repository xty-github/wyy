<template>
    <div class="container">
        <div  class="left">
            <ul>
                <li><a href="">服务条款</a></li>
                <li><a href="">隐私政策</a></li>
                <li><a href="">儿童隐私政策</a></li>
                <li><a href="">版权投诉指引</a></li>
                <li><a href="">意见反馈</a></li>
            </ul>
            <p>网易公司版权所有&copy;1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号<br>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
                <br>粤B2-20090191-18工业和信息化部备案管理系统网站</p>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .container{width: 1100px;margin: 0 auto;margin-top: 30px;background: #f2f2f2;overflow: hidden;}
    .left{width: 980px;}
    .left ul{width: 100%;margin: 20px 0;}
    .left ul:after{content: "";display: block;clear: both;}
    .left ul li{float: left;}
    .left ul li a{border-right: 1px solid black;padding:0 20px;color: #333;}
    .left ul li a:hover{color: #999;}
</style>