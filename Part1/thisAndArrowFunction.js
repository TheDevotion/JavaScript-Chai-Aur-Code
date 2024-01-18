// very important
// introduced in ES6 2015:

// this ?

// this talks about current context.

// we need to use this.username. we cannot use only username.
// we use this to access all the variables in the current context/ scope.
const user = {
  username: "Dipak",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();

user.username = "sam"; // it will change the current context.
// therfore we get sam, welcome to website.
// so this is why we used "this" keyword.
// if we didn't used it,
// we wouldn't have been able to use sam

// this is used for modularity.

user.welcomeMessage();

console.log(this); // this is reffer to empty object.
// inside node. output: {}

// for inside the object , context:

// output:

// $ node Part1/thisAndArrowFunction.js
// Dipak, welcome to website
// {
//   username: 'Dipak',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

/////////////////////////////////////////////////////

// inside the console, it will not give {}, but give window.
// because we get the js engine inside the node, deno etc.

console.log("arrow -----------------------..>");

function chai() {
  let username = "Dipak";
  console.log(this.username); // gives undefined.

  // if we only console log "this",  we will get multiple contexts, and values.
  // try it !

  // therefor we cannot use this inside a arrow function.
}

// chai();

///////////////////////////////////////////////////////////////

// Arrow functions :

// const chai2 = function () {
//   let username = "Dipak";
//   console.log(this.username);  // output: undefined.
// };

// this is how you declare/define an arrow funciton
const chai2 = () => {
  let username = "Dipak";
  console.log(this); // output: {}.
};

chai2();

// pure arrow funcion:

// syntax:

// () => {};

// or;

const add = (num1, num2) => {
  return num1 + num2;
};

// implicit return:
// we dont need to write {} and return keyword.
// if there is only one statement.
const add2 = (num1, num2) => num1 + num2;
const add3 = (num1, num2) => num1 + num2; // used in react.

// if you want to return object,

const add4 = (num1, num2) => ({ username: "Dipak" });

console.log(add(3, 4));
console.log(add2(3, 4));

console.log(add4(1, 2)); // gives undefined.

// because cannot return an object like this
// we need to use parenthesis.

///////////////////////////////////////////

const myArray = [2, 3, 4, 5, 6, 7];

// we can also write like this.: // for array.
myArray.forEach(() => {});
