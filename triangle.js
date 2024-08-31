function triangle(str, num) {
    let result = '';
    for (let x = 1; x <= num; x++) {
        if (x < num) {
            result += str.repeat(x) + '\n';
        } else {
            result += str.repeat(x);
        }
    }
    return result;
}

console.log(triangle('#', 5));