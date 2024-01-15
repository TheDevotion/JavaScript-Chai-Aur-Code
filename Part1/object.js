// two methods to declare

// singleton -
// literals - singletons nahi banata.

// Object.create - constructor method. (makes singelton)

// object literals:

const mySym = Symbol("key1");

// special case to use symbol.
// we dont want string. we need to use it as a symbol

const JsUser = {
  name: "Dipak", // by default "name"
  "full name": "Dipak Somnath Jadhav",
  [mySym]: "mykey1", // please use [] for symbol
  // define a symbol first and then use brackets  to use it as a symbol.
  // to access use square brakets.
  age: 20,
  location: "Nashik",
  email: "Dipak@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email); // . notation method to access
console.log(JsUser["email"]); // bracket notation/ sqare notation method

// bracket notation is very usefull for keys with more than one words.
// you cannot use . notation for two words.

//000000000000000000000000000000000000000000000000//

JsUser.email = "newEmail@gmail.com";

// to not change values.

// Object.freeze(JsUser); // it freezes the object. and you cannot change the values.
JsUser.email = "123124@gamil.com";

console.log(JsUser);

////////////////////////////////////////////

JsUser.greeting = function () {
  console.log("Hellow JS user");
};
JsUser.greeting2 = function () {
  //   console.log(`Hellow JS user, ${JsUser.name}`);
  console.log(`Hellow JS user, ${this.name}`);
  // prefer using this.   as it will only access the current object.
  // in future we may have multiple objects.
  // therefore this keyword is usefull. for modularity
  // we can also use this. to access the properties.
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

// if we only do .greeting it will give [function (anonymous)]
//  function doesnt execute, it just gives its reference.

// udefined. but if we use greeting(),

//IMP : use . notation mostly. But please remeber that [] notation is also used.
