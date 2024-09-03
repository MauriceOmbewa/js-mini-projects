function matchCron(cronString, date) {
    const cronParts = cronString.split(' ');
    
    const minute = parseInt(cronParts[0], 10);
    const hour = parseInt(cronParts[1], 10);
    const dayOfMonth = parseInt(cronParts[2], 10);
    const month = parseInt(cronParts[3], 10);
    const dayOfWeek = parseInt(cronParts[4], 10);
  
    // Match minute
    if (cronParts[0] !== '*' && minute !== date.getMinutes()) {
      return false;
    }
  
    // Match hour
    if (cronParts[1] !== '*' && hour !== date.getHours()) {
      return false;
    }
  
    // Match day of the month
    if (cronParts[2] !== '*' && dayOfMonth !== date.getDate()) {
      return false;
    }
  
    // Match month
    if (cronParts[3] !== '*' && month !== date.getMonth() + 1) { // getMonth() is 0-indexed
      return false;
    }
  
    // Match day of the week
    if (cronParts[4] !== '*' && dayOfWeek !== (date.getDay() === 0 ? 7 : date.getDay())) {
      return false;
    }
  
    // If all parts match, return true
    return true;
  }
  
  // Example usage
  console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // -> true
  console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // -> true
  console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // -> false
  
