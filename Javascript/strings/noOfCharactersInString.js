/**
 * @description    This method searches the specific character and returns the number of occurances in the given string.
 * @param {String} inputString
 */
const charCount = (inputString) => {
  //It searchs for character "n" and returns all the occurances in the form of array.
  return inputString.match(/n/g);
};
console.log(charCount("_nnn_n__no______nn__nn_nnn"));
