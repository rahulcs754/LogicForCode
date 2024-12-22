// Create a function to find the second-largest number in an array.
let first = "elbow";
let second = "belwo";

function sortArr(str) {
  let temp;
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[i].toLowerCase() > strArr[j].toLowerCase()) {
        temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
      }
    }
  }
  return strArr.join("");
}

function anagram(first, second) {
  if (first?.length !== second?.length) return false;

  if (sortArr(first) !== sortArr(second)) return false;
  return true;
}

console.log(anagram(first, second));
