/*
Object oriented programming with javascript: 

Notes:

Javascript and classes:

JS has classes.

Technically it doesnt has it.

it was introduced in ES6(2015)


It is primarly is a prototype based language.
// not a obect oriente not a functional.

classes are primarily syntactic sugar.

it is still prototype based mechanism.


///////////////////////////////////////////////

OOP:

it  a programming paradime.
it says about style of programming.
like functional procedural etc.

WTF is an object?

Collection of properties (like variables) and methods(like functions).
e.g. toLowerCase, new etc.

/////////////////////////////////////////

Why OOP ?


Spegetti code :
code not being reused.

// java feture. services.

///////////////////////////////////////////

Parts of OOP:

Object literal {}  // literally meaning.

- Constructor function:
- Prototypes (or proto):
- classes:
- Instances( new ,this etc)


-- $ pillars of OOP:

Abstraction  ( details hata lena e.g fetch)
Encapsulation ( wrap kardo data ko. ( hide karke))
Inheritance ( will explain later.)
Polymorphism. ( POLy - many morphism - svarup  one method does all)

*/

// Object Literal:

// this is basic unit in js.
const user = {
  username: "Dipak",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);

    // remember the execution context.
    // we are taking username from outside its execution context.
    // so for its context username is not something which this
    // function knows.
    // we we specifically need to tell the function
    // that we are talking about this context. hence the this.keyword.

    console.log(this); // this will give current context.
  },
};

console.log(user.username);
console.log(user.getUserDetails());

/////////////////////////////

// this keyword. (used for context.)
// current context.

console.log(`------------------------------`);

// console.log(this); // will give empty {} as global context is empty.
// but browser has so much more values.
// inside node we have nothing.

////////////////////////////////////////////////////

// now if we want to make user2 , we have to copy the first user and write redundant code.

//////////////////////////////////////////////////////////////
// Constructor function:

console.log(`------------------------------`);

// const promiseOne = new Promise();
// const date = new Date();

// new keyword is a constructor function.

// which lets you make multiple instances from same object.
// new makes new context.

function User(username, loginCount, isLoggedIn) {
  this.username = username; // both same how to distinguish ? we use this.
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username} !`);
  };

  return this; // you will pass the whole object.
}

const userOne = new User("Dipak", 12, true);

const userTwo = new User("chai aur code", 11, false);

// now we are not printing userTwo. but, it is overWriting all the values.
// and we will get chai aur code 11 false

console.log(userOne);
console.log(userTwo);

// this is really bad.
// thats why we use new keyword.
// it will always give you a new instance(copy)

// when we used new keyword we got the og values.

// what if we dont return this ?

// it will have no effect as it is already implicitly
// defined.
// but keep it.

//////////////////////////////////////////////////////////
// what happens when you write new key word?

//1. an empty object gets created. ( called instance)
//2. Constructor function call happens (and values gets passed on )
//3. this keyword gets injected.
// 4.  you get it inside function.

////////////////////////////////////////////////

// you can also write function (method.)

console.log(userOne.constructor); // it holds [Function: User]
// refernce about self.

// instance of operator.
