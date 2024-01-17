// functions with object.

// shopping cart.

console.log("Shopping cart logic:");

// ... is also called rest operator..
// same as spread but use different

// passing rest operator to function.
//i.e. passing multiple values.
// it passes as an array values.
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// you are passing multiple arguments.

// val 1 and 2 will take 200 and 400 rest will take all other
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "dipak",
  price: 200,
};

// pease chek type safety.
// USE TYPESCRIPT PLEASE.
function handleObject(anyobject) {
  console.log(
    `username is: ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);

// you can directly pass objects as argument to the funciton.

handleObject({
  username: "sam",
  price: 999,
});

// You can pass arrays too:

const myNewArray = [199, 299, 399, 699, 999];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([20, 34, 54, 78, 54, 3]));
