// Lexical Scoping:

// A closure is the combination of a function bundled together (enclosed) with refereces to its surrounding state.
// meaning,
// a closure gives you access to an outer functions scope from an inner function.

// LEXICAL SCOPING:
// explaination:  that icecream anology

function init() {
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
////////////////////////////////////////////////////////////////////////////
// LExical scoping done.
////////////////////////////////////////////////////////////
// what is closure:

function makeFunc() {
  const name = "Closure works";
  function displayName() {
    console.log(name);
  }
  return displayName; // we are returning an inner function. and not executing it
  // we are returning the reference of the function.
}

// we have closed the scope of outer functions executions context.
// but we have memeory reference.

// only display name will not go, if the outer function exists,
// its "lexical" scope will also go.
const myFunc = makeFunc();
myFunc();

// Real world implementation:
