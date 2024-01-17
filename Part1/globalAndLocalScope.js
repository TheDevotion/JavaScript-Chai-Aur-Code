// local and global scope:

// {
// this is scope.
// this is not object or JSON.
// eg. loop if else etc.
// }

var c = 300;

let a = 300; // global scope
if (true) {
  let a = 10;
  console.log(a); // block scope.
  const b = 20;
  var c = 39; // original var c changes.  // even if you dont use var keyword.
}

console.log(a); // global
// console.log(b);  // global
console.log(c); // will print 39.

//00000000000000000000000000000000000000000//

// in windows vs node scope is different.
// in console vs node is different. the global scope is different
// keep this in mind.
