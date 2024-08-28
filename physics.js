function getAcceleration(arg){
    if (Object.keys(arg).length === 0){
        return 'impossible';
    }
    let acc = (arg.f / arg.m) || (arg.Δv / arg.Δt) || ((2*arg.d))/(arg.t*arg.t)
    if ('f' in arg && 'm' in arg){
        acc = arg.f / arg.m
    } else if ('Δv' in arg && 'Δt' in arg){
        acc = arg.Δv / arg.Δt
    } else if ('d' in arg && 't' in arg){
        acc = ((2*arg.d))/(arg.t*arg.t)
    } else {
        return 'impossible'
    }

    return acc
}


console.log(getAcceleration({ d: 10, f: 2, Δv: 100 }))
