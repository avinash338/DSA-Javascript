let stringCompression = (s) => {
  var obj = {};
  for (var i = 0; i < s.length; ) {
    if (isNaN(s[i])) {
      var num = "";
      var count = 1;
      for (j = i + 1; j < s.length; j++) {
        if (isNaN(s[j])) {
          break;
        } else {
          count++;
          num = num + s[j];
        }
      }
      if (obj[s[i]] != undefined) {
        let sum = +obj[s[i]] + +num;
        obj[s[i]] = sum;
      } else {
        obj[s[i]] = +num;
      }
      i += count;
    }
  }
  const ordered = {};
  Object.keys(obj)
    .sort()
    .forEach(function (key) {
      ordered[key] = obj[key];
    });
  var arr1 = Object.keys(ordered);
  var arr2 = Object.values(ordered);
  var res = "";
  for (i = 0; i < arr1.length; i++) {
    res = res + arr1[i] + arr2[i];
  }
  return res;
};

console.log(stringCompression("a12c56a1b5"));
