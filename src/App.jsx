import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Visualizer from "./Components/Visualizer/Visualizer";
import { getRandomNumber } from "./helpers/helpers";
import bubbleSort from "./Sorting Algorithms/bubbleSort";
import cocktailSort from "./Sorting Algorithms/cocktailSort";

function App() {
  const [bars, setBars] = useState([{}]);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i < 317; i++) {
      temp.push({ num: getRandomNumber(5, 600), distance: 5 * i });
    }
    setBars(temp);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  const RunAlgorithm = (algorithm) => {
    const algInterval = setInterval(() => {
      const temp = bars.slice();
      algorithm(temp, algInterval);
      setBars(temp);
    }, 0);
  };

  const visualizeSort = () => {
    if (algorithm === "Bubble Sort") {
      RunAlgorithm(bubbleSort);
    } else if (algorithm === "Cocktail Sort") {
      RunAlgorithm(cocktailSort);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Header
        visualizeSort={visualizeSort}
        setAlgorithm={setAlgorithm}
        generateRandomArray={generateRandomArray}
      />
      <Visualizer bars={bars} />
    </div>
  );
}

export default App;
