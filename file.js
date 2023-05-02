
/**Here's an implementation of the Merge Sort algorithm in
JavaScript that generates a random list of 1000 integers 
between 1 - 10000 and then sorts it using Merge Sort: **/

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
}
 
  
function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
  
// Generate a random list of 1000 integers between 1 - 10000
const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 10000) + 1);
}

// Sort the list using Merge Sort
const sortedArr = mergeSort(arr);

// Print the sorted list
console.log(sortedArr);
  