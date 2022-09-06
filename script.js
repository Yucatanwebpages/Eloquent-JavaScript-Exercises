'use strict';

// Exercise 1 Looping a triangle
/*
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
*/
// Exercise 3 Chessboard

let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);

// Nested loops explanation

console.log('------ FIRST EXAMPLE -----');

for (let i = 0; i < 5; i++) {
  console.log(`The current value of i is ${i}`);
  for (let j = 0; j < 5; j++) {
    console.log(`j: ${j}`);
  }
  console.log('----------');
}

console.log('------ SECOND EXAMPLE -----');

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log('----------');
}

console.log('------ THIRD EXAMPLE -----');

const storeInventory = [
  ['Item1: Computer', 'Price: 1500', 'Inventory: 25'],
  ['Item2: Mouse', 'Price: 6', 'Inventory: 80'],
  ['Item3: Keyboard', 'Price: 25', 'Inventory: 100'],
  ['Item4: RAM', 'Price: 10', 'Inventory: 200'],
  ['Item5: CPU', 'Price: 100', 'Inventory: 12'],
  ['Item6: Monitors', 'Price: 300', 'Inventory: 16'],
];

for (let i = 0; i < storeInventory.length; i++) {
  if (i > 0) {
    console.log('----------------------');
  }

  for (let j = 0; j < storeInventory[i].length; j++)
    console.log(storeInventory[i][j]);
}
