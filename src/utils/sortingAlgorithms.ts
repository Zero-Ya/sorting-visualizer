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

export function getQuickSortAnim(array: number[]) : {
  quickArray: number[],
  quickAnim: number[][],
} {
  let quickArray = [...array];
  let quickAnim: number[][] = [];

  quickSort(quickArray, quickAnim, 0, quickArray.length - 1);

  return { quickArray, quickAnim };
}

function quickSort(array: number[], animArray: number[][], start: number, end: number) {
  if (start < end) {
    let pivot = partition(array, animArray, start, end);

    quickSort(array, animArray, start, pivot - 1);
    quickSort(array, animArray, pivot + 1, end);
  }
}

function partition (array: number[], animArray: number[][], start: number, end: number) {
  let temp;
  let pivot = array[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (array[j] <= pivot) {
      i++;

      animArray.push([i, j]);
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  animArray.push([i + 1, end]);
  temp = array[i + 1];
  array[i + 1] = array[end];
  array[end] = temp;

  return i + 1;
}

export function getMergeSortAnim(array: number[]) : {
  mergedArray: number[],
  mergedAnim: number[][]
} {

  let mergedArray: number[] = [...array];
  let mergedAnim: number[][] = [];

  const auxArray = array.slice();
  mergeSort(mergedArray, auxArray, mergedAnim, 0, array.length - 1);

  return { mergedArray, mergedAnim };
}

function mergeSort(arr: number[], aux: number[], animArr: number[][], start: number, end: number) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, aux, animArr, start, mid);
  mergeSort(arr, aux, animArr, mid + 1, end);
  merge(arr, aux, animArr, start, mid, end);
}

function merge(arr: number[], aux: number[], animArr: number[][], start: number, mid: number, end: number) {
  for (let k = start; k <= end; k++) {
    aux[k] = arr[k];
  }

  let i = start;
  let j = mid + 1;

  for (let k = start; k <= end; k++) {
    if (i > mid) {
      animArr.push([aux[j], k]);
      arr[k] = aux[j++];
    } else if (j > end) {
      animArr.push([aux[i], k]);
      arr[k] = aux[i++];
    } else if (aux[i] <= aux[j]) {
      animArr.push([aux[i], k]);
      arr[k] = aux[i++];
    } else {
      animArr.push([aux[j], k]);
      arr[k] = aux[j++];
    }
  }
}

export function getHeapSortAnim(array: number[]) : {
  heapArray: number[],
  heapAnim: number[][]
} {
  let heapArray: number[] = [...array];
  let heapAnim: number[][] = [];

  let n = heapArray.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heapArray, heapAnim, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    heapAnim.push([0, i]);
    let temp = heapArray[0];
    heapArray[0] = heapArray[i];
    heapArray[i] = temp;

    heapify(heapArray, heapAnim, i, 0);
  }

  return { heapArray, heapAnim };
}

function heapify(arr: number[], anim: number[][], n: number, i: number) {
  let largest = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    anim.push([i, largest]);
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, anim, n, largest);
  }
}