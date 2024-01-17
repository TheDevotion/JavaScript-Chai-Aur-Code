// logic control / control flow:

// If:

if (true) {
}
if (false) {
}

// how true evaluates ?

if (2 == 2) {
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
}

// comparision operators:
/*
<, >, <=, >= , == ( is equal?), != (not equal), === ( is equal val, as well as type)
 strict equal. ===
    !== not strict equal.

*/
// think of condition as question. answer is true or false.
// if (2 !== "2") {
//   console.log("executed");
// }

////////////////////////////////////////////////////
// if elese:

// const temperature = 22;

// if (temperature < 40) {
//   console.log("less than 40");
// } else {
//   console.log("temp greater than 40");
// }

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);   // this will not run because of scope

// TIp: ERRORS are good.

//////////////////////////////////////////////////////

// short hand notation:

const balance = 1000;

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2");
// this is implicit scope.
// dont use multiplue lines.
// can be done using comma, but please dont use !
// its immature code.

//////////////////// if else if /////////////////////////

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// IRL

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
// AND
if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

// OR
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}

// you will do conditional rendering in future.

//////////////////////////////////////////////////////
// switch
//////////////////////////////////////////////////////

// used for multipule conditions.
// important in REDUX

// switch(key) {
//     case  value :
//         break;

//     default:
//         break;
// }

// if month = "march", change cases. (  remember case sensitivity)

// you can use string too.
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    break;
}

// if key matches, all code executes. except default.therefore use break;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// truthy and falsy

const userEmail2 = [];

// jab maan lete hai ki string ke andar value true hi hogi to vo truthy hai.
// if string is empty then it is falsy.

if (userEmail2) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

// falsy values:

// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy:
// all except falsy values.

// surprising :

//  "0" , "false", " " (white space), [], {}, function(){} // empty function.

////////////////////////////////////////////////

// to check if array is empty.
if (userEmail2.length === 0) {
  console.log("array is empty");
}

// to check if  objects are empty:

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// false == 0 // output true.

// false == '' // true

// 0 == ''  // true.

/////////////////////////////////////////////////
//  Nullish Coalescing Operator (??)    null undefined.

/////////////////////////////////////////

let val1;
// val1 = 5 ?? 10; // assigns 5
val1 = null ?? 10; // 10 will assign

// if null value then dont assign it

var1 = undefined ?? 15; // output 15.

let val2 = null ?? 10 ?? 20; // 10 will assign. acts like fallback.

console.log(val1);
console.log(var1);
console.log(val2);

// why this ? firebase and database  use,
// you dont get direct response.
// you can get null or undefined
// special case.

//////////////////////////////////////////////
// ternary operator:

let ans;

ans = 5 > 3 ? "5 is greater" : "wtf";
console.log(ans);

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
