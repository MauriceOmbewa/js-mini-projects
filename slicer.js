const slice = (str, staindex = 0, endind = str.length-1) => {
    let temp = ''
    for (let i = staindex; i <= endind; i++){
        temp += str[i]
    }
    return temp
}

const arr = [1, 2, 1, 3, 5, 8]

// console.log(slice('hello', 2))
console.log(slice(arr, 2, 4))
