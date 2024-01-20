const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

// events:

buttons.forEach((button) => {
  console.log(button);
  // event listener: ( sun ne wala to chahiye.)
  button.addEventListener("click", (e) => {
    // e for event
    console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  }); // ispe event listener laga diya
});
