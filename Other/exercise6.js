let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

const allMatches = (arr, exp) => {
  let newArray = [];
  newArray = arr.filter((word) => exp.test(word));
  return newArray;

}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']