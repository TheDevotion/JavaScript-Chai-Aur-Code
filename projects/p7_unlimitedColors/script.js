// generate a random color:

let intervalID;

const getRandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // from 0 to 16
  }
  return color;
};

const startChangingColor = function () {
  // this if condition stopped the thing
  // where if i click the start button multiple times.
  // the color will change that much fater.
  // and i would not even be able to stop it.
  if (!intervalID) {
    // safety check.
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);

  intervalID = null; // please do this . this is an edge case.
  // as it should be cleared every time we stop it.
  // another reason being. if variable is not in use,
  // clean it !.
};

// refernce of buttons.
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

// NOTE - on the first try code should run.
// then think about edge cases.
// and then think about  time and space complexity.
// and then check the classes methods, dependancy, modularity etc etc. SOLID.
