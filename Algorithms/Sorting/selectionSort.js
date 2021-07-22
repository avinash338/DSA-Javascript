/**
 * @description
 * Time Complexities
 *      Best case    : O(n^2)
 *      Average case : O(n^2)
 *      Worst case   : O(n^2)
 * Space complexity  : O(1)
 * @returns sorted list.
 */
const selectionSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = list[i];
      list[i] = list[min];
      list[min] = tmp;
    }
  }
  return list;
};

console.log(selectionSort([234, 43, 55, 63, 5, 6, 235, 547]));
