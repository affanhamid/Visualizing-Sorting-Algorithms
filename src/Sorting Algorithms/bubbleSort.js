const bubbleSortStep = (tempBars, j) => {
  if (tempBars[j].num > tempBars[j + 1].num) {
    [tempBars[j + 1].num, tempBars[j].num] = [
      tempBars[j].num,
      tempBars[j + 1].num,
    ];

    return true;
  }
  return false;
};

let i = 0;
let j = 0;
let swapped = false;

const bubbleSort = (bars, algInterval) => {
  swapped = false;
  let tempBars = bars.slice();

  const bubSortResult = bubbleSortStep(tempBars, j);
  swapped = swapped ? true : bubSortResult;

  j += 1;
  if (j >= bars.length - i - 1) {
    if (!swapped) clearInterval(algInterval);
    i += 1;
    j = 0;
  }
};

export default bubbleSort;
