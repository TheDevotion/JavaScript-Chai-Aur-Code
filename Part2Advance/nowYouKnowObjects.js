// can you change value of constant Pi ??

/////////////////////////////////////////////////
// Math:

// Object.mynewObj = { username: "username" }; // undefined.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // talks about hidden object things.
// Pi is a property inside math.
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObject = Object.create(null);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("code fat gya");
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// now changing property:

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false, // names enumeration stops after this.
});

console.log(`---------------------------------------`);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we changed the property values.
// if type is not function then
for (let [key, value] of Object.entries(chai)) {
  // typecheck
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// Now We can we  change the value of pi ? : NO.
////////////////////////////////////////////

console.log(`+++++++++++++++++++++++++++++++++++++++++`);

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperty(Math, "PI", {
  writable: true,
});

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
