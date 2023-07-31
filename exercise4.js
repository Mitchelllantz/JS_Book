let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const upperKeys = (ob) => {
  let keyArray = Object.keys(ob);
  return keyArray.map(key => key.toUpperCase());
}

console.log(upperKeys(obj));