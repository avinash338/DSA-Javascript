/**
 * @description
 * Time complexity  :O(n)
 * Space complexity :O(1)
 * @returns index value.
 */
const linearSearch = (list, value) => {
  const result = [];
  list.forEach((element, i) => {
    if (element === value) {
      result.push(i);
    }
  });
  return result;
};

console.log(linearSearch([1, 2, 3, 3, 4, 5, 6], 3));
