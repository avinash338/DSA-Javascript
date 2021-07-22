/**
 * @description
 * Time Complexities
 *      Best case    : O(n)
 *      Average case : O(n^2)
 *      Worst case   : O(n^2)
 * Space complexity  : O(1)
 * @returns sorted list.
 */
const bubbleSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        var temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]));
