// Nested scope:
// what are clousers ?

// basics:

// parent function.
function one() {
  const username = "Dipak";

  // inner function / child function.
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

one();

// Good anology: chhote bacche bado se icecream mang sakte hai.
// but bade chhoton se icecream nahi mang sakte.

// Meaning: the child function can access the parent variables.
// but the parent function cannot access the childs variables.
// CLOUSER is kind of like this but much more than this.

if (true) {
  const username = "hitesh";

  if (username === "hitesh") {
    const website = " youtube";

    console.log(username + website);
  }

  //   console.log(website);  // will give error.
}

// console.log(username);  // will also give error. because scope inside if

console.log(`--------------------`);

// interesting----------------------------------

// this is function
console.log(addOne(5)); // this will not give error. even though
// the function definition is after the function call.

function addOne(num) {
  return num + 1;
}

//////////////////////

// this too is a function
// but it is also called an expression
// like a variable which holds function.
console.log(addTwo(5)); // this will give error.
const addTwo = function (num) {
  return num + 2;
};

////
//  this happens due to hoisting.

// difference in function declaration.

// we will learn this later.
