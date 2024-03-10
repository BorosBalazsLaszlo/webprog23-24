function oddOnesOut(nums) {
  
  const results = {};
  nums.forEach(num =>{
    if (results[num]){
      results[num]++
    }
    else {
      results[num] = 1
    }
  });
  
  return nums.filter(el => results[el] % 2 === 0)
}
