function sortArraysIgnoringCase ( words ) {
    return words.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};

console.log('\n2. feladat\n')
console.log(sortArraysIgnoringCase(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortArraysIgnoringCase(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortArraysIgnoringCase(["CodeWars"]), ["CodeWars"])
console.log(sortArraysIgnoringCase([]), [])