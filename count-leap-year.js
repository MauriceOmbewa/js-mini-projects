function countLeapYears(date) {
    let year = date.getFullYear(); // Get the year from the Date object
    let count = 0;

    for (let y = 1; y <= year; y++) {
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
            count++;
        }
    }

    return count;
}

console.log(countLeapYears(new Date('2000-01-01'))); // 484
console.log(countLeapYears(new Date('2024-01-01'))); // 490
