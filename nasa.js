function nasa(N) {
    let result = [];
    for (let x = 1; x <= N; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            result.push("NASA");
        } else if (x % 5 === 0) {
            result.push("SA");
        } else if (x % 3 === 0) {
            result.push("NA");
        } else {
            result.push(x.toString())
        }
    }
    let newStr = "";
    for (let i = 0; i < result.length; i++) {
        if (i < result.length - 1) {
            newStr += result[i] + ' ';
        } else {
            newStr += result[i];
        }
    }
    return newStr;
}

console.log(nasa(30));