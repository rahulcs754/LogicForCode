// Find the factorial of a number using recursion.
let num = 5;
const factorialCount = (num) => {
  if (num <= 1) return 1;
  return num * factorialCount(num - 1);
};

console.log(factorialCount(num));
