function insertDash(num) {
    const arr = num.toString();

    let eredmeny = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const current = parseInt(arr[i]);
        const elozo = parseInt(arr[i - 1]);

        if (current % 2 === 1 && elozo % 2 === 1) {
            eredmeny += '-' + arr[i];
        } else {
            eredmeny += arr[i];
        }
    }

    return eredmeny;
}

console.log('\n3. feladat\n')
console.log(insertDash(454793), '4547-9-3')
console.log(insertDash(123456), '123456')
console.log(insertDash(1003567), '1003-567')
console.log(insertDash(13570), '1-3-5-70')
console.log(insertDash(0), '0')