// Return types of data types.

// primitive:

const id = 123;
const name = "Dipak";
const bigNumber = 1234567890n;
const temperature = null;
let score;
const isLoggenIn = true;
let idNew = Symbol("123");

console.table([id, name, bigNumber, temperature, score, isLoggenIn, idNew]);
console.table([
  typeof id,
  typeof name,
  typeof bigNumber,
  typeof temperature,
  typeof score,
  typeof isLoggenIn,
  typeof idNew,
]);

//Non -primitive:

fruits = ["apple", "mango", "banana"];
Student = {
  name: "dipak",
  rollNo: 36,
  marks: 88,
};

function getSum() {
  return 1 + 2;
}

console.log("Non primiive:");

console.table([typeof fruits, typeof Student, typeof getSum]);
