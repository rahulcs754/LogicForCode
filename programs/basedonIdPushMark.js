const arr = [
  { id: 3, mark: 45 },
  { id: 4, mark: 56 },
  { id: 6, mark: 56 },
];

function test(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    const { id, mark } = arr[i];
    const exits = result.find((item) => item.mark === mark);
    if (exits) {
      if (Array.isArray(exits.id)) {
        exits.id.push(exits.id);
      } else {
        exits.id = [exits.id, id];
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(test(arr));
