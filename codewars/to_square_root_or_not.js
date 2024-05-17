function squareOrSquareRoot(array) {
  return array.map(num => {

    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
      return sqrt;
    } else {
      return num * num;
    }
  });
}
