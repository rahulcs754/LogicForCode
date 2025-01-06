//Defination: Array.prototype is a powerful object that provides arrays with
// built-in methods for manipulation, iteration, and more

// map polyfill
Array.prototype.mymap = function (callback) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i]));
  }
  return temp;
};

const arr = [2, 3, 4, 5];
const result = arr.mymap((num) => {
  return num * 5;
});
console.log(result);

// Filter
Array.prototype.myfilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) && temp.push(this[i]);
  }
  return temp;
};

const arr = [2, 3, 4, 5];
const result = arr.myfilter((num) => {
  return num < 4;
});
console.log(result);

// reducer
Array.prototype.myreducer = function (cb, acc) {
  let temp = acc; // 2  5  9  14
  for (let i = 0; i < this.length; i++) {
    temp = temp ? cb(temp, this[i]) : this[i]; // 0 + 2 , 2+ 3 , 5+4,  9+5
  }
  return temp;
};

const arr = [7, 2, 3, 4, 5];

const myres = arr.myreducer((acc, curr) => {
  curr;
  return (acc = acc + curr);
});

console.log(myres);
