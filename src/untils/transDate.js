//现在的时间  - 回复评论时间

function transDate(str) {
  //
  let time = new Date() - new Date(str);

  //秒
  let sec = parseInt(time / 1000);

  let min = parseInt(time / 1000 / 60);

  let hour = parseInt(time / 1000 / 60 / 60);

  let day = parseInt(time / 1000 / 60 / 60 / 24);

  let month = parseInt(day / 30);

  let year = parseInt(month / 12);

  let result = year
    ? year + "年前"
    : month
    ? month + "月前"
    : day
    ? day + "天前"
    : hour
    ? hour + "小时前"
    : min
    ? min + "分前"
    : "刚刚";

  return result;
}

export default transDate;
//
