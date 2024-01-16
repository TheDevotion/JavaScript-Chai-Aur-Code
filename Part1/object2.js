// objects 2:
// singleton::

const tinderUser = new Object(); // this is singlton object

const tinderUser2 = {}; // non - singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// object inside object.

console.log("-----------------------------");

const regularUser = {
  email: "abc@gamil.com",
  fullName: {
    userFullName: {
      firstName: "Dipak",
      lastName: "Jadhav",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName);

//optional chaining:
// if value available then do this: (just a hint)
console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "e",
  4: "f",
};
const obj4 = {
  7: "e3",
  8: "f3",
};

// const obj3 = { obj1, obj2 };

// {} is optional parameter in object assign
// but preffer doing it. as it will gurranties that
// result will be in object form.

// object copies 2 or more object and returns into one.

const obj3 = Object.assign({}, obj1, obj2, obj4);

// {} is an empty object which is target and 1 2 4 are sources.

console.log(obj3);

// Most used:

// spread operator.

const objNew = { ...obj1, ...obj2 };
console.log(objNew);

// values from database:

const users = [
  {
    id: 1,
    email: "h@gamil.com",
  },
  {
    id: 2,
    email: "y@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);

// object methods:
// VVIMP:

console.log(Object.keys(tinderUser)); // output is an array.
console.log(Object.values(tinderUser)); // output is an array.
console.log(Object.entries(tinderUser)); // output is an key value array. (single key per array)

// you can also use .length.

// If value doesnt exist :

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // boolean.
