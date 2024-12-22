// fibonaci series

const counter = 10;

function fibonaciFun(num) {
  let fib = [];
  for (let i = 0; i <= num; i++) {
    if (i == 0) {
      fib.push(0);
    } else if (i == 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 2] + fib[i - 1]);
    }
  }
  return fib;
}

console.log(fibonaciFun(counter));
