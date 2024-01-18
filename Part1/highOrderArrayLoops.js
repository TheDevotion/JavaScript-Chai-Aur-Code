// For of loop :

// ["dipak", "Somanth", "jadhav"];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 4, 5];

//it says object but it works on arrays too
for (const num of arr) {
  console.log(num);
}

// you can use it on strings too.

const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`each char is ${greet}`);
}

//Maps in js:
// similar to object

// no duplicate values. only unique

const map = new Map(); // map is an object.

map.set("IN", "India");
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("USA", "United States of America");

console.log(map);

// to use for of loop on map:

for (const key of map) {
  console.log(key); // gives whole map.
}

// use array destructuring to print key and value different different
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//// for of for object

const myObject = {
  game1: "NFS",
  game2: "GTA",
};

// objects are not iteratable by using for of:
// for (const [key, value] of myObject) {
//   //   console.log(key, ":-", value); // cannot do like this.
// }

/////////////////////////////////////////////////////
// loop on objects:

// for in loop:
const obj1 = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};

for (const key in obj1) {
  //   console.log(obj1[key]);  // object values.
  console.log(`${key} fhortcut is for ${obj1[key]}`);
}

//////////////////////////////
// for in for arrrays:
// it will give keys like 0 1 2 3
// for of loop for arrays gives values.

const programming = ["js", "ruby", "python", "cpp"];

for (const key in programming) {
  console.log(key); // gives index.
  console.log(programming[key]); // use bracket notation to get values.
}

////////////////////////////////////
// for in loop in map:

for (const key in map) {
  console.log(key); // will not give any output.
  // because it is not iteratable.
}

// tip:
//Use: for in for object
// and
// for of for array.

//////////////////////////////////////////////////
// most used loop for array:
// forEach:  // it is a higher order function.

const coding = ["js", "ruby", "python", "cpp", "php"];

// it asks for call back function

// call back function dont have name.

// item(value) acts as parameter and  will take each element as argument in itself.

coding.forEach(function (item) {
  console.log(item);
});

//++===============================++++++++++///
// You can also use arrow function.

coding.forEach((val) => {
  console.log(`Item: ${val}`);
});

//////////////////////////////////////////////
// You can also write it like this:
function printMe(item) {
  console.log(item);
}

// keep in mind that you only have to give its reference.
// And NOT execute it !.
coding.forEach(printMe);

////////////////////////////////////////////////////
// for each has access to 3 things: item, index and whole array.
// you can use all 3 at once like this:
coding.forEach((Item, index, arr) => {
  console.log(Item, index, arr);
});

///////////////////////////////////////////////////

// Array of objects:

// db gives values like this:

const myCoding = [
  {
    languageName: "javascript",
    languageFilename: "js",
  },
  {
    languageName: "java",
    languageFilename: "java",
  },
  {
    languageName: "python",
    languageFilename: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  // used . operator because in item we have the whole object.
});
