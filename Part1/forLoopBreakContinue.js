// iterations (iterators)

// syntax

for (let i = 1; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best");
  }
  //   console.log(`outr loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j} and outer loop ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const el = myArray[i];
  console.log(el);
}
// break and continue:
// break stops the execution and comes out of loop.
// continue skips the given condition.
// anology- ek baar maaf kardo xD
