// you can use copies of that packege (function)

function sayMyName() {
  console.log("Dipak");
}

sayMyName();
//sayMyName is only reference.

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  return num1 + num2;
}

addTwoNumbers(3, "4");
addTwoNumbers(3, 4);
addTwoNumbers(3, "a");
addTwoNumbers(3, null);

// main reason to use typscript is this thing.
//

// parameters - in function definition.
// arguments - in call.

const result = addTwoNumbers(3, 4);

console.log(result); // undefined.

// reason: we havent used return here. so it is not
// returning anything.
// same as C where if the function is void we cannot store its output
// inside another variable.

// introduced to scope.

//-------------------------------------------------//

function loginUserMessage(username = "sam") {
  // ! operator used to go inside code if condition is false.
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

loginUserMessage("Dipak Jadhav"); // this will not print username
// as we havent specified it to print.

console.log(loginUserMessage("Dipak Jadhav"));

// if no value passed >

console.log(loginUserMessage()); // undefined just logged in

// dafault values::
