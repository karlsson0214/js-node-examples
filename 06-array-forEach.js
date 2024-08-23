"use strict";


console.log("Tärningarna visar (obs sorterade):");

let numbers = []; // tom lista (eng. array) som ska innehålla flera tal

for (let i = 0; i < 10; i = i + 1)
{
    // lägg till tal i listan numbers
    numbers.push(Math.floor(Math.random() * 6 + 1));
}

numbers.sort((a, b) => a - b); // sorterar talen i stigande ordning

numbers.forEach(number => console.log(number));
