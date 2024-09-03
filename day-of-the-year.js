function dayOfTheYear(date) {
    const isLeapYear = (d) => new Date(d.getFullYear(), 1, 29).getDate()  === 29;

    const monthDays = [31, isLeapYear(date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return monthDays
    .slice(0, date.getMonth())
    .reduce((sum, days) => sum + days, 0) + date.getDate();
}

// Example usage
console.log(dayOfTheYear(new Date('2024-03-01'))); // 61
console.log(dayOfTheYear(new Date('2024-12-31'))); // 366 (2024 is a leap year)
console.log(dayOfTheYear(new Date('2023-12-31'))); // 365 (2023 is not a leap year)
console.log(dayOfTheYear(new Date('0001-01-01')))// 1
