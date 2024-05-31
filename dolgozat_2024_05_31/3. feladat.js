function deEmojify(emojiString) {
    if (emojiString === '') {
      return '';
    }
  
    const moji = {
      ':)': '0', ':D': '1', '>(': '2', '>:C': '3', ':/': '4', ':|': '5', ':O': '6', ';)': '7', '^.^': '8', ':(': '9'
    };
  
    const sorok = emojiString.split('  ');
    let final = '';
  
    for (let sor of sorok) {
      const digits = sor.split(' ').map(emoji => moji[emoji]);
      final += String.fromCharCode(parseInt(digits.join('')));
    }
  
    return final;
}


console.log('\n3. feladat:')
console.log(deEmojify(":D :) :/  :D :) :|"))
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"))
console.log(deEmojify(":)"))
console.log(deEmojify(""))
