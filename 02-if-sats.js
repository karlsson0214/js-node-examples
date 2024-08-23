"use strict";

let number_1 = Math.floor(Math.random() * 6 + 1);
let number_2 = Math.floor(Math.random() * 6 + 1);
console.log("Tärningarna visar: " + number_1 + " och " + number_2);

if (number_1 === number_2)
{
    console.log("Tärningarna är lika.");
}
if (number_1 === number_2 + 1 || number_1 + 1 === number_2)
{
    console.log("Stege.");
}
if (number_1 === 6 && number_2 === 6)
{
    console.log("Båda visar 6.");
}

console.log("Vinst eller förlust?");
if (number_1 === 6 && number_2 === 6)
{
    console.log("Högsta vinst, dubbel 6.");
}
else if (number_1 === number_2)
{
    console.log("Liten vinst, lika.");
}
else if (number_1 === number_2 + 1 || number_1 + 1 === number_2)
{
    console.log("Stegvinst.");
}
else
{
    console.log("Förlust.");
}
