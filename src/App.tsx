import { useEffect, useState } from "react"
import { randomInts } from "./utils/randomInts.ts"

const App = () => {
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      const rand = randomInts(100)
      console.log(rand)
      setArray(a => [...a, rand])
    }
  }, [])

  return (
    <div className="flex justify-center items-end w-5/6 absolute m-auto top-1/2 left-1/2 -translate-1/2">
      {array.map((num) => (
        <div className="w-1 bg-gray-100 border text-center " style={{height: `${num * 5}px`}}>
        </div>
      ))}
    </div>
  )
}

export default App