const mergeSort = (bars) => {
  if (bars.length === 1) return bars;
  const middleIdx = Math.floor(bars.length / 2);
  const firstHalf = mergeSort(bars.slice(0, middleIdx));
  const secondHalf = mergeSort(bars.slice(middleIdx));

  const sortedArray = [];
  let i = 0,
    j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArray.push(secondHalf[j++]);
    }
  }

  while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);

  return sortedArray;
};

const test_arr = [12, 34, 32, 65, 0, 234, 1];
console.log(test_arr);

const sortedArray = mergeSort(test_arr);

console.log(sortedArray);
