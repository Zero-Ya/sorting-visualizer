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