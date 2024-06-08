import React, { useEffect, useState } from "react";

const Bar = ({ bar }) => {
  return (
    <div
      className="bg-red-500 absolute bottom-0"
      style={{ height: bar.num, width: 3, left: bar.distance }}
    ></div>
  );
};

export default Bar;
