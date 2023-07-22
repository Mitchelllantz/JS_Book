let rlsync = require('readline-sync');

let number1 = Number(rlsync.question("Enter the first Number\n"));
let number2 = Number(rlsync.question("Enter the second Nimber\n"));
let sum = number1 + number2;
console.log(`The numbers ${number1} and ${number2} add to ${sum}`);