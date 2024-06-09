const mergeInPlace = (arr, start, mid, end) => {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    // If element 1 is in the right place
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;

      // Shift all the elements between element 1 and element 2 right by 1
      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;

      // Update all the pointers
      start++;
      mid++;
      start2++;
    }
  }
};

const mergeSort = (arr) => {
  let n = arr.length;

  // For current size of subarrays to be merged curr_size varies from 1 to n/2
  for (let curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    // Pick starting point of different subarrays of current size
    for (let left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      // Find ending point of left subarray. mid+1 is starting point of right
      let mid = Math.min(left_start + curr_size - 1, n - 1);

      let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      // Merge subarrays arr[left_start...mid] & arr[mid+1...right_end]
      mergeInPlace(arr, left_start, mid, right_end);
    }
  }
  return arr;
};

export default mergeSort;
