const prevValues = [];

function square(n) {
  if (prevValues[n] != null) {
    return prevValues[n];
  } else {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += 1;
      }
    }
    prevValues[n] = result;
    return result;
  }
}
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));

////////////////////////////////////////////////////////////////////////

fibonacci = (n, prevValues = []) => {
  if (prevValues[n] != null) {
    return prevValues[n];
  } else {
    let result;
    if (n <= 2) {
      result = 1;
    } else {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    prevValues[n] = result;
    return result;
  }
};

console.log(fibonacci(5));
console.log(fibonacci(5));
console.log(fibonacci(5));
console.log(fibonacci(5));
console.log(fibonacci(5));
console.log(fibonacci(5));
