// this is slightly old method of defining getters and setters.
// this is function based syntax using property:

function User(email, password) {
  this._email = email;
  this._password = password;

  // function is an object too.
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const chai = new User("chai@dipak.com", "chia");

console.log(chai.email);
