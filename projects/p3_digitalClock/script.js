// how to display time ?

const clock = document.getElementById("clock");

// it should change every second.

// let date = new Date();

// console.log(date.toLocaleTimeString());

// new method:
// it control js events:
// give me method and interval and i will continuosly run it.

// please pay attention to the syntax. 1000 is in ms.
setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
