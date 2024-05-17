function repeats(arr) {
  const frequencyMap = {};

  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let sum = 0;
  for (const num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      sum += parseInt(num);
    }
  }

  return sum;
}

