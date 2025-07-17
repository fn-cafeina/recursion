// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns
// true if every value in the array returns true when passed as parameter to the callback function
//
// Sample:
//
// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });
//
// console.log(allAreLessThanSeven); // false

function all(array, callback) {
  if(array.length === 0) {
    return true;
  } else {
    const temp = array.pop();

    if(callback(temp)) {
      return all(array, callback);
    } else {
      return false;
    }
  }
}

const allAreLessThanSeven = all([1, 2, 9], function(num){
  return num < 7;
});

console.log(allAreLessThanSeven); // false