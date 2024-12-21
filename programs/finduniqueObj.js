// find unique object
//I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//O/P: [{name: "sai"},{name:"Nang"},{name: "111111"}
const arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

const uniqueObj = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;

    newArr.forEach((item) => {
      if (item.name == arr[i].name) {
        flag = true;
      }
    });

    if (!flag) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(uniqueObj(arr));
