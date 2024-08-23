"use strict";

// en map har unika nycklar (eng. keys)

let dictionary = new Map();
// lägg till:
// par av nyckel (eng. key) och värde (eng. value)
dictionary.set("hej", "hello");
dictionary.set("hej då", "goodbye");
dictionary.set("ja", "yes");
dictionary.set("nej", "no");
dictionary.set("katt", "cat");
dictionary.set("hund", "dog");

// hämta värdet där nyckeln är "hej"
console.log(dictionary.get("hej")); // hello

// sök efter nycklar
console.log(dictionary.has("hej")); // true
console.log(dictionary.has("hello")); // false

// hämta alla nycklar
console.log(dictionary.keys());

// hämta alla värden
console.log(dictionary.values());

