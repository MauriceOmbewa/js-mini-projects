function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st of the same year
    const diffInMilliseconds = date - startOfYear; // Difference in milliseconds
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1; // Convert to days and add 1

    return diffInDays;
}

// Example usage
console.log(dayOfTheYear(new Date('2024-03-01'))); // 61
console.log(dayOfTheYear(new Date('2024-12-31'))); // 366 (2024 is a leap year)
console.log(dayOfTheYear(new Date('2023-12-31'))); // 365 (2023 is not a leap year)
