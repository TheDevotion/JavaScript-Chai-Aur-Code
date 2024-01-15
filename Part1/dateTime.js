// Dates in js

// date is an objec.
// jan 1 1970.

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDateTime = new Date(2023, 0, 23, 6, 3);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

// months start from 0 in js

let myCreatedDate2 = new Date("01-04-14");

console.log(myCreatedDate2.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // in ms
console.log(myTimeStamp); // in ms

console.log(Date.now()); // in ms

// now in seconds
console.log("0-=------------------------------");

console.log(Math.floor(Date.now() / 1000)); // in seconds

let newDate = new Date();

console.log(newDate);

// month year:

console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// Imp method:

newDate.toLocaleString("default", {
  weekday: "long",
  // timezone: ' '
});
