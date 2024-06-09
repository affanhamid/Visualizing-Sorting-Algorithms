import React from "react";
import Bar from "../Bar/Bar";

const Visualizer = ({ bars }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative h-[70vh]" style={{ width: bars.length * 5 }}>
        {bars.map((bar, idx) => (
          <Bar bar={bar} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
