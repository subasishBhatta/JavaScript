// // Get all the time zones
// const ct = require('countries-and-timezones');

// const timezones = ct.getAllTimezones();
// console.log(timezones);

console.log("This is tutorial for date and time");

var d = new Date(); /* midnight in China on April 13th */
let usa = d.toLocaleString('en-US', { timeZone: 'America/New_York' });

console.log(usa);

