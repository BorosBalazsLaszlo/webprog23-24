function repeats(arr) {
  // Create a frequency map to count occurrences of each number
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  // Find the numbers that occur only once and sum them up
  let sum = 0;
  for (const num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      sum += parseInt(num);
    }
  }

  return sum;
}

// Test cases
console.log(repeats([4, 5, 7, 5, 4, 8])); // 15
console.log(repeats([1, 2, 3, 2, 1, 4])); // 7
console.log(repeats([10, 20, 30, 20, 10, 40])); // 70
console.log(repeats([6, 1, 9, 1, 9, 6])); // 0
console.log(repeats([1, 3, 2, 3, 2, 5, 6])); // 12
