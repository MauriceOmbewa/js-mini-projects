function sign(arg){
    if (arg < 0){
        return -1
    } else if (arg === 0){
        return 0
    } else {
        return 1
    }
}

function sameSign(arg, arg2){
    if (sign(arg) === -1 && sign(arg2) === -1){
        return true
    } else if (sign(arg) === 1 && sign(arg2) === 1){
        return true
    } else if (sign(arg) === 0 && sign(arg2) === 0){
        return true
    } else{
        return false
    }
}
