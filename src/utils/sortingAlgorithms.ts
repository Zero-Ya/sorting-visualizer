export function getBubbleSortAnim(array: number[]) : {
  bubbleArr: number[],
  bubbleAnim: number[][]
} {
  let swapped = true;
  let bubbleArr = [...array];
	let bubbleAnim = [];

  while (swapped) {
    swapped = false;
    for (let i = 0; i < bubbleArr.length - 1; i++) {
      if (bubbleArr[i] > bubbleArr[i + 1]) {
        let temp = bubbleArr[i];
        bubbleArr[i] = bubbleArr[i + 1];
        bubbleArr[i + 1] = temp;
        swapped = true;
        bubbleAnim.push([i, i + 1]);
      }
    }
  }
  return { bubbleArr, bubbleAnim };
}

export function getInsertionSortAnim(array: number[]) : {
  insertionArr: number[],
  insertionAnim: number[][]
} {
  let insertionArr = [...array];
	let insertionAnim = [];

  for (let i = 1; i <insertionArr.length; i++) {
      let numToInsert = insertionArr[i];
      let j = i - 1;
      while (j >= 0 && insertionArr[j] > numToInsert) {
          insertionAnim.push([j, j + 1]);
          insertionArr[j + 1] = insertionArr[j];
          j = j - 1;
      }
      insertionArr[j + 1] = numToInsert;
  }
  return { insertionArr, insertionAnim };
}