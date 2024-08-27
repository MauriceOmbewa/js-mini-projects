function words(arg){
    const temp = arg.split(' ');
    return temp;
}

function sentence(arg){
    const temp = arg.join(' ');
    return temp;
}

function yell(arg){
    const temp = arg.toUpperCase()
    return temp
}

function whisper(arg){
    const temp = arg.toLowerCase()
    const temp2 = '*' + temp + '*'
    return temp2
}

function capitalize(arg){
    const temp = arg[0].toUpperCase() + arg.slice(1).toLowerCase()
    return temp
}
