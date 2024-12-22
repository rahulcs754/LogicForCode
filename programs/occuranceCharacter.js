// occurance of character

const words = "javascript";

function occuranceObj() {
  let newObj = {};
  for (let i = 0; i < words?.length; i++) {
    if (words[i] in newObj) {
      newObj[words[i]] = newObj[words[i]] + 1;
    } else {
      newObj[words[i]] = 1;
    }
  }
  return newObj;
}

console.log(occuranceObj(words));
