// Utilities
import { getBubbleSortAnim, insertionSort } from "../utils/sortingAlgorithms.ts";

// Store
import { useSettingStore } from "../store.ts";

const Topbar = () => {
  const { array, animSteps, setAnimSteps } = useSettingStore();

  function doSort() {
    const { arr, anim } = getBubbleSortAnim(array);
		setAnimSteps(anim);
  }

  function visualize() {
    animSteps.forEach(([first, second], index) => {
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
        }, 1)
      }, index * 1)
    })
  }

  return (
    <div className="w-full p-4 text-black bg-white">
      <div className="flex flex-col items-start">
        <div className="flex gap-4">
          <button onClick={doSort}>Bubble Sort</button>
          <button>Insertion Sort</button>
        </div>
        <button onClick={visualize}>Visualize</button>
      </div>
    </div>
  )
}

export default Topbar