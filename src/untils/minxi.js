//多个组件   100
// 10个组件 一部分

export default {
  data() {
    return {
      count: 333,
    };
  },
  beforeCreate() {
    console.log("加载中");
  },
  mounted() {
    console.log(11);
  },
  created() {
    console.log("created");
  },
};
