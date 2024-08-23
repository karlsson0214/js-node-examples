"use strict";

console.log("Tärningarna visar:");

for (let i = 0; i < 5; i = i + 1)
{
    let number = Math.floor(Math.random() * 6 + 1);
    console.log(number); 
}

/* Jämför med motsvarande while-slinga:

let i = 0;
while (i < 5)
{
    let number = Math.floor(Math.random() * 6 + 1);
    console.log(number);
    i = i + 1;
}
    
*/