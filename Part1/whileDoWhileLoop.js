// while and do while loop:

let i = 0;
while (i <= 10) {
  console.log("executed.");
  i++;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;

while (arr < myArray.length) {
  console.log(`value is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
