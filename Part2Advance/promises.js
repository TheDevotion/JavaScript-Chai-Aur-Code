// the promise object represents the eventual completion (or failure) of an asynchronous
// operation and its resulting value.

// many real world operations need more time. there we use async. js

// but in modern programming we mostly use promises.

// promise has 3 states:
// pending fullfilled and rejected.

// mostly you will consume promise.

// else.g.gfetch('https:://somehitn.come');

// how to make promises (creation)
// reduces callback hell
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task.
  // DB calls, cryptography, network call
  setTimeout(function () {
    console.log("Async task is complete");

    // resolve method:
    resolve(); // to connect it to then.
  }, 1000);
});
// this is a direct object. introuduced in ES 6.

// what resolve and reject did ???
//////////////////////////////////////

// consumeing promise:

promiseOne.then(function () {
  console.log("promise consumed"); //
}); // connection with resolve.

// we did both of them in a single code:

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved.");
});

////////////////////////////////////////////
const promiseThree = new Promise(function (resolve, reject) {
  // how to pass data.
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@eg.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // if true we get error message else we get my username.
    if (!error) {
      resolve({ username: "Dipak", password: "1234" });
    } else {
      reject("ERROR: Something went wrong."); // gives error
    }
  }, 1000);
});

// we cannot hold it inside a username ( will not return.)
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  }); // its kind of a default. it will run no matter what.

/////////////////////////////////////////////////////

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Dipak2", password: "xyz" });
    } else {
      reject("ERROR2: something again went wrong");
    }
  }, 1000);
});

// we do it using async await :
// its like .then .catch
// error handling not that good.
// async await cannot handle errors directly.

// USE TRY CATCH to handle errors inside the async function.
// promise is an object

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//// working with JSON.

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E .", error);
  }
}

console.log("---------------------------------");
// getAllUsers();

// even though all code was right, it was still not loading.
// as things take time.
// it this case db did not take any time.
// but converting to json did. so we also need to await for it.

///////////////////////////////////////////////////////
// IN .then .catch format:
///////////////////////////////////////////////////////

// we dont need to use await here as one thing runs after the other.

// this will run first and then the async await, promise and all thing.
// as we setInterval to 1 sec.
// and also, we will talk about it on the next video.
fetch("https://api.github.com/users/TheDevotion")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
