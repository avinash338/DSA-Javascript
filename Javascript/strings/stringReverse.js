const reverseString = (str) => {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
};

const reverseString1 = (str) => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const reverseString2 = (str) => {
  return [...str].reverse().join("");
};

const reverseString3 = (str) => {
  return str.split(" ").reverse().join(" ");
};

// console.log(reverseString("hello world"));
// console.log(reverseString1("hello world"));
// console.log(reverseString2("hello world"));
// console.log(reverseString3("hello world"));

