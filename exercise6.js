let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = (array) => {
return array.reduce(function(filteredArray, strings){
  let length = strings.length;
  if(length % 2 !== 0){
    filteredArray.push(length);
  }
  return filteredArray;
},[]);

  }



console.log(oddLengths(arr)); // => [1, 5, 3]
