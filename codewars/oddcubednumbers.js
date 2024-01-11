const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 'a', 3, true];

function sumOfCubedOddNumbers(arr) {
    const isNumeric = (value) => typeof value === 'number' && !isNaN(value);
  
    const sum = arr.reduce((acc, num) => {
      if (isNumeric(num) && num % 2 !== 0) {
        return acc + Math.pow(num, 3);
      } else {
        return acc;
      }
    }, 0);
  
    return sum || undefined;
}

console.log(sumOfCubedOddNumbers(array1));
console.log(sumOfCubedOddNumbers(array2));