const evenOrOdd = (num) => {
  if(Number.isInteger(num, true)){
  if(num % 2 === 0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
  }
  else{
    console.log("Not an integer!");
  }
}

evenOrOdd(8);
evenOrOdd(11);
evenOrOdd(2);
evenOrOdd(121332);
evenOrOdd(1);
evenOrOdd("error");
evenOrOdd(true);
evenOrOdd(3.14);

/* if(foo()) {
return 'bar';
}
else{
return qux();
}
*/