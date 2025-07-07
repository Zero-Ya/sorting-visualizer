// Modules
import { useState } from "react";

// Utilities
import { getBubbleSortAnim, getInsertionSortAnim } from "../utils/sortingAlgorithms.ts";
import { randomArray, sortArray } from "../utils/utils.ts";

// Store
import { useSettingStore } from "../store.ts";

const Topbar = () => {
  const { algorithm, array, arrayRange, setArray, setBubbleSort, setInsertionSort } = useSettingStore();
  const [isSorting, setIsSorting] = useState<boolean>(false);

  function visualize() {
    let array1 = array.slice();
    let array2 = sortArray(array.slice());

    // Check if array is already sorted and visualized so that the function can't be called again
    if (array1.toString() === array2.toString()) return;

    switch(algorithm) {
      case "bubble sort":
        const { bubbleArray, bubbleAnim } = getBubbleSortAnim(array);
        sortAnim(bubbleArray, bubbleAnim);
        break;
      case "insertion sort":
        const { insertionArray, insertionAnim } = getInsertionSortAnim(array);
        sortAnim(insertionArray, insertionAnim);
        break;
    }
  }

  function randomize() {
    const randArr = randomArray(arrayRange);
    setArray(randArr);
  }

  // Visualize the sorting animation
  function sortAnim(arr: number[], arrAnim: number[][]) {
    setIsSorting(true);

    arrAnim.forEach(([first, second], index) => {
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
                  setIsSorting(false);
                  setArray(arr);
                }
              }, 1)
        }, index * 1)
    })
  }

  function debug() {
    console.log(isSorting);
  }

  return (
    <div className="w-full p-4 text-black bg-white">
      <div className="flex flex-col items-start">
        <div className="flex gap-4">
          <button className={`${algorithm === 'bubble sort' && 'text-blue-600'} hover:text-blue-600`} onClick={setBubbleSort}>Bubble Sort</button>
          <button className={`${algorithm === 'insertion sort' && 'text-blue-600'} hover:text-blue-600`} onClick={setInsertionSort}>Insertion Sort</button>
        </div>

        <div className="flex gap-4">
          <button className="hover:text-blue-600" disabled={isSorting} onClick={randomize}>Randomize</button>
          <button className="hover:text-blue-600" disabled={isSorting} onClick={visualize}>Visualize</button>
          <button className="hover:text-blue-600" onClick={debug}>Debug</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar