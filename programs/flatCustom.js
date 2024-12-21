// write program to flat array in javascript
const arr = [1, 2, [3, 4]];

function customFlat(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(customFlat(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(customFlat(arr));
