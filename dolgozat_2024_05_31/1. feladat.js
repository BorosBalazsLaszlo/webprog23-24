function removeFirstAndLast(string)
{
    const resz = string.split(',');

    if (resz.length < 3)
    {
        return null
    }

    resz.pop();
    resz.shift();

    const eredmeny = resz.join(' ')

    return eredmeny;
}

console.log('1. feladat:')
console.log(removeFirstAndLast(''))
console.log(removeFirstAndLast('1'))
console.log(removeFirstAndLast('A1,B2'))
console.log(removeFirstAndLast('1,2,3'))
console.log(removeFirstAndLast('1,2,3,4'))
console.log(removeFirstAndLast('A1,B2,C3,D4,E5'))
console.log(removeFirstAndLast('A,1,23,456,78,9,Z'))
