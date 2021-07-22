/**
 * @description
 * Time Complexities
 *      Best case    : O(1)
 *      Average case : O(log n)
 *      Worst case   : O(log n)
 * Space complexity  : O(1)
 * @returns index value.
 */
const binarySearch = (list, value) => {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (list[middle] === value) {
      return middle;
    } else if (list[middle] < value) {
      start = middle + 1;
    } else {
      end = end - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
