function isFriday(date) {
    // Check if the given date is a Friday (getDay() returns 5 for Friday)
    return date.getDay() === 5;
  }
  
  function isWeekend(date) {
    // Check if the given date is a Saturday (6) or Sunday (0)
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  
  function isLeapYear(date) {
    // Get the year from the date
    const year = date.getFullYear();
    
    // Check if the year is a leap year
    // A year is a leap year if it is divisible by 4 but not by 100,
    // except if it is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function isLastDayOfMonth(date) {
    // Get the day of the month for the given date
    const day = date.getDate();
    
    // Create a new date object for the next day
    const nextDay = new Date(date);
    nextDay.setDate(day + 1);
    
    // Check if the next day is the first day of the next month
    return nextDay.getDate() === 1;
  }
  
  // Example usage:
  console.log(isFriday(new Date('2024-09-06'))); // true (since 2024-09-06 is a Friday)
  console.log(isWeekend(new Date('2024-09-07'))); // true (since 2024-09-07 is a Saturday)
  console.log(isLeapYear(new Date('2024-01-01'))); // true (2024 is a leap year)
  console.log(isLastDayOfMonth(new Date('2024-02-28'))); // true (since 2024-02-29 is the last day of February in a leap year)
  
