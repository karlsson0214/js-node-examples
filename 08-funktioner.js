console.log("Tärningarna visar (obs sorterade):");

// Funktion som simulerar en tärningskastning
function rollDice()
{
    return Math.floor(Math.random() * 6 + 1);
}

// Funktion som räknar antalet förekomster av ett visst värde i en lista
function count(value, list)
{
    let count = 0;
    for (let i = 0; i < list.length; i = i + 1)
    {
        if (list[i] === value)
        {
            count = count + 1;
        }
    }
    return count;
}

let numbers = []; // tom lista (eng. array) som ska innehålla flera tal

for (let i = 0; i < 10; i = i + 1)
{
    // lägg till tal i listan numbers
    numbers.push(rollDice());
}

numbers.sort((a, b) => a - b); // sorterar talen i stigande ordning

// Skriv ut vad tärningarna visar.
let output = "";
for (let i = 0; i < numbers.length; i = i + 1)
{
    output = output + numbers[i] + ", ";
}
console.log(output);

// Skriv ut antalet förekomster av varje värde.
for (let i = 1; i <= 6; i = i + 1)
{
    // OBS! count-funktionen måste vara definierad före denna kodrad
    console.log(i + ": " + count(i, numbers));
}   

