// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array
//
// Sample:
//
// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(array) {
  if(array.length === 0) return 0;

  const tmp = array.shift();

  let total = 0;

  if(Array.isArray(tmp)) {
    total += totalIntegers(tmp);
  } else {
    if(Number.isInteger(tmp)) {
      total++;
    }
  }

  return total + totalIntegers(array);
}

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

console.log(seven);