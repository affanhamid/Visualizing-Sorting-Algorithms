import React from "react";
import Bar from "../Bar/Bar";

const Visualizer = ({ bars }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[90vw] h-[70vh] ">
        {bars.map((bar, idx) => (
          <Bar bar={bar} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
