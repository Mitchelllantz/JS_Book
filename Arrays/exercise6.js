let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = (arr) => {
  let lengths = arr.map(length => length.length);

  return lengths.filter(odd => odd % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
