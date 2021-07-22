const getData = () => {
  //api call goes here
  console.log("hai");
};

const doSomething = function (fun, limit) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(context, args);
    }, limit);
  };
};

const betterFunction = doSomething(getData, 3000);
