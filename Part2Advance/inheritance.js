class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // we dont need to call anymore.
    super(username); // it will refer which class we were extending.
    // same as call this.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai", "chai@email.com", "123");

chai.addCourse();

const masalaChai = new User("Dipak");

// masalaChai.addCourse(); // it does not have acces to the extended class.

masalaChai.logMe();
chai.logMe();

console.log(chai === masalaChai); // false.
console.log(chai === Teacher); // false.

console.log(chai instanceof User); // true.
