let i = 0;
let j = 1;
let min_idx = i;

const selectionSort = (tempBars, algInterval) => {
  if (j === tempBars.length) {
    [tempBars[i].num, tempBars[min_idx].num] = [
      tempBars[min_idx].num,
      tempBars[i].num,
    ];
    i++;
    j = i;
    min_idx = i;
  }

  if (i >= tempBars.length - 1) {
    clearInterval(algInterval);
    i = 0;
    j = 1;
    min_idx = i;
    return true;
  }

  if (tempBars[j].num < tempBars[min_idx].num) {
    min_idx = j;
  }

  j++;
  return false;
};

export default selectionSort;
