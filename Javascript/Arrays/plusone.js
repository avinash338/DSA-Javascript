/**
 * @description   This method adds 1 to the last digit and returns the new array that contain numbers
 * @param {array} digits
 */
const plusOne = (arr) => {
  let last_digit = arr.pop();
  return last_digit < 9 ? [...arr, ++last_digit] : [...(arr.length ? plusOne(arr) : [1]), 0];
};

/**
 * @description   This method adds 1 to the last digit and returns the new array that contain strings
 * @param {array} digits
 */
const plusOne1 = (arr) => {
  return (BigInt(arr.join("")) + 1n).toString().split("");
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne1([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
