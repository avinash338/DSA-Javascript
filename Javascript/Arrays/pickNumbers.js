/**
 * This method picks the numbers in an array.
 * @param array
 * @returns numbers in the given array.
 */
const pickNumbers = (array) => {
  return array
    .reduce((result, item) => result.concat(Array.isArray(item) ? pickNumbers(item) : item), [])
    .filter((value) => typeof value === "number");
};

const arr = [["cat", 2], 0, null, ["-1", undefined, {}, 7, ["car", "dog", 5, [], 2]]];
console.log(pickNumbers(arr)); //Ans [ 2, 0, 7, 5, 2 ]
