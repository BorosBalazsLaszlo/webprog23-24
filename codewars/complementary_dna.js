function dnaStrand(dna) {
  const complements = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  let result = '';

  for (let char of dna) {
    result += complements[char];
  }

  return result;
}
