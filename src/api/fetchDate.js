import axios from "axios";

import qs from "qs";

//post 转化参数 设置请求头
let fetchData = axios.create({
    baseUrl:"https://cnodejs.org/api/v1 ",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});

//每一个接口  token

//请求拦截器
fetchData.interceptors.request.use(
  function(config) {
    //在请求发出之前进行一些操作
    // config.data  //post 获取参数
    // config.params //get 获取参数
    // config.headers
    config.params = { ...config.params };
    config.data = qs.stringify({ ...config.data});
    return config;
  },
  function(err) {
    //Do something with request error
    return Promise.reject(error);
  }
);

//添加一个响应拦截器
// fetchData.interceptors.response.use(
//   function(res) {
//     //在这里对返回的数据进行处理
//     return res;
//   },
//   function(err) {
//     //Do something with response error
//     return Promise.reject(error);
//   }
// );

export default fetchData;

// 前台请求  --- 》 （transformRequest）（请求拦截器}）    ---》后台

// 后台   ----》 transformResponse  --- >前台

// Promise.all([函数1，函数2，函数3]).then().then().then()  // all都执行完了才会执行.then()
// Promise.race([函数1，函数2，函数3]).then()  只要有一个完成就会调用
