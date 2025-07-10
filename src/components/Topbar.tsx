// Modules
import { useState } from "react";

// Utilities
import { getBubbleSortAnim, getInsertionSortAnim, getQuickSortAnim } from "../utils/sortingAlgorithms.ts";
import { randomArray, sortArray, sortAnim } from "../utils/utils.ts";

// Store
import { useSettingStore } from "../store.ts";

// Components
import Slider from "./Slider.tsx";

const Topbar = () => {
  const { algorithm, array, arrayRange, setArray, setSortAlgo, delay, setDelay, setArrayRange } = useSettingStore();
  const [isSorting, setIsSorting] = useState<boolean>(false);

  function visualize() {
    let array1 = array.slice();
    let array2 = sortArray(array.slice());

    // Check if array is already sorted and visualized so that the function can't be called again
    if (array1.toString() === array2.toString()) return;

    switch(algorithm) {
      case "bubble sort":
        const { bubbleArray, bubbleAnim } = getBubbleSortAnim(array);
        sortAnim(bubbleArray, bubbleAnim, setIsSorting);
        break;
      case "insertion sort":
        const { insertionArray, insertionAnim } = getInsertionSortAnim(array);
        sortAnim(insertionArray, insertionAnim, setIsSorting);
        break;
      case "quick sort":
        const { quickArray, quickAnim } = getQuickSortAnim(array);
        sortAnim(quickArray, quickAnim, setIsSorting);
    }
  }

  function randomize() {
    const randArr = randomArray(arrayRange);
    setArray(randArr);
  }

  function debug() {
    console.log(isSorting);
  }

  return (
    <div className="w-full p-4 text-black bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className={`${algorithm === 'bubble sort' && 'text-blue-600'} hover:text-blue-600`} onClick={() => setSortAlgo('bubble sort')}>Bubble Sort</button>
          <button className={`${algorithm === 'insertion sort' && 'text-blue-600'} hover:text-blue-600`} onClick={() => setSortAlgo('insertion sort')}>Insertion Sort</button>
          <button className={`${algorithm === 'quick sort' && 'text-blue-600'} hover:text-blue-600`} onClick={() => setSortAlgo('quick sort')}>Quick Sort</button>
        </div>

        <div className="flex gap-4">
          <button className="hover:text-blue-600" disabled={isSorting} onClick={randomize}>Randomize</button>
          <button className="hover:text-blue-600" disabled={isSorting} onClick={visualize}>Visualize</button>
          <button className="hover:text-blue-600" onClick={debug}>Debug</button>
        </div>

        <div>
          <Slider labelData="Length" data={arrayRange} setData={setArrayRange} isSorting={isSorting} />
          <Slider labelData="Delay" data={delay} setData={setDelay} isSorting={isSorting} />
        </div>
      </div>
    </div>
  )
}

export default Topbar