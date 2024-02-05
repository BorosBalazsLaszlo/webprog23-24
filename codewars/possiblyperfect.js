function possiblyPerfect(key, answers) {
  let allCorrect = true;
  let allIncorrect = true;

  for (let i = 0; i < key.length; i++) {
    if (key[i] !== '_') {
      if (key[i] !== answers[i]) {
        allCorrect = false;
      } else {
        allIncorrect = false;
      }
    }
  }

  return allCorrect || allIncorrect;
}
