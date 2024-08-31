const cutFirst = (arg) => {
    if (arg.length === 1){
        return ''
    }
    let startind = 2
    let temp = ''
    for (let i = startind; i < arg.length; i++){
        temp += arg[i]
    }
    return temp
}

const cutLast = (arg) => {
    if (arg.length === 1){
        return ''
    }
    let endind = arg.length - 2
    let temp = ''
    for (let i = 0; i < endind; i++){
        temp += arg[i]
    }
    return temp
}

const cutFirstLast = (arg) => {
    if (arg.length === 1){
        return ''
    }
    let startind = 2
    let endind = arg.length - 2
    let temp = ''
    for (let i = startind; i < endind; i++){
        temp += arg[i]
    }
    return temp
}

const keepFirst = (arg) => {
    if (arg.length <= 1){
        return arg
    } else if (arg.length === 2){
        return arg
    }
    let endind = 2
    let temp = ''
    for (let i = 0; i < endind; i++){
        temp += arg[i]
    }
    return temp
}

const keepLast = (arg) => {
    if (arg.length <= 1){
        return arg
    } else if (arg.length === 2){
        return arg
    }
    let startind = arg.length - 2
    let temp = ''
    for (let i = startind; i < arg.length; i++){
        temp += arg[i]
    }
    return temp
}

const keepFirstLast = (arg) => {
    if (arg.length <= 1){
        return arg
    } else if (arg.length === 2){
        return arg
    } else if (arg.length === 3){
        return arg
    } else if (arg.length === 4){
        return arg
    }
    let first = keepFirst(arg)
    let last = keepLast(arg)
    let fistlast = first + last
    return fistlast
}

console.log(cutFirst('ac'))