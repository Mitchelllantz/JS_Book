let rlsync = require("readline-sync");
let age = Number(rlsync.question("What is your age?"));
console.log(`You are ${age} years old.`)
for(let i = 10; i < 41; i += 10){
console.log(`In ${i} years, you will be ${age + i} years old.`);
}