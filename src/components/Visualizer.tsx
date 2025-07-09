// Modules
import { useEffect } from "react";

// Utilities
import { randomArray } from "../utils/utils.ts";

// Store
import { useSettingStore } from "../store.ts";

const Visualizer = () => {
  const { array, arrayRange, setArray } = useSettingStore();
  
	useEffect(() => {
    const randArr = randomArray(arrayRange);
    setArray(randArr);
  }, [])

  return (
    <div className="flex items-center h-full">
			<div className="flex justify-center items-end w-5/6 m-auto">
        {array?.map((num, index: number) => (
          <div id={`${index}`} key={index} className="w-1 bg-white text-center text-xs" style={{height: `${num * 1.5}px`}}>
            {/* {num} */}
          </div>
        ))}
      </div>
		</div>
  )
}

export default Visualizer