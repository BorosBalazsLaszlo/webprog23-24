function dnaStrand(dna){
    const elemek = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

    let result = '';

    for (let char of dna)
    {
        result += elemek[char];
    }

    return result;
}

console.log('\n2. feladat:')
console.log(dnaStrand("AAAA"))
console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))
console.log(dnaStrand("TAGACAT"))
console.log(dnaStrand(""))
