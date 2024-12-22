// write program to show objectunderObject {a.b.c:'text'}
// {a:{b:{c:'text'}}}

function makeobj(strd, text) {
  let newObj = {};
  let current = newObj;
  let newArr = strd.split(".");
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[newArr?.length - 1] == newArr[index]) {
      current[newArr[index]] = text;
    } else {
      current[newArr[index]] = {};
      current = current[newArr[index]];
    }
  }
  return newObj;
}

console.log(makeobj("a.b.c", "rahul"));
