function sliding(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
