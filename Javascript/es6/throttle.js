const abc = () => {
  console.log("hai");
};
const throttle = function (fun, limit) {
  let flag = true;
  return () => {
    let context = this;
    let args = arguments;
    abc.apply(context, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};
console.log(throttle(abc, 500));
