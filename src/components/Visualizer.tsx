import { useState, useEffect } from "react";

// import { useCounterStore } from "../store.ts";

import { getBubbleSortAnim } from "../utils/bubbleSort.ts";

import { randomArray } from "../utils/utils.ts";

const Visualizer = () => {
	const [array, setArray] = useState<number[]>([]);
	const [animSteps, setAnimSteps] = useState<number[][]>([]);
  
	useEffect(() => {
    const randArr = randomArray(100);
    setArray(randArr);
  }, [])

	function doBubbleSort() {
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
        }, 2)
      }, index * 2)
    })
  }

  return (
    <div>
			<div className="flex justify-center items-end w-5/6 absolute m-auto top-1/2 left-1/2 -translate-1/2">
        {array?.map((num, index: number) => (
          <div id={`${index}`} key={num} className="w-1 bg-gray-100 text-center " style={{height: `${num * 1.5}px`}}>
          </div>
        ))}
      </div>
			
			<div className="flex flex-col items-start gap-2">	
      	<button onClick={doBubbleSort} className="text-white">Bubble Sort</button>
        <button onClick={visualize} className="text-white">Visualize</button>
			</div>
		</div>
  )
}

export default Visualizer