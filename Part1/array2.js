// some more array topics:

const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // gives array inside array.
// at last index of the first array.
// it takes array as a data. (it considers dc as single element.)

console.log("----------------------------------------");
const allHero = marvelHeroes.concat(dcHeroes);
console.log(allHero); // gives merged array. ( concated array)

console.log("----------------------------------------");

// easier method:
// spread operator.

// works same as concat but this method is prefered
// because we can use more than two values.

const allNewHeroes = [...marvelHeroes, ...dcHeroes];

console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [2, 4, 5], 7, [6, (7)[(4, 5)]]];

const realAnotherArray = anotherArray.flat(Infinity); // give depth  2, 3 etc or infinity

console.log(realAnotherArray);

//// converting array :

console.log(Array.isArray("Dipak")); // is array or not

console.log(Array.from("Dipak")); // converts to array.

console.log(Array.from({ name: "Dipak" })); // gives empty array.
// make array with keys, or values.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// makes array from given variables.
