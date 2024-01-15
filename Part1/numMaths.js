const score = 400;

const balance = new Number(120008);

console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value 2 digits after .

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3)); //how many values you want to be precise?

const hundreds = 10000000;

console.log(hundreds.toLocaleString("en-IN")); // us standard.

//////////////////////////////////////////////////
// Maths

console.log("---------------------");

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(1.934));
console.log(Math.ceil(1.934));
console.log(Math.floor(1.934));
console.log("_-------------------------_");

console.log(Math.min(1, 2, 3, 45, 6, 4, 3));
console.log(Math.max(1, 2, 3, 45, 6, 4, 3));

console.log("-----------------------");

// between 0 and 1

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

// added plus one to avoid the value being 0.something

//Formula:

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
