const flatten = (arr) => {
  if (arr === null || arr.length === 0) return [];
  const newArr = [];
  return flattenHelper(newArr, arr);
};

const flattenHelper = (newArr, currentArr) => {
  currentArr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenHelper(newArr, element);
    } else if (element !== null) {
      newArr.push(element);
    }
  });
  return newArr;
};

const flatten1 = (arr) => {
  return arr.reduce((result, item) => result.concat(Array.isArray(item) ? flatten1(item) : item), []);
};

const array = [
  1,
  [
    [2, { a: 1 }, [[false], 7]],
    [4, "abc"],
  ],
  { a: "abc", b: "def", c: ["abc", 1, false] },
];

console.log(flatten(array));

console.log(flatten1(array));
