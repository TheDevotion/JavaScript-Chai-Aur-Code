// IIFE

// function which executes immediately.
// why ?
// in database connection start cases,
// we don't want pollution from global scope.

// THIS IS AN IIFE :
// concept used same as implicit return.
// we used () for the whole function. which will then
// will not get polluted by global scoped variables.
// we need () after we enclosed entire function to call it.

(function chai() {
  console.log(`DB CONNECTED`);
})();

// VVIMP use ; to end the context of iife. otherwise it will give error.

// () ()

// (function definition) (function call)

///////////////////////////////////////////////////

// arrow function iife:

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Dipak");

/// there are also named IIFE e.g. chai. ( normal function)
// for two iife we need ;
