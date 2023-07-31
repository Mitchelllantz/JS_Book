const numberRange = (num) => {
  if(num >= 0 && num <= 50){
    console.log("Number is greater than zero and less than or equal to 50");
  }
  else if (num > 50 && num <= 100 ){
    console.log("Number is greater than 51 and less than or equal to 100");
  }
  else if (num > 100){
    console.log("Number is greater than 100");
  }
  else if (num < 0){
    console.log("Number is less than zero");
  }
}








//numberRange(25);
//numberRange(75);
//numberRange(125);
//numberRange(-25);

console.log(false ?? null);
console.log(true ?? (1 + 2));
console.log((1 + 2) ?? true);
console.log(null ?? false);
console.log(undefined ?? (1 + 2));
console.log((1 + 2) ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);