const invert = (obj) => {
    let invertedObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;

}