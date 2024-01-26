class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password}Dipak`;
  }

  // if you define getter then defining setter is must.
  // does almost the same thing as constructor.
  // therefore callstack will be excided.

  set password(value) {
    // make new property: for password.
    this._password = value.toUpperCase();
    // this._password = value // it will only set value and will not convert it to upper case
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const Dipak = new User("Dipak@gmail.com", "ABC");

console.log(Dipak.password);
console.log(Dipak.email);

// but we dont want someone to access the password then
// we use getters and setters.
// getters and setters are automatically generated for each property.

// getter (get) - to get value from a class from outside
// setter (set) - to set value in a class from outside
