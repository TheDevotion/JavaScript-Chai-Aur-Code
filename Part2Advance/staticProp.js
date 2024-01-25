//
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // we want the user to get unique id.
  // ASSUME:
  static createId() {
    return `123`;
  }
}

const Dipak = new User("Dipak");

// console.log(Dipak.createId());

// static will stop the method from accessing.

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "I@phone.com");

iphone.logMe();

console.log(iphone.createId);
