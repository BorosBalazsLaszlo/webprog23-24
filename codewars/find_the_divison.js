function divisors(integer) {
  let divisorList = [];
  
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisorList.push(i);
    }
  }
  
  if (divisorList.length === 0) {
    return `${integer} is prime`;
  }
  
  return divisorList;
}

