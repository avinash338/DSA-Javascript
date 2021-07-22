/**
 * @description     This method rotates the array in left direction in given number of times.
 * @param {Array} array
 * @param {Number} num
 */
const leftRotation = (array, num) => {
  for (let i = 0; i < num; i++) {
    array.push(array.shift());
  }
  return array;
};

console.log(leftRotation([1, 2, 3, 4], 1));
