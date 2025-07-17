// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
//
// Sample:
//
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray(array, product = 1) {
  if(array.length === 0) return product;

  const temp = array.shift();

  product *= temp;

  return productOfArray(array, product);
}

const six = productOfArray([1, 2, 3]);
const sixty = productOfArray([1, 2, 3, 10]);

console.log(six);
console.log(sixty);