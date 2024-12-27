const data = [
  { id: 3, name: "Alice", age: 25 },
  { id: 1, name: "Bob", age: 30 },
  { id: 2, name: "Charlie", age: 20 },
];

const SortByKey = (arr, keyData) => {
  const defaultKey = keyData ?? Object.keys(arr[0])[0];
  console.log(defaultKey);
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][defaultKey] < arr[j][defaultKey]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(SortByKey(data, "age"));
