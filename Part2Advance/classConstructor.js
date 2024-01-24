// classes in JS:

// after ES6 : its only syntactical sugar.

class User {
  // when we use new keyword, constructor automatically gets called.
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

/////////////////////////////////////////////////
// how this works bts:
// this is same as above but we only use latest syntax of class

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
