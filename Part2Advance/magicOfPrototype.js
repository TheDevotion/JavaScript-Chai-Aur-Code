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
  this.score++;
};

// lets inject one more method.
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
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

// because the values were created. but, when we assigned it to const chai,
// we didnt mention it that we have additional properties.

// and this job is done by new keyword.
