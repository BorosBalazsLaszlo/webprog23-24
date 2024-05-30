function findDeletedNumber(arr, mixArr) {
  const sumArr = arr.reduce((acc, num) => acc + num, 0);
  const sumMixArr = mixArr.reduce((acc, num) => acc + num, 0);
  
  return sumArr - sumMixArr;
}
