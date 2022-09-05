"use strict";

// Exercise 1

for (let line = "#"; line.length < 8; line += "#") console.log(line);

// Exercise 2

for (let num = 1; num <= 100; num = num + 1) {
  let output = "";
  if (num % 3 == 0) {
    output += "Fizz";
  }
  if (num % 5 == 0) {
    output += "Buzz";
  } else {
    if (num % 3 == 0 && num % 5 == 0) {
      output += "FizzBuzz";
    }
  }
  console.log(output || num);
}
