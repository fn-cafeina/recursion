// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists
//
// Sample:
//
// var l = [1,2,3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
//
// l = [[1,2],3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
//
// l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)); // 1 = 1
//
// l = [10,[[10],10],[10]]
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function sumSquares(array) {
  if(array.length === 0) return 0;

  const tmp = array.shift();

  let total = 0;

  if(Array.isArray(tmp)) {
    total = sumSquares(tmp);
  } else {
    total = tmp * tmp;
  }

  console.log(total);

  return total + sumSquares(array);
}

const l = [10, [[10], 10], [10]];

console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400