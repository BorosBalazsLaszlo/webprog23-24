function deEmojify(emojiString) {
  if (emojiString === '') {
    return '';
  }

  const emotes = {
    ':)': '0', ':D': '1', '>(': '2', '>:C': '3', ':/': '4', ':|': '5', ':O': '6', ';)': '7', '^.^': '8', ':(': '9'
  };

  const chains = emojiString.split('  ');
  let result = '';

  for (let chain of chains) {
    const digits = chain.split(' ').map(emote => emotes[emote]);
    result += String.fromCharCode(parseInt(digits.join('')));
  }

  return result;
}
