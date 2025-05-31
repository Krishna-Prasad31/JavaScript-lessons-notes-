const date = new Date();

/*
const year = date.getFullYear();
const month = date.getMonth()
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes()
const seconds = date.getSeconds();
const millisecs = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month)
console.log(day)
console.log(hour)
console.log(minute)
console.log(seconds)
console.log(millisecs)
console.log(dayOfWeek)
*/

/*
date.setFullYear(2028);
date.setMonth(9);
date.setDate(15);
date.setHours(3);
date.setMinutes(23);
date.setSeconds(34);
date.getMilliseconds(123)
date.getDay()

console.log(date);
*/

const date1 = new Date("2025-12-25");
const date2 = new Date("2022-01-01");

if(date2 > date1) {
  console.log("Happy New Year!!!")
}
else{
  console.log("Merry Christmas!!!")
}