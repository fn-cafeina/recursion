function fibs(n) {
  const fibsV = [0, 1];

  let a = fibsV[0];
  let b = fibsV[1];

  for(let i = 0; i < (n - 2); i++) {
    let tmp = a + b;

    a = b;
    b = tmp;

    fibsV.push(tmp);
  }

  return fibsV;
}

console.log(fibs(10));