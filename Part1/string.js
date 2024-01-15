// strings in js:

let name = "Dipak";

const id = 112233;

console.log(name + id);

// You can use this instead:

console.log(`${name} ${id}`);

const str = new String("Dipak");

const newString = "    Dipak   ";

console.log(newString);
console.log(`${newString.trim()}`);

const url = "https://Dipak.com/dipak%20jadhav";

console.log(url.replace("%20", "-"));
