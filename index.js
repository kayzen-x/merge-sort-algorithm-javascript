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

//To use this implementation, simply call the mergeSort function with an array of numbers as the argument:

const arr = [3, 2, 1, 5, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5]

/**This implementation first divides the input array into two halves recursively
    using slice method. It then merges the two halves back together by comparing
    the elements of each half and appending them in ascending order. The `merge`
    function is responsible for the actual merging, and the `mergeSort` function 
    handles the recursive splitting and merging. **/