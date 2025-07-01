import { useState, useEffect, useRef } from "react";

import { useCounterStore } from "../store.ts";

import { randomInts, randomArray, bubbleSort } from "../utils.ts";

const BubbleSort = () => {
	const [array, setArray] = useState<number[]>([]);
	const [arraySteps, setArraySteps] = useState<number[][]>([]);

  const { count, increment } = useCounterStore();

  const intervalRef = useRef<number>(0);
  
	useEffect(() => {
		// for (let i = 0; i < 400; i++) {
      // const rand = randomInts(100)
      // console.log(rand)
      // setArray(a => [...a, rand])
    // }

    const randArr = randomArray(400);
    setArray(randArr);
  }, [])

	function doBubbleSort() {
    let swapped = true;
    let arr = [...array];

		let arrSteps = [];

    while (swapped) {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      arrSteps.push(arr.slice());
    }
		setArraySteps(arrSteps);
  }

  function visualize() {
    const intervalId = setInterval(() => {
      increment();
    }, 10)

    intervalRef.current = intervalId;
  }

	useEffect(() => {
    if (arraySteps.length === 0) return;
    if (count >= arraySteps.length - 1) clearInterval(intervalRef.current);

    setArray(arraySteps[count]);
	}, [count])


  return (
    <div>
			<div className="flex justify-center items-end w-5/6 absolute m-auto top-1/2 left-1/2 -translate-1/2">
        {array?.map((num, index: number) => (
          // <Bar key={index} index={index} />
          <div key={num} className="w-1 bg-gray-100 text-center " style={{height: `${num * 1.5}px`}}>
          </div>
        ))}
      </div>
			
			<div className="flex flex-col items-start gap-2">	
      	<button onClick={doBubbleSort} className="text-white">Bubble Sort</button>
        <button onClick={visualize} className="text-white">Visualize</button>
        <div className="text-white">{count}</div>
			</div>
		</div>
  )
}

export default BubbleSort