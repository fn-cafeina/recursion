// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.
//
// Sample:
//
// var nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             something: 'foo2'
//           }
//         }
//       }
//     }
//   }
// }
//
// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(nestedObj, searchValue) {
  if(typeof nestedObj !== "object" || nestedObj === null) {
    return nestedObj === searchValue;
  } else {
    for (const moreNestedObj in nestedObj) {
      if(contains(nestedObj[moreNestedObj], searchValue)) {
        return true;
      }
    }
  }

  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2"
          }
        }
      }
    }
  }
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);