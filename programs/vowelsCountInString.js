// Write a function to count the number of vowels in a string.
let text = "rahulau";
const countVowel = (textdata) => {
  let vowelList = ["a", "u", "e", "o", "i"];
  let count = 0;
  for (let index = 0; index < textdata.length; index++) {
    console.log(textdata[index]);
    // if (vowelList?.includes(textdata[index])) {
    //   count = count + 1;
    // }
  }
  return count;
};

console.log(countVowel(text));
