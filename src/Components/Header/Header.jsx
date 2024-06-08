import React from "react";

const Header = ({ visualizeSort, setAlgorithm, generateRandomArray }) => {
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };
  return (
    <div className="bg-red-200 w-screen h-52">
      <button onClick={visualizeSort}>Sort</button>
      <button onClick={generateRandomArray}>Generate Random Array</button>
      <div>
        Sorting Algorithm
        <select onChange={handleAlgorithmChange}>
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Cocktail Sort">Cocktail Sort</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
