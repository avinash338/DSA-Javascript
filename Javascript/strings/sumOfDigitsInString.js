/**
 * @description    This method takes all the numbers [SINGLE DIGIT] from the string and returns the sum of all digits.
 * @param {String} inputString
 */
const numberCount = (inputString) => {
  const numbers = inputString.match(/\d/g).map(Number);
  return numbers.reduce((a, b) => a + b, 0);
};
console.log(numberCount("Abc_123_xyz_10_20"));

/**
 * @description    This method takes all the numbers [MULTIPLE DIGIT] from the string and returns the sum of all digits.
 * @param {String} inputString
 */
const numberCount1 = (inputString) => {
  const numbers = inputString.match(/\d+/g).map(Number);
  return numbers.reduce((a, b) => a + b, 0);
};
console.log(numberCount1("Abc_123_xyz_10_20"));
