function num(data){
    if(data>99999){
        return parseInt(data/10000)+'万'
    }else{
        return data
    }
}

export default num