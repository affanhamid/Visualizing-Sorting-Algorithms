import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Visualizer from "./Components/Visualizer/Visualizer";
import { getRandomNumber } from "./helpers/helpers";
import bubbleSort from "./Sorting Algorithms/bubbleSort";
import cocktailSort from "./Sorting Algorithms/cocktailSort";
import mergeSort from "./Sorting Algorithms/mergeSort";
import selectionSort from "./Sorting Algorithms/selectionSort";

function App() {
  const [bars, setBars] = useState([{}]);
  const [algorithm, setAlgorithm] = useState("");
  const [maxLength, setMaxLength] = useState(0);
  const [arrayLength, setArrayLength] = useState(0);
  const [algorithmFinished, setAlgorithmFinished] = useState(true);

  const generateRandomArray = () => {
    const temp = [];
    for (let i = 0; i < arrayLength; i++) {
      temp.push({ num: getRandomNumber(5, 600), distance: 5 * i });
    }
    setBars(temp);
  };

  useEffect(() => {
    const maxWidth = Math.floor((window.screen.width - 200) / 5);
    setArrayLength(maxWidth);
    setMaxLength(maxWidth);
  }, []);

  useEffect(() => {
    generateRandomArray();
  }, [arrayLength]);

  const runAlgorithm = (algorithm) => {
    setAlgorithmFinished(false);
    const algInterval = setInterval(() => {
      const temp = bars.slice();
      const returnVal = algorithm(temp, algInterval);
      setAlgorithmFinished(returnVal);
      setBars(temp);
    }, 0);
  };

  const visualizeSort = () => {
    if (algorithm === "Bubble Sort") {
      runAlgorithm(bubbleSort);
    } else if (algorithm === "Cocktail Sort") {
      runAlgorithm(cocktailSort);
    } else if (algorithm === "Merge Sort") {
      alert("Still in Development :(");
    } else if (algorithm === "Selection Sort") {
      runAlgorithm(selectionSort);
    } else {
      alert("Select an Algorithm!");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-background text-white font-josefinSans">
      <Header
        visualizeSort={visualizeSort}
        setAlgorithm={setAlgorithm}
        algorithm={algorithm}
        generateRandomArray={generateRandomArray}
        setArrayLength={setArrayLength}
        maxLength={maxLength}
        algorithmFinished={algorithmFinished}
      />
      <Visualizer bars={bars} />
    </div>
  );
}

export default App;
