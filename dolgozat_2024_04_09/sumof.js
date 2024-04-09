function sumOfArraySingles(arr) {
    let egyesek = new Set();
    let kettesek = new Set();
    
    for (let num of arr) {
        if (!kettesek.has(num)) {
            if (egyesek.has(num)) {
                egyesek.delete(num);
                kettesek.add(num);
            } else {
                egyesek.add(num);
            }
        }
    }
    
    let ossz = 0;
    for (let num of egyesek) {
        ossz += num;
    }
    
    return ossz;
}

console.log('1. feladat\n')
console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15)
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19)
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24)
