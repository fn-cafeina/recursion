function fibsRec(n, fibsV = [0, 1]) {
  if(n <= 2) {
    return fibsV;
  }

  let a = fibsV[fibsV.length - 1];
  let b = fibsV[fibsV.length - 2];

  fibsV.push(a + b);

  return fibsRec(n - 1, fibsV);
}

console.log(fibsRec(10));