export function getBubbleSortAnim(array: number[]) : {
  bubbleArray: number[],
  bubbleAnim: number[][],
} {
  let swapped = true;
  let bubbleArray = [...array];
	let bubbleAnim = [];

  while (swapped) {
    swapped = false;
    for (let i = 0; i < bubbleArray.length - 1; i++) {
      if (bubbleArray[i] > bubbleArray[i + 1]) {
        let temp = bubbleArray[i];
        bubbleArray[i] = bubbleArray[i + 1];
        bubbleArray[i + 1] = temp;
        swapped = true;
        bubbleAnim.push([i, i + 1]);
      }
    }
  }
  return { bubbleArray, bubbleAnim };
}

export function getInsertionSortAnim(array: number[]) : {
  insertionArray: number[],
  insertionAnim: number[][],
} {
  let insertionArray = [...array];
	let insertionAnim = [];

  for (let i = 1; i < insertionArray.length; i++) {
      let numToInsert = insertionArray[i];
      let j = i - 1;
      while (j >= 0 && insertionArray[j] > numToInsert) {
          insertionAnim.push([j, j + 1]);
          insertionArray[j + 1] = insertionArray[j];
          j = j - 1;
      }
      insertionArray[j + 1] = numToInsert;
  }
  return { insertionArray, insertionAnim };
}

export function quickSort(array: number[]): number[] {
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}