longUpper = (words) => {
  if(words.length > 10){
    return words.toUpperCase();
  }
  else return words
}

console.log(longUpper("This is a long sentence"));
console.log(longUpper("Short"));