const coding = ["javascript", "python", "c++", "ruby", "rust"];
// what if you want to store it inside a variable ?

const values = coding.forEach((item) => {
  console.log(item);
  return item; // still undefined.
});

console.log(values); // it returns undefined after prinitnng values.

// for each does not return a value.

console.log(`-------------------------------`);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter also takes call back function
const newNums = myNums.filter((num) => num > 4); // implicit return happening. // condition required

// why is it called filter ? because it will filter out the numbers/array
// according to given condition, and will return an array.

console.log(newNums);

////////////////////////////////////////////////////////

const newNums2 = myNums.filter((num) => {
  num > 4;
});

console.log(newNums2);
// this will give empty array. because it is not
// an implicit return.
// for this to work, you need the return keyword.

////////////////////////////////////////////////////////

// For doing the same thing with forEach ->
// we require:  6 lines of code instead of only one.
// therefore use filter. its easy. concide way to
// filter out the array elements.  more efficient.
const newNums3 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums3.push(num);
  }
});

console.log(newNums3);

////////////////////////////////////////////////////////

// you get these values from db.
// you need to use filters:
const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non-fiction",
    publish: 1982,
    edition: 2005,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1980,
    edition: 2006,
  },
  {
    title: "Book Four",
    genre: "Fiction",
    publish: 1975,
    edition: 2002,
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 1991,
    edition: 2011,
  },
  {
    title: "Book Six",
    genre: "Art",
    publish: 1961,
    edition: 1998,
  },
  {
    title: "Book Seven",
    genre: "Non-fiction",
    publish: 1981,
    edition: 2009,
  },
  {
    title: "Book Eight",
    genre: "History",
    publish: 1991,
    edition: 2001,
  },
  {
    title: "Book Nine",
    genre: "Science",
    publish: 1985,
    edition: 2010,
  },
  {
    title: "Book Ten",
    genre: "Fiction",
    publish: 1978,
    edition: 2006,
  },
];
const userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks); // we got 2 books with genre history.

const userBooks2 = books.filter((bk) => bk.publish >= 1980); // dont use scope here.

console.log(`--------------------------------------`);

console.log(userBooks2);

console.log(`--------------------------------------`);
const userBooks3 = books.filter((bk) => {
  return bk.publish >= 1980 && bk.genre === "History";
});

console.log(userBooks3);

/////////////////////////////////////////////////////////////////////////////
// MAP
// /////////////////////////////////////////////////////////////////////////

// works like filter. but we can perform operations on ALL values.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add 10 in all:

const result = myNumbers.map((num) => num + 10);

console.log(result);

// you can also do it using for each. but this is concise way to do it.

/////////////////////////////////////////////////////////////////////////////////////
//Chaining:
//////////////////////////////////////////////////

// result of first method goes into second method in chaining. not in result.

const newNumbers2 = myNumbers.map((num) => num * 10).map((num) => num + 1);

console.log("------------------------------");
console.log(newNumbers2);

// you can do infinite number of chaining. and you can also use filter.

const newNumbers3 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNumbers3);

// you can also return. but you need to do it explicitly.

/////////////////////////////////////////////////////////////////
//REDUCE
/////////////////////////////////////////////////////////////////

// used in shopping cart.

// works somewhat like summation. sum = sum + val.

// USER SUPPLIED REDUCER.

const myRedNums = [1, 2, 3];
const initialVal = 0;

const myTotal = myRedNums.reduce(function (accumulator, currentValue) {
  console.log(`acc: ${accumulator} and currenValue : ${currentValue}`);
  return accumulator + currentValue;
}, initialVal);

console.log(myTotal);

// using arrow function:

const myTot = myRedNums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTot);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "Mobile Dev course",
    price: 5999,
  },
  {
    itemName: "Data Science course",
    price: 12999,
  },
];

// add prices in shopping cart.
// its very commen therfore all use reduce.

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
