"use strict";

// Exercise 1 Looping a triangle

for (let line = "#"; line.length < 8; line += "#") console.log(line);

// Exercise 2 FizzBuzz

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

// Exercise 3 Chessboard

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
