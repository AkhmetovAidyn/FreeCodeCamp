// Description ❓

// Step 28
// You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - and you pushed "freeCodeCamp" to the end of the array earlier.
//
//     But what does .push() return? Assign your existing rows.push() to a new pushed variable, and log it.

// ✔️ SOLUTION:


let character = 'Hello';
let count = 8;

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop()
console.log(popped);
