import axios from "axios"
import qs from "qs"

async function get_topic(count){
    return await axios({
        // method:"post",
        // headers:{
        //     "content-type":"application/x-www-form-urlencoded;charset:UTF-8"
        // },
        url:"http://182.92.156.134:3000/personalized",
        params:{
            limit:count
        }
    })
}

async function get_topic1(id){
    return await axios({
       
        url:"http://182.92.156.134:3000/playlist/detail",
        params:{
            id:id
        }
    })
}

async function get_topic2(id,limit,page){
    return await axios({
       
        url:"http://182.92.156.134:3000/comment/playlist",
        params:{
            id:id,
            limit:limit,
            offset:page*limit,
        }
    })
}

async function get_topic3(){
    return await axios({
       
        url:"http://182.92.156.134:3000/playlist/catlist",
       
    })
}

async function get_topic4(limit,cat,page){
    return await axios({
        url:'http://182.92.156.134:3000/top/playlist',
        params:{
            limit:limit,
            cat:cat,
            offset:page*limit
        }
    })
}

async function banner_topic(){
    return await axios({
        url:'http://182.92.156.134:3000/banner'
    })
}

async function new_topic(id){
   return await axios({
       url:"http://182.92.156.134:3000/album/?id="+id,
   })
}

async function hot_album(){
    return await axios({
        url:"http://182.92.156.134:3000/album/newest",
    })
}

async function all_mv(area,limit,page){
    return await axios({
        url:"http://182.92.156.134:3000/mv/all",
        params:{
            order:'最新',
            area:area,
            limit:limit,
            offset:page*limit
        }
    })
}

async function al_comment(id,limit,page){
    return await axios({
        url:"http://182.92.156.134:3000/comment/album/?id="+id,
        params:{
            limit,
            offset:page*limit
        }
    })
}

async function song_topic(id){
    return await axios({
        url:"http://182.92.156.134:3000/song/url/?id="+id,
        
    })
}

export {get_topic,get_topic1,get_topic2,get_topic3,get_topic4,banner_topic,new_topic,hot_album,all_mv,al_comment,song_topic}
