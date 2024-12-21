// Count Maximum Consecutive One's in the array
// input  : [ 1,1,0,1,1,1,0,1,0,1]
// checknumber = 1;
const inputArr = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1];
const checknumber = 1;

const maxConCount = (arr, select) => {
  let maxCount = 0;
  let count = 0;
  for (let element of arr) {
    if (element === select) {
      count = count + 1;
      count > maxCount && (maxCount = count);
    } else {
      count = 0;
    }
  }
  return maxCount;
};

//console.log(maxConCount(inputArr, checknumber));
