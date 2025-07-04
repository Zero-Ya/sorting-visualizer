// Utilities
import { getBubbleSortAnim, getInsertionSortAnim } from "../utils/sortingAlgorithms.ts";
import { sortAnim } from "../utils/utils.ts";

// Store
import { useSettingStore } from "../store.ts";

const Topbar = () => {
  const { algorithm, array, setBubbleSort, setInsertionSort } = useSettingStore();

  function visualize() {
    switch(algorithm) {
      case "bubble sort":
        const { bubbleArr, bubbleAnim } = getBubbleSortAnim(array);
        sortAnim(bubbleAnim);
        break;
      case "insertion sort":
        const { insertionArr, insertionAnim } = getInsertionSortAnim(array);
        sortAnim(insertionAnim);
        break;
    }
  }

  return (
    <div className="w-full p-4 text-black bg-white">
      <div className="flex flex-col items-start">
        <div className="flex gap-4">
          <button onClick={setBubbleSort}>Bubble Sort</button>
          <button onClick={setInsertionSort}>Insertion Sort</button>
        </div>
        <button onClick={visualize}>Visualize</button>
      </div>
    </div>
  )
}

export default Topbar