console.log("This is the date tutorial");

// Date object
let today = new Date;
console.log(today);         // Gives todays date timestamp

let otherDate;
otherDate = new Date("June 09 2018");
otherDate = new Date("June 09 2018 07:55:59");
console.log(otherDate);

let a;
a = otherDate.getDate();        // Gives the date
a = otherDate.getDay();         // Gives the day no(sat), starting sunday as 0
a = otherDate.getFullYear();    // Gives year
a = otherDate.getHours();       // Give hour value
a = otherDate.getMinutes();       // Give minute value
a = otherDate.getSeconds();       // Give second value
a = otherDate.getMonth();       // Give month value as a no january starts as 0
a = otherDate.getMilliseconds();    // Give milisecond value
a = otherDate.getTime();        // It gives time in seconds starting from epoch(1st Jan 1970)

a = otherDate.getTimezoneOffset();      // It shows -330 min i.e indian timezone is -5:30 from GMT(London TZ)
// a = otherDate.getTimezoneOffset
console.log(a);



