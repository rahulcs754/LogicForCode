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
