function minSum(arr) {
  
  arr.sort((a, b) => a - b);
  
  let sum = 0;
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    sum += arr[i] * arr[n - 1 - i];
  }
  
  return sum;
}
