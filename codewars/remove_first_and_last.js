function array(string) {

  const parts = string.split(',');


  if (parts.length < 3) {
    return null;
  }
 
  parts.pop();
  parts.shift();

  const result = parts.join(' ');

  return result;
}
