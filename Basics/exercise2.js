let number = 4936;
let ones = number % 10;
let tens = ((number - ones) % 100);
let hundreds = (number - tens - ones) % 1000;
let thousands = number - hundreds - tens - ones;
console.log(ones);
console.log(tens/10);
console.log(hundreds/100);
console.log(thousands/1000);




