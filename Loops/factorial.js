let rlsync = require("readline-sync");
  let number = rlsync.question("What is your number?");
  let total = 0;

const factorial = (num) => {
  if(num === 1){
return 1;
  }
  else {
    return num * factorial(num - 1);
  }
  
}
console.log(factorial(number));