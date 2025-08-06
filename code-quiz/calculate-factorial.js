// Question 3: Calculate factorial
// Write a function that returns the factorial of a number.
// As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it,
// and the number before that number, and so on, until you reach 1.
// The factorial of 1 is just 1.
//
// Sample:
//
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));