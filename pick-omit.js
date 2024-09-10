const pick = (obj, str) => {
    let resultObj = {}
    if (Array.isArray(str)){
        for (let key in obj){
            if (obj.hasOwnProperty(key)){
                const status = str.includes(key);
                if (status){
                    resultObj[key] = obj[key];
                }
            }
        }
    } else if (typeof str === 'string'){
        for (let key in obj){
            if (obj.hasOwnProperty(key)){
                const status = str === key;
                if (status){
                    resultObj[key] = obj[key];
                }
            }
        }
    }
    return resultObj;
}

const omit = (obj, str) => {
    let resultObj = {}
    if (Array.isArray(str)){
        for (let key in obj){
            if (obj.hasOwnProperty(key)){
                const status = str.includes(key);
                if (!status){
                    resultObj[key] = obj[key];
                }
            }
        }
    } else if (typeof str === 'string'){
        for (let key in obj){
            if (obj.hasOwnProperty(key)){
                const status = (str === key);
                if (!status){
                    resultObj[key] = obj[key];
                }
            }
        }
    }
    return resultObj;
}


// const test = {
//     name: 'tom',
//     age: '45',
//     gender: 'male',
// }

// const str1 = ['hello', 'age', 'world', 'name']

// console.log(pick(test, str1));  // { age: '45', name: 'tom' }
// console.log(omit(test, str1));  // { gender: 'male' }
