// Components
import Visualizer from "./components/Visualizer";
import Topbar from "./components/Topbar";

const App = () => {

  return (
    <div className="flex flex-col gap-8 h-screen">
      <Topbar />
      <Visualizer />
    </div>
  )
}

export default App