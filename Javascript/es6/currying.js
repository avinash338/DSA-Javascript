//using bind method
const multiply = (a, b) => {
  console.log(a * b);
};
const miltiplybytwo = multiply.bind(this, 2);
miltiplybytwo(40);

//using closure
let multiply = (x) => {
  return (y) => {
    console.log(x * y);
  };
};
const miltiplybytwo = multiply(2);
miltiplybytwo(3);
