// array:

const myArr = [22, 1, 2, 3, 4, 5, "true", "Dipak"];

console.log(myArr[0]);

// makes shallow copies.

// means has same reference point.

// deep copy - don not share same reference.

const myHeroes = ["Ironman", "Hanuman", "spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 4);

// / array methods:

myArr.push(6);

console.log(myArr);
myArr.push(9);

console.log(myArr);
myArr.pop();

console.log(myArr);

myArr.unshift(0); // array start. // time counsuming. Avoid using it.

console.log(myArr);

myArr.shift(5); // deletes first element. // also time cousuming
console.log(myArr);

console.log(myArr.includes(9)); // boolean

console.log(myArr.indexOf(9)); // -1 if not exist.

const newArr = myArr.join();

console.log(myArr);
console.log(typeof newArr); // converts into string.

// slice, and splice:

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // does not change original array.

console.log(myn1);
console.log("B", myArr);
console.log("------------------");
const myn2 = myArr.splice(1, 3); //changes original array. also .includes the 2nd argument index.

console.log(myn2);
console.log(myArr);
