// find max count of consecutive in array
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

// check duplicate data  from array

function dulicateValueRemove(arr) {
  let uniqueArr = [];
  for (let element of arr) {
    let flag = false;

    for (const element1 of uniqueArr) {
      if (element === element1) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}

//console.log(dulicateValueRemove([2, 4, 5, 3, 2, 2, 3, 4]));

// Palindrom : Program
function checkPalindro(oldStr) {
  let revStr = "";
  for (let character in oldStr) {
    revStr = revStr + oldStr[oldStr?.length - character - 1];
  }
  if (oldStr === revStr) {
    return true;
  }
  return false;
}

const checkStr = "rahul";
//console.log(checkPalindro(checkStr));
