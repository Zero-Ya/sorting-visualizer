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
  }, [arrayRange])

  return (
    <div className="flex items-center h-full p-4">
			<div className="flex justify-center items-end w-5/6 m-auto h-full">
        {array?.map((num, index: number) => (
          <div id={`${index}`} key={index} className="w-full bg-white text-center text-xs" style={{height: `${num / arrayRange * 100}%`}}>
            {/* {num} */}
          </div>
        ))}
      </div>
		</div>
  )
}

export default Visualizer