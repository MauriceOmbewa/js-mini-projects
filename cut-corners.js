function trunc(num) {
    if (num < 0) {
        return -trunc(-num);
    }

    let result = 0;
    let power = 1;

    while (power * 10 <= num) {
        power *= 10;
    }

    while (power >= 1) {
        while (result + power <= num) {
            result += power;
        }
        power /= 10;
    }
    return result;
}

function floor(num) {
    let t = trunc(num);
    return num < 0 && num !== t ? t - 1 : t;
}

function ceil(num) {
    let t = trunc(num);
    return num > t ? t + 1 : t;
}

function round(num) {
    let t = trunc(num);
    if (num >= 0) {
        return (num - t) >= 0.5 ? ceil(num) : floor(num);
    } else {
        return (t - num) > 0.5 ? floor(num) : ceil(num);
    }
}

// Testing the functions
console.log(floor(4.9));  // Output: 4
console.log(floor(-4.9)); // Output: -5
console.log(ceil(4.1));   // Output: 5
console.log(ceil(-4.1));  // Output: -4
console.log(round(4.5));  // Output: 5
console.log(round(4.4));  // Output: 4
console.log(round(-3.5)); // Output: -3
console.log(round(-4.5)); // Output: -4
console.log(trunc(4.9));  // Output: 4
console.log(trunc(-4.9)); // Output: -4
