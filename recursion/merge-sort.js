function merge(left, right) {
  const mergedArray = [];

  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      mergedArray.push(left[i++]);
    } else {
      mergedArray.push(right[j++]);
    }
  }

  return mergedArray.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }

  const mid = Math.ceil(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

const array = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(array));