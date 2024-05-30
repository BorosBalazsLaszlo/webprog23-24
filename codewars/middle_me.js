function middleMe(N, X, Y){
  if (N % 2 !== 0) return X;
  return Y.repeat(Math.floor(N / 2)) + X + Y.repeat(Math.floor(N / 2));
}
