import { useSettingStore } from "../store.ts";

export function randomInts(range: number): number {
  return Math.floor(Math.random() * range) + 1;
}

export function randomArray(range: number): number[] {
  // Generate the array
  let arr = [];
  for (let i = 1; i < range + 1; i++) {
    arr.push(i)
  }

  // Randomize the array
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k: number = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }

  return arr;
}

export function sortArray(arr: number[]) {
  arr.sort((a, b) => a - b);
  return arr;
}

// // Visualize the sorting animation
export function sortAnim
(
  arr: number[],
  arrAnim: number[][],
  setSort: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const delay = useSettingStore.getState().delay;
  const setArray = useSettingStore.getState().setArray;

  arrAnim.forEach(([first, second], index) => {
    setSort(true);

    const div1 = document.getElementById(`${first}`);
    const div2 = document.getElementById(`${second}`);
    if (!div1 || !div2) return;   

    setTimeout(() => {
      div1.style.backgroundColor = 'red';
      div2.style.backgroundColor = 'red'; 

      const divHeight = div1.style.height;
      div1.style.height = div2.style.height;
      div2.style.height = divHeight;  

      setTimeout(() => {
        div1.style.backgroundColor = 'white';
        div2.style.backgroundColor = 'white';

        if (index === arrAnim.length - 1) {
          setSort(false);
          setArray(arr);
        }
      }, delay)
    }, index * delay)
  })
}

// Sorting visualizer but for merge sort
export function sortMergeAnim(
  arr: number[],
  arrAnim: number[][],
  setSort: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const delay = useSettingStore.getState().delay;
  const arrayRange = useSettingStore.getState().arrayRange;
  const setArray = useSettingStore.getState().setArray;

  arrAnim.forEach(([newHeight, arrIdx], index) => {
    setSort(true);

    const div = document.getElementById(`${arrIdx}`);
    if (!div) return;

    setTimeout(() => {
      div.style.backgroundColor = 'red';
      div.style.height = `${newHeight / arrayRange * 100}%`;

      setTimeout(() => {
        div.style.backgroundColor = 'white';
        if (index === arrAnim.length - 1) {
          setSort(false);
          setArray(arr);
        }
      }, delay)
    }, index * delay)
  })
}