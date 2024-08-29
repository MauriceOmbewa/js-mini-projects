function multiply(a, b){
    let res = 0
    if (a < 0 && b < 0){
        a = Math.abs(a)
        b = Math.abs(b)
        for (let i = 0; i < b; i++){
            res += a
        }
        return res
    } else if (a < 0 || b < 0){
        if (a < 0){
            a = -a
        } else if (b < 0){
            b = -b
        }
        for (let i = 0; i < b; i++){
            res += a
        }   
        return -res     
    } else {
        for (let i = 0; i < b; i++){
            res += a
        }
    }
    return res
}

function divide(a, b){
    let res = a
    let num = 0

    let atemp = a
    let btemp = b

    if (a < 0 && b < 0){
        a = -a
        b = -b
    } else if (a < 0 || b < 0){
        if (a < 0){
            a = -a
        } else if (b < 0){
            b = -b
        }
    } else if (a === 0 || b === 0){
        return 1
    } else if(a < b){
        return 0
    }
    
    for (let i = 0; i < a; i+=b){
        if (i+b > a){
            if (atemp < 0 && btemp < 0){
                num = num
            } else if (atemp < 0 || btemp < 0){
                num = -num
            }
            return num
        }
        res -= b
        num++
    }
    if (atemp < 0 && btemp < 0){
        num = num
    } else if (atemp < 0 || btemp < 0){
        num = -num
    }
    return num
}

function modulo(a, b){
    let value = divide(a, b)
    let mul = multiply(value, b)
    let res1 = a - mul
    return res1
    // let res = a
    // let num = 0

    // let atemp = a
    // let btemp = b

    // if (a < 0 && b < 0){
    //     a = -a
    //     b = -b
    // } else if (a < 0 || b < 0){
    //     if (a < 0){
    //         a = -a
    //     } else if (b < 0){
    //         b = -b
    //     }
    // } else if (a === 0 || b === 0){
    //     return 1
    // }
    
    // for (let i = 0; i < a; i+=b){
    //     if (i+b > a){
    //         return a-i
    //     }
    //     res -= b
    //     num++
    // }
    // return 0
}



// console.log(multiply(-5, -3))
// console.log(divide(123, -22))
console.log(modulo(-123, 22))
