export function getBubbleSortAnim(array: number[]) {
  let swapped = true;
  let arr = [...array];

	let anim = [];

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        anim.push([i, i + 1]);
      }
    }
  }
  return { arr, anim };
}

export function insertionSort(array: number[]) {
    for (let i = 1; i <array.length; i++) {
        let numToInsert = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > numToInsert) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = numToInsert;
    }
}