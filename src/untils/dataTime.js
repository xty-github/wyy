function dataTime(data){
    return parseInt(parseInt(data)/1000/60)+':'+parseInt(parseInt(data)/1000%60)
}

export default dataTime