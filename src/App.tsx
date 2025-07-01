import { useState, useEffect } from "react";
import { useCounterStore } from "./store";

import BubbleSort from "./algorithms/BubbleSort";

const App = () => {
  // const { count, increment, decrement } = useCounterStore();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(count);
  //     increment();
  //   }, 100)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="h-screen">
      <BubbleSort />
    </div>
  )
}

export default App