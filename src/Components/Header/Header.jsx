import React from "react";

const Header = ({
  visualizeSort,
  setAlgorithm,
  algorithm,
  generateRandomArray,
  setArrayLength,
  maxLength,
  algorithmFinished,
}) => {
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };
  const handleLengthChange = (e) => {
    setArrayLength(e.target.value);
  };
  return (
    <div className="bg-headerColor w-screen h-52 flex items-center px-10 justify-evenly">
      <div className="h-full flex items-center gap-10">
        <button
          onClick={generateRandomArray}
          className="bg-buttonColor px-10 py-5 rounded-md disabled:bg-buttonDisabled text-black"
          disabled={!algorithmFinished}
        >
          Generate Random Array
        </button>
        <button
          onClick={visualizeSort}
          className="bg-buttonColor px-10 py-5 rounded-md disabled:bg-buttonDisabled text-black"
          disabled={!algorithmFinished}
        >
          {algorithm !== "" ? (
            <span>Visualize {algorithm}</span>
          ) : (
            <span>Select an Algorithm</span>
          )}
        </button>
        <div className="flex flex-col text-center">
          <span>Length of Array</span>
          <input
            type="range"
            min="10"
            max={maxLength}
            defaultValue={maxLength}
            onChange={handleLengthChange}
          ></input>
        </div>
      </div>
      <div className="text-3xl mx-40">Visualizing Sorting Algorithms</div>
      <div>
        <select
          onChange={handleAlgorithmChange}
          className="bg-transparent border-2 px-5 py-2 rounded-md"
        >
          <option value="">Select Algorithm</option>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Cocktail Sort">Cocktail Sort</option>
          <option value="Selection Sort">Selection Sort</option>
          <option value="Merge Sort">Merge Sort</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
