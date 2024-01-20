// submit event.

const form = document.querySelector("form");

// we normally use get or post method.
// but we are not sending it to the server here.
// so we need to stop this default action.
// const height = parseInt(document.querySelector("#height").value); // .value to get value. (gives string)
// THIS WILL GIVE EMPTY VALUE.

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); // .value to get value. (gives string therefore parseInt)
  const weight = parseInt(document.querySelector("#weight").value); // .value to get value. (gives string)
  const results = document.querySelector("#results"); // no need of value and parseInt as it does not hold any value.
  // and we just need this element.

  // lets have some checks.
  if (height === "" || height < 0 || isNaN(height)) {
    // latest method isNAN
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    // latest method isNAN
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI: ${bmi}, You are underWeight.</span>`;
    } else if (bmi < 24.9) {
      results.innerHTML = `<span>BMI: ${bmi}, You are in Normal range.</span>`;
    } else {
      results.innerHTML = `<span>BMI: ${bmi}, You are Overweight.</span>`;
    }
  }
});

///////////////////////////////////////////////
// NOTE- declaring height and weight variable inside and outside function

// because we only need the values when we click the submit button,
// and not at the start of the program (page loading)
// it will store empty values. as soon as we load the page.
