//function accept two array and match below condition
// 1. both array length match
// 2. first array value square available into second array like below
// arr1 : [1,2,3,4]
// arr2 : [1,4,9, 16]
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 4, 9, 16];
function matchArr(arr1, arr2) {
  if (arr1?.length !== arr2.length) {
    return false;
  }
  for (const i in arr1) {
    if (arr1[i] * arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(matchArr(arr1, arr2));
