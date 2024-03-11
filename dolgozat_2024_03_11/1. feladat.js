function getNumberFromString(str)
{
    return [...str].filter(a => isNaN(a) == false).join("")
}

console.log("----- 1. feladat -----");
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
