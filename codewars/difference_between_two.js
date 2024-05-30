function diff(a, b) {
  const countA = {};
  const countB = {};
  const result = [];


  for (let char of a) {
    countA[char] = (countA[char] || 0) + 1;
  }


  for (let char of b) {
    countB[char] = (countB[char] || 0) + 1;
  }


  for (let char in countA) {
    if (!countB[char]) {
      result.push(char);
    }
  }

  for (let char in countB) {
    if (!countA[char]) {
      result.push(char);
    }
  }


  return result.sort();
}
