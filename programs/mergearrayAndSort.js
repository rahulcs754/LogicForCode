// Given two array and merge and sort both array

const arr1 = [1, 56, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function mergeAndSort(arr1, arr2) {
  let newArr = [];

  for (let val1 of arr1) {
    newArr.push(val1);
  }
  for (let val2 of arr2) {
    newArr.push(val2);
  }

  let temp;
  for (let i = 0; i < newArr?.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] > newArr[j + 1]) {
        temp = newArr[j + 1];
        newArr[j + 1] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return newArr;
}
console.log(mergeAndSort(arr1, arr2));
