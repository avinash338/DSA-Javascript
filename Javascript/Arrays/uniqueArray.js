const uniqueArray = (arr) => {
  return [...new Set(arr)];
};

const uniqueArray1 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

console.log(uniqueArray([1, 2, 3, 2, 3, 4, 3]));
console.log(uniqueArray1([1, 2, 3, 2, 3, 4, 3]));
