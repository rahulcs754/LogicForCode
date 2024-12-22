// write a program to return max value form nested array
//[[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

let arr = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];
//do flat
let resultFlatArr = [];
function flatArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultFlatArr = flatArr(arr[i]);
    } else {
      resultFlatArr.push(arr[i]);
    }
  }
  return resultFlatArr;
}

// sort array

const sortArr = (arr) => {
  let temp;
  let newArr = arr;
  for (let i = 0; i < newArr?.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] < newArr[j + 1]) {
        // less apply it will how max from start
        // if greater than it will show small first
        temp = newArr[j + 1];
        newArr[j + 1] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr[0];
};
const flatData = flatArr(arr);

const flatDatar = [...flatData];

console.log(sortArr(flatDatar));
