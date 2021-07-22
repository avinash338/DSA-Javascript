/**
 * @description     This method is about finding the minimum possible ways to get the sum of numbers from fibonacci series.
 * @param {number} number  It carries the user input.
 * @returns {number}  Returns the minimum number of possible ways.
 */
getMinValues = (number) => {
  let sum = 0;
  let tempArray = [];
  const array = getFibonacciSeries(number);
  for (let index = 0; index < array.length; index++) {
    // calculating the sum.
    sum += array[index];
    // If sum is less than or equal to the given value
    if (sum <= number) {
      // stores the current value in an array
      tempArray.push(array[index]);
    } else {
      // subtracting the current value from the sum.
      sum -= array[index];
    }
  }
  return tempArray.length;
};

/**
 * @description     This method gives the fibonacci series.
 */
getFibonacciSeries = (number) => {
  let array = [1, 1];
  for (let i = 2; i < number + 1; i++) {
    let result = array[i - 2] + array[i - 1];
    if (result <= number) {
      array.push(result);
    } else {
      break;
    }
  }
  return array.reverse();
};

console.log(getMinValues(6451545));
