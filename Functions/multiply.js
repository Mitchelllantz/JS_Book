let multiply = () => {
  let rlsync = require("readline-sync");
 let num1 = Number(rlsync.question("What is your first number?"));
 let num2 = Number(rlsync.question("what is your second number?"));
 return `${num1} * ${num2} = ${num1 * num2}`;
}

console.log(multiply());