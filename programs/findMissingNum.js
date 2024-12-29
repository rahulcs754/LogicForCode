function missing(num1) {
  if (arr.length === 0) return 1; // If the array is empty, missing number is 1

  arr.sort((a, b) => a - b); // Sort the array in ascending order
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1; // Return the missing number
    }
  }

  return arr.length + 1; // If no number is missing, the missing number is N + 1
}

function testFindMissingNumber() {
  const testCases = [
    { input: [1, 2, 4, 5, 6], expected: 3 },
    { input: [2, 3, 4, 5], expected: 1 },
    { input: [1, 2, 3, 4], expected: 5 },
    { input: [1], expected: 2 },
    { input: [1, 3, 4, 5, 6, 7, 8, 9, 10], expected: 2 },
    { input: [], expected: 1 },
    { input: [5, 3, 1, 2], expected: 4 },
    { input: [1, 2, 3, 4, 5], expected: 6 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = missing(input);
    console.log(
      `Test Case ${index + 1}:`,
      result === expected
        ? "Passed"
        : `Failed (Expected: ${expected}, Got: ${result})`
    );
  });
}

testFindMissingNumber();
