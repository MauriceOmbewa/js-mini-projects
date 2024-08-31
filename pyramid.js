function pyramid(str, numb) {
    let result = '';

    for (let i = 1; i <= numb; i++) {
        result += ' '.repeat(numb - i).repeat(str.length)
        result += str.repeat(i*2-1)
        if (i < numb) {
            result += '\n'
        }
    }
    return result;
}

console.log(pyramid('{}', 12));
