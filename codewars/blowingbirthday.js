function blowCandles(str) {
  let candles = str.split('').map(Number);  
  let moves = 0;

  while (candles.some(candle => candle > 0)) {  
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] > 0) {
        for (let j = 0; j < 3 && i + j < candles.length; j++) {
          if (candles[i + j] > 0) {
            candles[i + j]--;
          }
        }
        moves++;
        break; 
      }
    }
  }
  
  return moves;
}

