// prototypal behaviour of js:

// mechanism topic of js:

// sde 2 to 3 jump : they ask BTS.

// he taught this using browser console.

// const newHero = ["hulk", "spiderman"]; // undefined.

// Prototype: Array(0)

// js behaviour:
// prototypal behaviour.
// it goes layyer by layer and doesnt take defeat untill it gets null.
// why this doesnt work in arrow function.
// because of this prototype thing,
// new this classes etc work because of this.

// we again get an prototype.

// prototypal behaviour matlab haar nahi manana.
// we also call this prototypal inheritance.

// we get prototype after prototype after prototype
// in browser console.

// reference of prototype:
//  array -> Object -> null

// string  -> Object -> null.

// almost everything in js is an object.

// function ?

// we will understand using code:

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

// is function an object ?

console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}  By default kuch context set hota hai
// this is actually the method's this.
// it also gives some properties.
// like this.username  we used in the function.

// so everything in js is an OBJECT ! xD

// because end of the day everything is object.
//  so we can access all object propertis on all other things.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// can we inject your own functions ?
// like .slice .splice something like that.
// as we can make functions inside object.

createUser.prototype.increment = function () {
  this.price++;
};

// lets inject one more method.
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("Chai", 10);
const tea = new createUser("tea", 7);

// score kiska badhau ?
// 10 or 7
// now to give context :
// jisne bhi bulaya he uske paas jao.

// "jis" ka matlab this.

// NOW,

// we dont do Array.prototype.map()

// js by default finds map()// it does this behind the scene.

// same way you can do the same for custom functions.

chai.printMe(); // cannot read properties of undefined.

//  and properties were injected.. but, when we assigned it to const chai,
// we didnt mention it that we have additional properties.

// and this job is done by new keyword.

///////////////////////////////////////////
// gave price is 10.

// IMP NOTES:

/*
Here's what happens behind the scenes when the new keyword
is used:

A new object is created: The new keyword initiates the creation
of a new JavaScript object.

A prototype is linked: the newly created object gets linked
to  the prototype property of the constructor function.
This means that it has access to properties and methods defined on 
the constructors's prototype.

The constructor is called: The constructor function is
called with the specified arguments and this is boud to 
the newly created object. if no explicit return value is specified
from the constructor, javaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.)
the newly created object is returned.

*/

console.log(`'''''''''''''''''''''''''''''''''''`);

//  Prototype in detail:

let myName = "Dipak       ";

console.log(myName.length);

// not trim we want the true length.

console.log(myName.trim().length);

// but i want shorter function:

console.log(myName.truelength);

// create a truelength method:

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${ths.spiderman}`);
  },
};

// we want every object to have this functionality/ method. so,

// we access a top level hirearchy and gave it a property.
// so cool !!!!!!!!!!!!!!!!!!!!!!!!!!

Object.prototype.Dipak = function () {
  console.log(`Dipak is present in all objects`);
};

// heroPower.Dipak();

myHero.Dipak();

Array.prototype.HeyDipak = function () {
  console.log("Dipak says hello");
};

myHero.HeyDipak();

// heroPower.HeyDipak(); // object does not has that power. but array does.
// because we implemented it at an lower level. i.e. array.

///////////////////////////////////////////////////

const User = {
  name: "Chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  ifullTime: true,
  __proto__: TeachingSupport, // now TA support and Teaching Support are linked.
};

// you can also link them outside.
Teacher.__proto__ = User; // teacher can access all properties of user.

// this is prototypal inheritance.
// you can access the properties of other object.

// but this is old !!!!!!!!!!!!!!1\

////////////////////////////////////////////////
// NEW SYNTAX :
/////////////////////////////////////////////////////////

Object.setPrototypeOf(TeachingSupport, Teacher);

//////////////////////////////////////////////////
// now our original problem:

console.log(`==========================================`);

let anotherUsername = "Chai aur Code         ";

String.prototype.trueLength = function () {
  console.log(`${this}`); // chai aur code.
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();

// note that trim will not trim the white spaces between words.

"Dipak    ".trueLength(); // jisne call kiya vahi hai.
//matlab Dipak ne call kiya to this me dipak hi hai.

"iceTea".trueLength();
