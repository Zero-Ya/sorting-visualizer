// Components
import Visualizer from "./components/Visualizer";
import Topbar from "./components/Topbar";

const App = () => {

  return (
    <div className="flex flex-col h-screen text-xs md:text-sm lg:text-base">
      <Topbar />
      <Visualizer />
    </div>
  )
}

export default App