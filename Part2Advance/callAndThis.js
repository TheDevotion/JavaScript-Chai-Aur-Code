// call and this.
// call bind apply.

// history: react: used bind alot back then.

// CALL :

// call stack.

// he explained call stack again.

// this refers global EC when we have function inside function.
// window - this.
// node - {};

function SetUsername(username) {
  // complex DB calls.
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //   SetUsername(username);   // this is only reference call nahi gaya.
  //   SetUsername.call(username);  call ho raha hai par abhi bhi chai nahi aaya.
  //because outer function to gaya execution context se
  // uske andar ke variables bhi gye.
  // to uska reference hold karke rakho.
  SetUsername.call(this, username); // we got  the username chai now.
  // keep this in mind when you are usinng 'this' in between two functions and calling each other.
  // give execution context.
  // dont use this this. I will give you my this.
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");

console.log(chai); // we didn't get chai name.
