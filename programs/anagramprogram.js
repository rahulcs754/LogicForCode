//Anagram program

//String 1: The first string to compare (e.g., "listen").
//String 2: The second string to compare (e.g., "silent").
//Output:"elbow" and "below"

let firstStr = "listen";
let secondStr = "silent";

const strSort = (str) => {
  return str.split("").sort().join("");
};

function isAnagram(firstStr, secondStr) {
  if (firstStr?.length !== secondStr?.length) {
    return false;
  }

  if (strSort(firstStr) !== strSort(secondStr)) {
    return false;
  }

  return true;
}

console.log(isAnagram(firstStr, secondStr));
