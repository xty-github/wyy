<template>
  <div>
    <div class="container">
      <div class="left">
        <ul>
          <li>
            <img :src="al_list.blurPicUrl" alt />
            <div class="introduce">
              <span>专辑</span>
              <span
                style="position: absolute;left: 40px;top: 0;border:12px solid red;border-bottom: 12px solid transparent;border-top: 12px solid transparent;border-right: 12px solid transparent;"
              ></span>
              <h2>{{al_list.name}}</h2>
              <div class="author">
                <span>歌手：{{al_list.artist.name}}</span>
                <b>发行时间：{{$day(al_list.publishTime)}}</b>
                <b>发行公司：{{al_list.company}}</b>
              </div>
            </div>
          </li>
        </ul>
        <div class="al_content">
          <h1>专辑介绍</h1>
          <div class="content1" v-html="str" style="white-space:pre-line" v-if="is_show"></div>
          <div class="content2" v-html="str" style="white-space:pre-line" v-else></div>
          <a href="javaScript:;" v-if="is_show" @click="tf1">展开</a>
          <a href="javaScript:;" v-else @click="tf2">收起</a>
        </div>
        <div class="comment">
          <h2>
            评论
            <span>共{{comment_data.total}}条评论</span>
          </h2>
          <h4>精彩评论</h4>
          <ul>
            <li v-for="(item,key) of comment_list1" :key="key">
              <img :src="item.user.avatarUrl" alt />
              <div>
                <p>
                  <a href="javaScript:;">{{item.user.nickname}}:</a>
                  {{item.content}}
                </p>
              </div>
            </li>
          </ul>
          <h4>最新评论</h4>
          <ul>
            <li v-for="(item,key) of comment_list2" :key="key">
              <img :src="item.user.avatarUrl" alt />
              <div>
                <p>
                  <a href="javaScript:;">{{item.user.nickname}}:</a>
                  {{item.content}}
                </p>
              </div>
            </li>
          </ul>
          <el-pagination
            :current-page="page"
            background
            layout="prev, pager, next"
            :total="1000"
            @current-change="change"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let height = document.querySelector('.content').style.height

import { new_topic, al_comment } from "../../api";
import $ from "../../untils/jquery.min.js";
export default {
  data() {
    return {
      is_show: true,
      al_list: {},
      comment_data: {},
      comment_list1: {},
      comment_list2: {},
      limit: 20,
      page: 0,
      str: ""
    };
  },
  methods: {
    change(data) {
      console.log(data);
      this.page = data;
      al_comment(this.$route.query.id, this.limit, this.page).then(res => {
        console.log(res);
        this.comment_data = res.data;
        this.comment_list1 = res.data.hotComments;
        this.comment_list2 = res.data.comments;
      });
    },
    tf1() {
      let oDiv = document.querySelector(".content");
      this.is_show = false;
      // $('.content').css('overflow','none')
    },
    tf2() {
      let oDiv = document.querySelector(".content");
      this.is_show = true;
      // $('.content').css('overflow','hidden');
    }
  },
  mounted() {
    new_topic(this.$route.query.id).then(res => {
      console.log(res);
      (this.al_list = res.data.album), (this.str = this.al_list.description);
      console.log(this.str);
      this.str = "<p>" + this.str.replace(/\n/g, "</p><p>") + "</p>";
    });
    al_comment(this.$route.query.id, this.limit, this.page).then(res => {
      console.log(res);
      this.comment_data = res.data;
      this.comment_list1 = res.data.hotComments;
      this.comment_list2 = res.data.comments;
    });
  }
};
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 1100px;
}
.container:after {
  content: "";
  display: block;
  clear: both;
}
.left {
  width: 669px;
  float: left;
  padding: 20px;
}
ul li {
  display: flex;
}
ul li > img {
  width: 208px;
  height: 208px;
  margin-right: 20px;
}
.introduce {
  position: relative;
}
.introduce h2 {
  font-weight: normal;
  padding-left: 60px;
}
.introduce .author {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.introduce ul:after {
  content: "";
  display: block;
  clear: both;
}
.introduce ul li {
  float: left;
  width: 40px;
  height: 24px;
  border: 1px solid black;
  border-radius: 10px;
  line-height: 24px;
  margin-right: 10px;
}
.introduce ul li span {
  text-align: center;
  display: inline-block;
  width: 100%;
}
.introduce > span:first-child {
  color: white;
  line-height: 24px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 24px;
  background: red;
}
.left .comment {
  width: 100%;
  position: relative;
  margin-top: 10px;
}
.left .comment h2 {
  font-size: 20px;
  font-weight: normal;
}
.left .comment h2 span {
  margin-left: 5px;
  font-size: 14px;
  color: #ccc;
}
.left .comment h4 {
  border-bottom: 1px solid black;
}
.left .comment img {
  width: 30px;
  height: 30px;
}
.left .comment ul li {
  margin-top: 10px;
}
.left .al_content .content1 {
  height: 192px;
   line-height: 24px;
 text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}
.left .al_content .content2 {
}
</style>