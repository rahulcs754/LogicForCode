// digits = 786 will print 21
let digits = 786;

function sumOfdigit(digits) {
  let sum = 0,
    currentVal = digits;
  while (currentVal > 0) {
    sum = sum + (currentVal % 10);
    currentVal = Math.floor(currentVal / 10);
  }
  return sum;
}

console.log(sumOfdigit(digits));
