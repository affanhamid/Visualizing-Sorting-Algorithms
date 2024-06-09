const cocktailSortStep = (tempBars, j) => {
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
let forward = true;
let end = -1;
let start = 0;
let swapped;

const cocktailSort = (bars, algInterval) => {
  if (end === -1) end = bars.length - 1;
  let tempBars = bars.slice();

  const cSortResult = cocktailSortStep(tempBars, i);
  swapped = swapped ? true : cSortResult;

  if (forward) {
    i += 1;
  } else {
    i -= 1;
  }

  if ((i >= end - 1) & forward) {
    forward = false;
    i = end - 1;
    end -= 1;
  } else if ((i <= start - 1) & !forward) {
    forward = true;
    i = start + 1;
    start += 1;
  }

  if (start >= end) {
    clearInterval(algInterval);
    i = 0;
    forward = true;
    end = -1;
    start = 0;
    swapped = false;
    return true;
  }

  return false;
};

export default cocktailSort;
