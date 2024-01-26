const User = {
  _email: "d@dj.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// factory function.
const tea = Object.create(User);
console.log(tea.email);

// underscore shows that this is a private propery.
// but when you use get or set, the underscore doesnt matter.
// get and set are special methods on top of propery.
// this is overighting default js memory management.

// so email is not a function but a property.

// in js bts for array length they use getters and setters.
