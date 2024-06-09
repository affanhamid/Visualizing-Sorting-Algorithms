const Bar = ({ bar }) => {
  return (
    <div
      className="bg-barColor absolute bottom-0"
      style={{ height: bar.num, width: 3, left: bar.distance }}
    ></div>
  );
};

export default Bar;
