// str sorting using forloop

const str = "rahul";

function sortStr(str) {
  let makeArr = [],
    finalStr = "",
    temp = "";
  // make string to array
  for (let index = 0; index < str.length; index++) {
    makeArr.push(str[index]);
  }

  // make array to sort

  for (let j = 0; j < makeArr.length - 1; j++) {
    if (makeArr[j] > makeArr[j + 1]) {
      temp = makeArr[j + 1];
      makeArr[j + 1] = makeArr[j];
      makeArr[j] = temp;
    }
  }

  //convert array to string
  for (let k = 0; k < makeArr.length; k++) {
    finalStr = finalStr + makeArr[k];
  }

  return finalStr;
}
console.log(sortStr(str));
