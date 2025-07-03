// Modules
import { useEffect } from "react";

// Utilities
import { randomArray } from "../utils/utils.ts";

// Store
import { useSettingStore } from "../store.ts";

const Visualizer = () => {
  const { array, setArray } = useSettingStore();
  
	useEffect(() => {
    const randArr = randomArray(400);
    setArray(randArr);
  }, [])

  return (
    <div>
			<div className="flex justify-center items-end w-5/6 m-auto">
        {array?.map((num, index: number) => (
          <div id={`${index}`} key={num} className="w-1 bg-gray-100 text-center " style={{height: `${num * 1.5}px`}}>
          </div>
        ))}
      </div>
		</div>
  )
}

export default Visualizer