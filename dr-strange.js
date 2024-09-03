const addWeek = (arg) => {
    const week = ['Monday', 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    'secondMonday', 'secondTuesday', "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];

// The epoch date (0001-01-01) is the start of our 14-day week
const epoch = new Date('0001-01-01');

// Calculate the difference in days from the epoch to the given date
const timeDifference = arg - epoch;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Find the day in the 14-day week
const dayIndex = daysDifference % 14;

// Return the corresponding day name from the week array
return week[dayIndex];
}

const timeTravel = (arg) => {
    let mydate = new Date(arg.date)
    // console.log(mydate)

    if (arg.hasOwnProperty('second')) {
        mydate.setSeconds(arg.second);
    }
    if (arg.hasOwnProperty('minute')) {
        mydate.setMinutes(arg.minute);
    }
    if (arg.hasOwnProperty('hour')) {
        mydate.setHours(arg.hour);
    }
    if (arg.hasOwnProperty('day')) {
        mydate.setDate(arg.day);
    }
    if (arg.hasOwnProperty('month')) {
        mydate.setMonth(arg.month);
    }
    if (arg.hasOwnProperty('year')) {
        mydate.setFullYear(arg.year);
    }
    // console.log(Date(mydate))
    return mydate

}

console.log(addWeek(new Date('0001-01-01')))

// const temp = timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()

//   console.log(temp)
// const date = new Date('2020-05-29 23:25:22')
// console.log(date instanceof Date)
  
