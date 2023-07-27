
let getName = (message) => {
  let rlsync = require("readline-sync");
  let name = rlsync.question(message)
  return name;
}
let firstName = getName("What is your first name?");
let lastName = getName("What is your last name?");

console.log(`Good Morning, ${firstName} ${lastName}!`);